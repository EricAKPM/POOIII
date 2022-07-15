import VehicleBuilder from "./Builders/VehicleBuilder";
import Director from "./Directors/Director";
import Vehicle from "./Products/Vehicle";

const builder : VehicleBuilder =  new VehicleBuilder()
const director : Director = new Director(builder)

director.construcorPickUpTruck()
let pickup : Vehicle = builder.getVehicle()
console.log('Criando um veiculo do tipo : ' + pickup.vehicleType)
console.log('Possui ' + pickup.whellsTotal + ' rodas!!')
console.log('Possui ' + pickup.seat + ' lugares!!')

builder.reset()

director.constructSedanCar()
let sedan : Vehicle = builder.getVehicle()
console.log('Criando um veiculo do tipo : ' + sedan.vehicleType)
console.log('Possui ' + sedan.whellsTotal + ' rodas!!')
console.log('Possui ' + sedan.seat + ' lugares!!')

builder.reset()
director.constructSUV()
let SUV : Vehicle = builder.getVehicle()
console.log('Criando um veiculo do tipo : ' + SUV.vehicleType)
console.log('Possui ' + SUV.whellsTotal + ' rodas!!')
console.log('Possui ' + SUV.seat + ' lugares!!')

builder.reset()
director.constructorTruck()
let Truck : Vehicle = builder.getVehicle()
console.log('Criando um veiculo do tipo : ' + Truck.vehicleType)
console.log('Possui ' + Truck.whellsTotal + ' rodas!!')
console.log('Possui ' + Truck.seat + ' lugares!!')
console.log('Caçamba: ' + Truck.bucket)