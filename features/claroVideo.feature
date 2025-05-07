Feature: Validaciones en Claro Video

  @login
  Scenario Outline: Iniciar sesion en Claro Video
    Given el usuario esta en la pagina de inicio
    When ingresa su correo "<email>" y contraseña "<password>"
    Then <resultado>

  Examples:
      | email                      | password       | resultado                                |
      | israeljaimeqc@gmail.com    | Qc123456       | debe acceder a su cuenta y ver su perfil |
      | israeljaimeqc@gmail.com    | 123456         | mensaje de error                         |

  @movie
  Scenario: Buscar una pelicula 
  Given estoy en la pagina principal
  When escribe "Gladiador" en la barra de busqueda
  Then debe ver resultados relacionados con "Gladiador"

  @canal
  Scenario: Reproducir un canal
    Given estoy en la pagina principal
    When voy a canales
    Then deberia ver el canal
 
  @sub
    Scenario: Validar suscripcion
      Given estoy en la pagina principal
      When busco "Tortugas Ninja"
      Then deberia solicitarme suscribirme
