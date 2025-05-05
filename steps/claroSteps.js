const claroPage = require('../pages/claroPage.js');
const { I } = inject();

Given('el usuario esta en la pagina de inicio', () => {
  claroPage.Home(); 
});

When('ingresa su correo {string} y contraseña {string}', (email, password) => {
  claroPage.loginWithCredentials(email, password);
});

Then('debe acceder a su cuenta y ver su perfil', () => {
  claroPage.seeProfilePage(); 
});

Then('mensaje de error', () => {
  claroPage.seeErrorMessage();
});

Given('estoy en la pagina principal', () => {
  claroPage.Home();
  claroPage.prueba();
});

When('escribe {string} en la barra de busqueda', (movieName) => {
  claroPage.searchMovie(movieName); 
});

Then('debe ver resultados relacionados con {string}', (movieName) => {
  I.see(movieName);
});

When('voy a canales', () => {
  claroPage.canal(); 
});

Then('deberia ver el canal', () => {
  claroPage.canalValidate();
})

When('busco {string}', (serieName) => {
  claroPage.sub(serieName);
})

Then('deberia solicitarme suscribirme', () => {
  claroPage.validateSub();
})

