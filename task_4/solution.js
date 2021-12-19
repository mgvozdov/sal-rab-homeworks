// Задание 4.1. Вывод карточек товаров

function parseProducts(json){
  let data = JSON.parse(json);
  let products = data.products;
  return products;
    // Аргументом функции является JSON

    // Преобразуйте строку json, переданную как аргумент функции,
    // в объект с помощью функции JSON.parse(json)
    // и запишите в переменную data
    // Верните как результат функции свойство products объекта data
}

function renderProductsCards(JSON){
 
  let products = parseProducts(JSON);
  let length = products.length;
  for (let i = 0; i <= length-1; i += 1) {
    addProduct(products[i]);
            // место для пункта 7
  }

}
