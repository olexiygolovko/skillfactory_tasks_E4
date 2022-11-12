/* Задание 4.

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

        Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
        Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
        У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
        Создать экземпляры каждого прибора.
        Вывести в консоль и посмотреть результаты работы, гордиться собой. :)

Общие требования:

        Имена функций, свойств и методов должны быть информативными.
        Соблюдать best practices:

            использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
            информативные имена (а не a, b);
            четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
            использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.

При возникновении проблем по ходу решения вы всегда можете обратиться к ментору в Slack.  */


function ElectricalAppliance(power) {
    this.power = power
  }
  
  ElectricalAppliance.prototype.switchOn = function() {
    console.log('State: switched ON')
    console.log(`Power consumption: ${this.power} Watt`)
  }
  
  ElectricalAppliance.prototype.switchOff = function() {
    console.log('State: switched OFF')
  }
  
  // Tea kettle
  function Kettle(power) {
    this.power = power
    this.waterVolume = 0.0
  }
  
  Kettle.prototype = new ElectricalAppliance()
  
  Kettle.prototype.hasWater = function() {
    return this.waterVolume > 0.0
  }
  
  Kettle.prototype.pourWater = function(value) {
    this.waterVolume = value
  }
  
  // Vacuum cleaner
  function VacuumCleaner(power) {
    this.power = power
    this.isContainerFull = true
  }
  
  VacuumCleaner.prototype = new ElectricalAppliance()
  
  VacuumCleaner.prototype.cleanContainer = function(value) {
    this.isContainerFull = false
  }
  
  // Microwave
  function Microwave(power) {
    this.power = power
    this.foodInBox = false
  }

  Microwave.prototype = new ElectricalAppliance()

  Microwave.prototype.foodIn = function(value) {
    this.foodInBox = true
  }
  
  const teaKettle = new Kettle(900);
  teaKettle.switchOn();
  if (!teaKettle.hasWater()) {
    teaKettle.pourWater(1)
  }
  console.log(`teaKettle has ${teaKettle.waterVolume} liter`);
  
  const vacuumCleaner = new VacuumCleaner(1800);
  vacuumCleaner.switchOn();
  if (vacuumCleaner.isContainerFull) {
    vacuumCleaner.cleanContainer()
  }
  console.log('vacuumCleaner container is empty');

  const microwave = new Microwave(2200);
  microwave.switchOn();
  if (microwave.foodInBox) {
    microwave.foodIn(1)
  }
  console.log('in microwave box with food');
  
  vacuumCleaner.switchOff()
  teaKettle.switchOff()
  microwave.switchOff()

