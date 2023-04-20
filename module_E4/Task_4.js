function Appliance(name) {
    this.name = name
}
Appliance.prototype.turnonAppliance = function (electricity, turnon) {
    let work = false
    if (electricity && turnon) {
        work = true;
    } else {
        work = false;
    }
    return (work);
}
Appliance.prototype.getOutput = function (output){
    console.log(`Output is ${output} W`)
}
function Computer(name, type) {
    this.name = name
    this.type = type
}
Computer.prototype = new Appliance()
function Telephone(name) {
    this.name = name
    this.getScreenSize = function(height, width) {
        screenSize = Math.sqrt(height ** 2 + width ** 2);
        return screenSize
    }
}
Telephone.prototype = new Appliance()

const comp = new Computer('Computer', 'gamer')
console.log(comp.turnonAppliance(true, true))
comp.getOutput(1600)

const phone = new Telephone('Phone', 25)
console.log(phone.turnonAppliance(true, false))
phone.getOutput(600)
console.log(phone.getScreenSize(18, 6))
