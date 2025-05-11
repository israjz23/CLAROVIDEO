const mercadoPage = require('../pages/mercadoPage.js');

Given('el usuario esta en la pagina principal', () => {
  mercadoPage.Home();
});

When('busca el producto {string}', (producto) => {
  mercadoPage.searchProduct(producto);
});

Then('se deben mostrar resultados relacionados con {string}', (producto) => {
  mercadoPage.validateProduct(producto);
});

Given('el usuario ha buscado {string}', (producto) => {
  mercadoPage.Home();
  mercadoPage.searchProduct(producto);
});

When('aplica un filtro de precio minimo de {int} y maximo de {int}', (min, max) => {
  mercadoPage.applyPriceFilter(min, max);
});

Then('los productos deben estar dentro del rango', async () => {
  await mercadoPage.validatePricesInRange(10000, 16000);
});

When('hace clic en el primer resultado de la lista', () => {
  mercadoPage.openFirstProduct();
});

Then('debe ser redirigido a la pagina de detalles del producto', () => {
  mercadoPage.verifyProductDetailPage();
});

Then('la pagina debe mostrar el titulo, precio y boton de compra', () => {
  mercadoPage.verifyProductDetailElements();
});

