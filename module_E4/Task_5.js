class Appliance {
    constructor(name) {
        this.name = name
    }
    turnonAppliance = function (electricity, turnon) {
    let work = false
    if (electricity && turnon) {
        work = true;
    } else {
        work = false;
    }
    return (work);
    }
    getOutput = function (output){
    console.log(`Output is ${output} W`)
    }
}
class Computer extends Appliance {
    constructor(name, type) {
        super(name);
        this.type = type
    }
}
class Telephone extends Appliance {
    constructor(name) {
        super(name)
    }
    getScreenSize = function(height, width) {
        return  Math.sqrt(height ** 2 + width ** 2)
    }
}

const comp = new Computer('Computer', 'gamer')
console.log(comp.turnonAppliance(true, true))
comp.getOutput(1600)

const phone = new Telephone('Phone', 25)
console.log(phone.turnonAppliance(true, false))
phone.getOutput(600)
console.log(phone.getScreenSize(18, 6))