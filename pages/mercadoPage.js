const { I } = inject();

class MercadoPage {
  searchField = '//input[@id="cb1-edit"]';
  searchButton = '//button[@class="nav-search-btn"]';
  products = '//a[@class="poly-component__title"]';
  errorMsg = '//div[@class="css-xkocxm"]'

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
}

module.exports = new MercadoPage();
