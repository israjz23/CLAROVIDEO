const { I } = inject();

class MercadoPage {
  searchField = '//input[@id="cb1-edit"]';
  searchButton = '//button[@class="nav-search-btn"]';
  products = '//a[@class="poly-component__title"]';
  errorMsg = '//div[@class="css-xkocxm"]';
  minPrice = '//input[@data-testid="Minimum-price"]';
  maxPrice = '//input[@data-testid="Maximum-price"]';
  priceLabels = '//span[@class="andes-money-amount andes-money-amount--cents-superscript"]';
  product1 = '//a[@class="poly-component__title"]';
  buyButton = '(//span[@class="andes-button__content"])[3]';
  title = '//h1[@class="ui-pdp-title"]';
  price = '(//span[@class="andes-money-amount__fraction"])[2]';

  Home() {
    I.amOnPage("/");
  }

  searchProduct(producto) {
    I.waitForElement(this.searchField, 10);
    I.fillField(this.searchField, producto);
    I.click(this.searchButton);
  }

  async validateProduct(producto) {
  const products = await I.grabTextFromAll(this.products);
  const primerosCinco = products.slice(0, 5);

  if (primerosCinco.length === 0) {
    throw new Error('No se encontraron productos para validar');
  }

  primerosCinco.forEach((titulo, index) => {
    console.log(`Producto #${index + 1}: ${titulo}`); 
    
    if (!titulo.toLowerCase().includes(producto.toLowerCase())) {
      throw new Error(`El producto #${index + 1} no coincide con "${producto}": ${titulo}`);
    }
  });
  }

  applyPriceFilter(min, max) {
    I.wait
    I.waitForElement(this.minPrice, 10);
    I.fillField(this.minPrice, min.toString());
    I.fillField(this.maxPrice, max.toString());
    I.pressKey('Enter');
    I.wait(3);
  }

  async validatePricesInRange(min, max) {
  const prices = await I.grabTextFromAll(this.priceLabels);
  const fueraDeRango = [];

  for (const priceText of prices) {
    const clean = priceText.replace(/[^\d]/g, '');
    const price = parseInt(clean);

    if (!isNaN(price)) {
      if (price < min || price > max) {
        fueraDeRango.push(price);
      }
    }
  }
  if (fueraDeRango.length > 0) {
    console.warn(`Advertencia: ${fueraDeRango.length} productos fuera de rango: ${fueraDeRango.join(', ')}`);
  } else {
    console.log('Todos los productos estan dentro del rango especificado.');
  }
 }

  openFirstProduct() {
  I.click(locate(this.product1).first());
 }

verifyProductDetailElements() {
  I.seeElement(this.title);
  I.seeElement(this.price);
  I.seeElement(this.buyButton);
 }
}

module.exports = new MercadoPage();
