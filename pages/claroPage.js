const { I } = inject();
const assert = require("assert");

class ClaroPage {
  loginButton = '//button[@id="btn_starts_ld"]';
  emailField = '//input[@id="emailLogin"]';
  submitEmail = '//button[@id="submitEmail"]';
  passwordField = '//input[@id="password"]';
  submitButton = '//button[@id="submitPassword"]';
  profilePage = '//button[@class="btn btn-default btn-block white center"]';
  errorMessage =
    '//div[@class="_2TFF_JfA5OPCpVYMonjCth Yrc_bTtHfRx3vNHJhbaFC _2q-NeFhUCHCF4iXsPDbGA_"]';
  buttonPrueba = '//button[@id="btn_show_free_ld"]';
  imgSearch = '//img[@class="search-item__icon fade-in-image"]';
  searchField = '//input[@id="search-input"]';
  movie = '//h2[@class="details-card__title vod"]';
  button = '//img[@class="desktop-menu__nav-button__arrow"]';
  canales = '//span[@class="section-nav"][contains(text(), "Canales")]';
  errorCanal = '//label[@class="alert-broken__container__label"]';
  serie = '(//img[@class="poster-card__image fade-in-image"])[1]';
  btnSub = '//p[@class="ActionButton__content__includes__c"]';
  btnPrueba = '(//button[@class="what-includes-purchase-button"])[1]';

  Home() {
    I.amOnPage("/");
  }

  loginWithCredentials(email, password) {
    I.waitForElement(this.loginButton, 20);
    I.click(this.loginButton);
    I.fillField(this.emailField, email);
    I.click(this.submitEmail);
    I.fillField(this.passwordField, password);
    I.click(this.submitButton);
    I.wait(5);
  }

  seeProfilePage() {
    I.waitForElement(this.profilePage, 10);
    I.see("Administrador");
    I.grabCurrentUrl().then((url) => {
      assert.ok(
        url.includes("/homeuser"),
        `Esperaba que la URL contuviera '/homeuser', pero fue: ${url}`
      );
      console.log("Inicio de sesion exitoso");
    });
  }

  seeErrorMessage() {
    I.wait(2);
    I.waitForElement(this.errorMessage, 10);
    I.seeElement(this.errorMessage);
  }

  prueba() {
    I.waitForElement(this.buttonPrueba, 10);
    I.click(this.buttonPrueba);
    I.wait(2);
  }

  searchMovie(movieName) {
    I.waitForElement(this.imgSearch, 10);
    I.click(this.imgSearch);
    I.waitForElement(this.searchField);
    I.fillField(this.searchField, movieName);
    I.pressKey("Enter");
    I.wait(3);
  }

  canal() {
    I.click(this.button);
    I.click(this.canales);
  }

  canalValidate() {
    I.waitForElement(this.errorCanal, 10);
    I.grabTextFrom(this.errorCanal).then((errorText) => {
      assert.ok(
        errorText.includes("El canal {UNO TV 1}  no está disponible por ahora"),
        `Se esperaba el mensaje de error, pero se encontró: ${errorText}`
      );
      console.log(errorText);
    });
  }

  sub(serieName) {
    I.waitForElement(this.imgSearch, 10);
    I.click(this.imgSearch);
    I.waitForElement(this.searchField, 10);
    I.fillField(this.searchField, serieName);
    I.pressKey("Enter");
    I.waitForElement(this.serie, 10);
    I.click(this.serie);
    I.waitForElement(this.btnSub, 10);
    I.click(this.btnSub);
    I.wait(3);
  }

  validateSub() {
    I.seeElement(this.btnPrueba);
    I.see("PRUEBA 30 DÍAS SIN COSTO", this.btnPrueba);
  }
}

module.exports = new ClaroPage();
