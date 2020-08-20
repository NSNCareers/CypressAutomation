class HomePage
{

    clickOnRegisterLink()
    {
        cy.clickOnElement('ul>li>a[href*="Register"]');
    }

    clickOnLoginLink()
    {
        cy.clickOnElement('ul>li>a[href*="Login"]');
    }

    getPageTitle()
    {
        var title = cy.title();
        return title;
    }

}

export default HomePage;