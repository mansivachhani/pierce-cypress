import SortByFilter from "../../page-objects/sortByFilter";

const SORTBYFILTERS = [['https://www.24mx.ie/outlet/', 'Popular', 'Latest', 'Lowest price'], ['https://www.24mx.pl/outlet/', 'Popularne', 'Najnowsze', 'Najtańsze']];
const sortByFilter = new SortByFilter();

SORTBYFILTERS.forEach(([domain, sortByPopular, sortByLatest, sortyByPrice]) => {

    describe(`${domain} - Verify filter works as it should`, () => {
        beforeEach(() => {
            cy.viewport('macbook-16')
            cy.setCookie('GDPR', 'true');
            cy.setCookie('_gat_UA-18469658-6', '1');
            cy.visit(domain);
        });

        it('Verify filter component exists', function () {
            cy.get('p-filter-form').should('be.visible');
        });

        it('Verify user can see product filters list', function () {
            cy.url().should('contain', '/outlet');
            sortByFilter.getBreadcumbsSelector().should('be.visible').contains("Outlet");
        });

        it('Verify Sory by latest filter works as expected', function () {
            cy.url().should('not.contain', '/outlet?sortKey=pid-desc');
            sortByFilter.getFilterComponent().contains(sortByPopular).click();
            sortByFilter.getFilterComponent().contains(sortByLatest).click();
            cy.wait(2000);
            cy.url().should('contain', '/outlet?sortKey=pid-desc');
        });

        it('Verify Sort by Lowest price filter works as expected', function () {
            cy.url().should('not.contain', '/outlet?sortKey=SalePrice-asc');
            sortByFilter.getFilterComponent().contains(sortByPopular).click();
            sortByFilter.getFilterComponent().contains(sortyByPrice).click();
            cy.wait(2000);
            cy.url().should('contain', '/outlet?sortKey=SalePrice-asc');
        });
    });
});
