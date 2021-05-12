"use strict";
var car = new Car("", "", "");
var wheelsForm = document.getElementsByClassName("wheels-form")[0];
//FUNCIONES
//01 FUNCION MOSTRAR COCHE
function showCar(car) {
    alert("Estamos en showCar");
    var divCar = document.getElementById("carInfo");
    var carForm = document.getElementsByClassName("car-form")[0];
    var displayCar = "\n        <table class=\"table table-dark\">\n        <tr>\n        CAR:\n        </tr>\n        \n        <tr>\n            <td><b>Plate:</b> " + car.plate + "</td>\n            <td><b>Brand:</b> " + car.brand + "</td>\n            <td><b>Color:</b> " + car.color + "</td>\n        </tr>\n        </tbody>\n        </table>\n    ";
    divCar.innerHTML = displayCar;
    carForm.classList.add("d-none");
    wheelsForm === null || wheelsForm === void 0 ? void 0 : wheelsForm.classList.toggle("d-none");
}
//01.1 funcion show wheel
function showWheels(car) {
    alert("Estamos en showWheel");
    var divWheels = document.getElementById("wheelsInfo");
    var displayWheels = "\n        <table class=\"table table-sm table-borderless\">\n        <thead>\n            <tr>\n                <th>Wheels:</th>\n            </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td>Wheel 1: " + car.wheels[0].brand + "</td>\n            <td>Wheel 2: " + car.wheels[1].brand + "</td>\n            <td>Wheel 3: " + car.wheels[2].brand + "</td>\n            <td>Wheel 4: " + car.wheels[3].brand + "</td>\n        </tr>\n        <tr>\n            <td>DLC Diameter: " + car.wheels[0].diameter + "</td>\n            <td>DLC Diameter: " + car.wheels[1].diameter + "</td>\n            <td>DLC Diameter: " + car.wheels[2].diameter + "</td>\n            <td>DLC Diameter: " + car.wheels[3].diameter + "</td>\n        </tr>\n        </tbody>\n        </table>\n        <br>\n        <button type=\"button\" class=\"btn btn-dark\" onclick=\"location.reload()\">Inicio</button>\n    ";
    wheelsForm === null || wheelsForm === void 0 ? void 0 : wheelsForm.classList.add("d-none");
    divWheels.innerHTML = displayWheels;
}
//02 FUNCION VALIDAR matrciula
function validatePlate(plate) {
    var regex = /^(\d{4}[a-zA-Z]{3})$/;
    return regex.test(plate) ? true : false;
}
//03 FUNCION CREAR COCHE
function createCar() {
    var plateController = document.getElementById("inputMatricula").value;
    var brandController = document.getElementById("inputMarca").value;
    var colorController = document.getElementById("inputColorCoche").value;
    var inputPlateDiv = document.getElementById("inputMatricula");
    var inputPlateError = document.getElementById("plateError");
    if (validatePlate(plateController)) {
        alert("funciona y se va para la funcion showCar");
        car.plate = plateController;
        car.brand = brandController;
        car.color = colorController;
        showCar(car);
    }
    else {
        alert("no funciona y se va a invalid");
        inputPlateDiv.classList.add("is-invalid");
        inputPlateError.textContent = "Invalid format, introduce 4 numbers and 3 letters";
    }
}
function validateDiam(diams) {
    var regex = /[0-9.]+$/;
    if (diams != "" && regex.test(diams)) {
        var diamsNumerico = parseFloat(diams);
        if (diamsNumerico >= 0.4 && diamsNumerico <= 2) {
            return true;
        }
    }
    return false;
}
//04 FUNCION CREAR RUEDA
function addWheels(car) {
    var _a, _b, _c, _d;
    var wheelValidator = true;
    for (var i = 1; i < 5; i++) {
        var rueda_Controller = document.getElementById("inputMarca" + i).value;
        var diametro_Controller = Number(document.getElementById("inputDiametro" + i).value);
        var inputMarcaError = document.getElementById("marcaError" + i);
        var inputDiametroError = document.getElementById("diameterError" + i);
        //let inputMarcaError = document.getElementById("marcaError" + i) as HTMLDivElement;
        //let inputDiametroError = document.getElementById("diameterError" + i) as HTMLDivElement;
        (_a = document.getElementById("inputMarca" + i)) === null || _a === void 0 ? void 0 : _a.classList.remove("is-invalid");
        (_b = document.getElementById("inputDiametro" + i)) === null || _b === void 0 ? void 0 : _b.classList.remove("is-invalid");
        if (rueda_Controller == "") {
            (_c = document.getElementById("inputMarca" + i)) === null || _c === void 0 ? void 0 : _c.classList.add("is-invalid");
            inputMarcaError.textContent = "Campo requerido";
            wheelValidator = false;
        }
        if (!validateDiam(diametro_Controller)) {
            (_d = document.getElementById("inputDiametro" + i)) === null || _d === void 0 ? void 0 : _d.classList.add("is-invalid");
            inputDiametroError.textContent = "Tamaño entre 0.4 y 2";
            wheelValidator = false;
        }
    }
    if (wheelValidator == true) {
        for (var i = 1; i < 5; i++) {
            var rueda_Controller_1 = document.getElementById("inputMarca" + i).value;
            var diametro_Controller_1 = parseFloat(document.getElementById("inputDiametro" + i).value);
            var newWheel = new Wheel(diametro_Controller_1, rueda_Controller_1);
            car.addWheel(newWheel);
        }
        showWheels(car);
    }
}
var createCarBtnInput = document.getElementById('createCarBtn');
createCarBtnInput.addEventListener("click", function () {
    createCar();
});
var createAddWheelsBtnInput = document.getElementById('createWheelsBtn');
createAddWheelsBtnInput.addEventListener("click", function () {
    addWheels(car);
});
/*
var rueda_1Controller:string = (<HTMLInputElement>document.getElementById("inputMarca1")).value;
var diametro_1Controller:any = (<HTMLInputElement>document.getElementById("inputDiametro1")).value;

var rueda_2Controller:string = (<HTMLInputElement>document.getElementById("inputMarca2")).value;
var diametro_2Controller:any = (<HTMLInputElement>document.getElementById("inputDiametro2")).value;

var rueda_3Controller:string = (<HTMLInputElement>document.getElementById("inputMarca3")).value;
var diametro_3Controller:any = (<HTMLInputElement>document.getElementById("inputDiametro3")).value;

var rueda_4Controller:string = (<HTMLInputElement>document.getElementById("inputMarca4")).value;
var diametro_4Controller:any = (<HTMLInputElement>document.getElementById("inputDiametro4")).value;


let inputDiametro1Div = document.getElementById("inputDiametro1") as HTMLDivElement;
let inputDiametro2Div = document.getElementById("inputDiametro2") as HTMLDivElement;
let inputDiametro3Div = document.getElementById("inputDiametro3") as HTMLDivElement;
let inputDiametro4Div = document.getElementById("inputDiametro4") as HTMLDivElement;

let inputDiametro1Error = document.getElementById("diameterError") as HTMLDivElement;
//diametro 1 validator
if(diametro_1Controller > 0.4 && diametro_1Controller < 2){
   // alert("funciona seguimos1");
    let newWheel01 = new Wheel(diametro_1Controller, rueda_1Controller);
    car.addWheel(newWheel01);
    inputDiametro1Div.classList.remove("is-invalid");
}else {
    inputDiametro1Div.classList.add("is-invalid");
    inputDiametro1Error.textContent = "Invalid format, introduce un numero entre 0,4 - 2";
    alert("no funciona y se va a invalid");
    
}
//diametro 2 validator
if(diametro_2Controller > 0.4 && diametro_2Controller < 2){
    alert("funciona seguimos2");
    let newWheel02 = new Wheel(diametro_2Controller, rueda_2Controller);
    car.addWheel(newWheel02);
    inputDiametro2Div.classList.remove("is-invalid");
}else {
    inputDiametro2Div.classList.add("is-invalid");
    inputDiametro1Error.textContent = "Invalid format, introduce un numero entre 0,4 - 2";
    alert("no funciona y se va a invalid");
    
}
//diametro 3 validator
if(diametro_3Controller > 0.4 && diametro_3Controller < 2){
    alert("funciona seguimos3");
    let newWheel03 = new Wheel(diametro_3Controller, rueda_3Controller);
    car.addWheel(newWheel03);
    inputDiametro3Div.classList.remove("is-invalid");
}else {
    inputDiametro3Div.classList.add("is-invalid");
    inputDiametro1Error.textContent = "Invalid format, introduce un numero entre 0,4 - 2";
    alert("no funciona y se va a invalid");
    
}
//diametro 4 validator
if(diametro_4Controller > 0.4 && diametro_4Controller < 2){
    alert("funciona seguimos4");
    let newWheel04 = new Wheel(diametro_4Controller, rueda_4Controller);
    car.addWheel(newWheel04);

    inputDiametro4Div.classList.remove("is-invalid");
}else {
    inputDiametro4Div.classList.add("is-invalid");
    inputDiametro1Error.textContent = "Invalid format, introduce un numero entre 0,4 - 2";
    alert("no funciona y se va a invalid");
    
}

showWheels(car);
*/
/*
    let car=new Car(plate,color,brand);
    car.addWheel(new Wheel(2,"SEAT"));
    document.body.innerText="CAR: PLATE: " + car.plate
    + " COLOR: " +car.color + " BRAND: " + brand
    + " WHEELS: " + JSON.stringify(car.wheels);*/ 
