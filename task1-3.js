/* 

Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все 
ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

let personalCard = {
        name: 'Olexiy',
        surname: 'Golovko',
        merried: true,
        borneYear: 1992,
        age: 30
      }

function handlerCard(card){
        for (let key in card){
                console.log(key + ':' + card[key]);
        }
}

handlerCard(personalCard);

Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у 
переданного объекта свойство с данным именем. Функция должна возвращать true или false.

let personalCard = {
        name: 'Olexiy',
        surname: 'Golovko',
        merried: true,
        borneYear: 1992,
        age: 30
      }

function handlerCard(postInfo, card){
        return postInfo in card;
}

console.log(handlerCard('name', personalCard));

Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа. 

function createEmptyObject() {
        return Object.create(null)
      }
      
      const emptyObject = createEmptyObject();
      
      console.log(emptyObject)
      
      console.log(Object.getPrototypeOf(emptyObject))

*/

