/* Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:

    Имена классов, свойств и методов должны быть информативными;
    Соблюдать best practices;
    Использовать синтаксис ES6.
 */

class ElectricalAppliance {
  
    constructor(powerInMinute, workingMinutes) {
      this.powerInMinute = powerInMinute;
      this.workingMinutes = workingMinutes;
    }
  
    switchOn() {
      console.log('State: switched ON')
      console.log(`Power consumption: ${this.powerInMinute} Watt`)
      console.log(`Total power consumption: ${this.powerInMinute * this.workingMinutes} Watt`)

    }
    
    switchOff() {
      console.log('State: switched OFF')
    }
  
  }
  
  // Tea kettle
  class Kettle extends ElectricalAppliance {
    
    constructor(powerInMinute, workingMinutes) {
      super(powerInMinute, workingMinutes);
      this.waterVolume = 0.0;
    }
    
    hasWater() {
      return this.waterVolume > 0.0
    }
    
    pourWater(value) {
      this.waterVolume = value
    }
    
  }
  
  // Vacuum cleaner
  class VacuumCleaner extends ElectricalAppliance {
    
    constructor(powerInMinute, workingMinutes) {
      super(powerInMinute, workingMinutes);
      this.isContainerFull = true;
    }
    
    cleanContainer(value) {
      this.isContainerFull = false;
    }
    
  }
  
  
  const teaKettle = new Kettle(33, 2);
  teaKettle.switchOn();
  if (!teaKettle.hasWater()) {
    teaKettle.pourWater(1)
  }
  console.log(`teaKettle has ${teaKettle.waterVolume} liter`)
  
  const vacuumCleaner = new VacuumCleaner(25, 10);
  vacuumCleaner.switchOn();
  if (vacuumCleaner.isContainerFull) {
    vacuumCleaner.cleanContainer()
  }
  console.log('vacuumCleaner container is empty')
  
  vacuumCleaner.switchOff()
  teaKettle.switchOff()
