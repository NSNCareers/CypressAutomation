class RegisterPage
{
    getCreateAccountElement()
    {
        var element = cy.get('div>form>h4');
        return element;
    }

    enterUserEmal(email)
    {
        cy.get('#Input_Email').type(email);
    }

    enterUserPassword(password)
    {
        cy.get('#Input_Password').type(password);
    }

    enterUserConfirmPassword(cornPassword)
    {
        cy.get('#Input_ConfirmPassword').type(cornPassword);
    }
}

export default RegisterPage;