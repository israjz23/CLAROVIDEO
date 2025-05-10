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


