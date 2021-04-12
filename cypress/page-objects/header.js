class Header {
    getMenu() {
        return cy.get("p-navigation .o-navigation ul");
    };

    getCartElement() {
        return cy.get('p-header-minicart').find('.qa-desktop-header-cart');
    }

    getSearchElement() {
        return cy.get('p-search-input[inputid="search-desktop"]').find('input[type="search"]');
    }
}
export default Header
