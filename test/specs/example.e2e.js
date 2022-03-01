//home page view 

// const getHomePage = require("./homePageLink");

describe('Home page view is properly', () => {
    it('should view the home page', async () => {
        await browser.url('https://www.prothomalo.com/');

        expect(browser).toHaveTitle('প্রথম আলো | বাংলা নিউজ পেপার');
    });

    it('should login with email and password', async () => {
        await browser.url('https://auth.prothomalo.com/sign-in-page?callback-url=https%3A%2F%2Fen.prothomalo.com&redirect-url=https%3A%2F%2Fen.prothomalo.com%2F')
        
        const emailInput = await $('[name="email"]');
        emailInput.addValue('test@gmail.com')
        console.log(emailInput)

        const passInput = await $('[name="password"]');
        passInput.addValue('test12345');

        const loginBtn = await $('.button button-m__type3__3Bn4T');

        loginBtn.click();


    })

});

// describe('login with google', () => {
//     it('should login with google', async() => {
//         await browser.url('https://auth.prothomalo.com/sign-in-page?callback-url=https%3A%2F%2Fen.prothomalo.com&redirect-url=https%3A%2F%2Fen.prothomalo.com%2F')
//         const googleBtn = $('google social-auth-button-m__google-wrapper__2-cGv"')

//         googleBtn.click();

//         const email = $('lCoei YZVTmd SmR8');

//         email.click();
        
//     })
// })

// describe('login with email and password', () => {
//     it('should login with email and password', async () => {
//         await browser.url('https://auth.prothomalo.com/sign-in-page?callback-url=https%3A%2F%2Fen.prothomalo.com&redirect-url=https%3A%2F%2Fen.prothomalo.com%2F')
        
//         const emailInput = $('textfield textfield-m__type2__3xTgW');
//         emailInput.addValue('test@gmail.com')

//         const passInput = $('password password-field-m__passwor__IAFfy');
//         passInput.addValue('test12345');

//         const loginBtn = $('button button-m__type3__3Bn4T');

//         loginBtn.click();


//     })
// })



