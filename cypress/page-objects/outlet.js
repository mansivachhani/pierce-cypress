class OutletPage {
    getBreadcrumbsElement() {
        return cy.get('p-breadcrumbs').find('.a-breadcrumb');
    };
}
export default OutletPage;