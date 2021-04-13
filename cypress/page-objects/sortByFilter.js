class SortByFilter {
    getFilterComponent() {
        return cy.get('.o-filter__tabs--sort-order');
    };
    getBreadcumbsSelector() {
        return cy.get('p-breadcrumbs').find('.a-breadcrumb');
    }
}
export default SortByFilter