class Pagination {
    getElement() {
        return cy.get('p-pagination');
    };
    getPage3ButtonElement() {
        return cy.get('p-pagination').find('a[href="/outlet?page=3"]').contains('3');
    }
    getNextButtonElement() {
        return cy.get('p-pagination').find('span.m-pagination__nav-next');
    }
    getPrevButtonElement() {
        return cy.get('p-pagination').find('span.m-pagination__nav-prev');
    }
}
export default Pagination