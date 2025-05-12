Feature: Validaciones en Mercado 
@mercado

  Scenario: Buscar un producto y ver resultados
    Given el usuario esta en la pagina principal
    When busca el producto "laptop"
    Then se deben mostrar resultados relacionados con "laptop"

  Scenario: Aplicar filtro de precio minimo y maximo
    Given el usuario ha buscado "celular"
    When aplica un filtro de precio minimo de 10000 y maximo de 16000
    Then los productos deben estar dentro del rango 

  Scenario: Ingresar a la pagina del primer resultado
    Given el usuario ha buscado "audifonos"
    When hace clic en el primer resultado de la lista
    And la pagina debe mostrar el titulo, precio y boton de compra
