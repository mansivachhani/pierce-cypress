import Pagination from "../../page-objects/pagination";

const DOMAINS = ['https://www.24mx.ie', 'https://www.24mx.pl'];
const pagination = new Pagination();

DOMAINS.forEach((domain) => {
    describe(`${domain}: Test Pagination feature`, () => {
        beforeEach(() => {
            cy.viewport('macbook-16')
            cy.setCookie('GDPR', 'true');
            cy.setCookie('_gat_UA-18469658-6', '1');
            cy.visit(`${domain}/outlet`);
        });

        it('Verify the pagination component exists', function () {
            pagination.getElement().should('be.visible');
        });

        it('Verify next page button click', function () {
            cy.url().should('not.contain', '/outlet?page=2');
            pagination.getNextButtonElement().should('be.visible').click();
            cy.url().should('contain', '/outlet?page=2');
        });

        it('Verify previous page button click', function () {
            cy.visit(`${domain}/outlet?page=2`);
            cy.url().should('contain', '/outlet?page=2');
            pagination.getPrevButtonElement().should('be.visible').click();
            cy.url().should('contain', '/outlet');
        });

        it('Verify particular page number button click', function () {
            cy.visit(`${domain}/outlet?page=2`);
            cy.url().should('contain', '/outlet?page=2');

            pagination.getPage3ButtonElement().should('be.visible').click();
            cy.url().should('contain', '/outlet?page=3');
        });
    });
});