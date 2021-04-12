import OutletPage from "../../page-objects/outlet";

const DOMAINS = ['https://www.24mx.ie/outlet/', 'https://www.24mx.pl/outlet/'];

DOMAINS.forEach(domain =>
    describe(`${domain} - Check the outlet view in desktop view port`, () => {
        const outlet = new OutletPage();
        beforeEach(() => {
            cy.viewport('macbook-16')
            cy.setCookie('GDPR', 'true');
            cy.setCookie('_gat_UA-18469658-6', '1');
            cy.visit(domain);
        });

        it('Verify user can be navigated to /outlet page', function () {
            cy.url().should('contain', '/outlet');
            outlet.getBreadcrumbsElement().should('be.visible').contains("Outlet");
        });

        it('Verify user can see product filters list', function () {
            cy.url().should('contain', '/outlet');
            outlet.getBreadcrumbsElement().should('be.visible').contains("Outlet");
        });
    }),
);
