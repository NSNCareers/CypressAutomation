class LoginPage
{
    enterUserEmal(email)
    {
        cy.get('#Input_Email').type(email);
    }

    enterUserPassword(password)
    {
        cy.get('#Input_Password').type(password);
    }

    clickOnLoginButton()
    {
        cy.get('div>button[type="submit"]').click();
    }

    clickOnRememberMeCheckBox()
    {
        cy.get('input[type="checkbox"]').check();
    }

    clickOnForgotYourPasswordLink()
    {
        cy.get('a[id="forgot-password"]').click();
    }

    clickOnRegisterAsANewUserLink()
    {
        cy.get('a[href*="Register?"]').click();
    }

    clickOnResendEmailConfirmationLink()
    {
        cy.get('p>button[type="submit"]').click();
    }

}

export default LoginPage