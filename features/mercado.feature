Feature: Funcionalidad de busqueda y navegacion en Mercado Libre Mexico
@mercado
  Scenario: Buscar un producto y ver resultados
    Given el usuario esta en la pagina principal
    When busca el producto "laptop"
    Then se deben mostrar resultados relacionados con "laptop"

 