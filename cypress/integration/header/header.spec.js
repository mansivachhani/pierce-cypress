import Header from "../../page-objects/header";
const header = new Header();

describe("https://www.24mx.ie/ - Check the header of the website in desktop viewport", () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.setCookie('GDPR', 'true');
        cy.setCookie('_gat_UA-18469658-6', '1');
        cy.visit('/');
    });

    it('Verify search and cart component exists', function () {
        header.getCartElement().should('be.visible');
        header.getSearchElement().should('be.visible');
    });

    it('Check main navigation and its respective submenu', function () {
        header.getMenu().contains("Motocross Gear").click();
        header.getSubMenuSelector().should('be.visible').contains("Motocross Clothing");
        header.getMenu().contains("Motocross Parts").click();
        header.getSubMenuSelector().should('be.visible').contains("Exhaust Systems");
        header.getMenu().contains("Motocross Accessories").click();
        header.getSubMenuSelector().should('be.visible').contains("Tools");
        header.getMenu().contains("Streetwear").click();
        header.getSubMenuSelector().should('be.visible').contains("Bags");
    });
});

describe("https://www.24mx.pl/ - Check the header of the website in desktop viewport", () => {
    beforeEach(() => {
        cy.viewport('macbook-16')
        cy.setCookie('GDPR', 'true');
        cy.setCookie('_gat_UA-18469658-6', '1');
        cy.visit('https://www.24mx.pl/');
    });

    it('Verify search and cart component exists', function () {
        header.getCartElement().should('be.visible');
        header.getSearchElement().should('be.visible');
    });

    it('Check main navigation and its respective submenu', function () {
        header.getMenu().contains("Wyposażenie MX").click();
        cy.get('.o-navigation-submenu:first-of-type').should('be.visible').contains("Kaski");
        header.getMenu().contains("Części MX").click();
        header.getSubMenuSelector().should('be.visible').contains("Klocki Hamulcowe");
        header.getMenu().contains("Akcesoria MX").click();
        header.getSubMenuSelector().should('be.visible').contains("Akcesoria MX");
        header.getMenu().contains("Odzież Codzienna").click();
        header.getSubMenuSelector().should('be.visible').contains("Akcesoria");
    });
});