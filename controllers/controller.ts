let car: Car;
car = new Car("plate", "brand", "color");

//= new Car("","","");
let wheelsForm = document.getElementsByClassName("wheels-form")[0];



//FUNCIONES

//01 FUNCION MOSTRAR COCHE
function showCar(car: Car) {
    alert("Estamos en showCar");
    let divCar = document.getElementById("carInfo") as HTMLDivElement;
    let carForm = document.getElementsByClassName("car-form")[0];


    let displayCar: string = `
        <table class="table table-dark">
        <tr>
        CAR:
        </tr>
        
        <tr>
            <td><b>Plate:</b> ${car.plate}</td>
            <td><b>Brand:</b> ${car.brand}</td>
            <td><b>Color:</b> ${car.color}</td>
        </tr>
        </tbody>
        </table>
    `;
    divCar.innerHTML = displayCar;
    carForm.classList.add("d-none");
    wheelsForm?.classList.toggle("d-none");
}

//01.1 funcion show wheel

function showWheels(car: Car) {
    alert("Estamos en showWheel");
    let divWheels = document.getElementById("wheelsInfo") as HTMLDivElement;

    let displayWheels: string = `
        <table class="table table-sm table-borderless">
        <thead>
            <tr>
                <th>Wheels:</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>Wheel 1: ${car.wheels[0].brand}</td>
            <td>Wheel 2: ${car.wheels[1].brand}</td>
            <td>Wheel 3: ${car.wheels[2].brand}</td>
            <td>Wheel 4: ${car.wheels[3].brand}</td>
        </tr>
        <tr>
            <td>DLC Diameter: ${car.wheels[0].diameter}</td>
            <td>DLC Diameter: ${car.wheels[1].diameter}</td>
            <td>DLC Diameter: ${car.wheels[2].diameter}</td>
            <td>DLC Diameter: ${car.wheels[3].diameter}</td>
        </tr>
        </tbody>
        </table>
        <br>
        <button type="button" class="btn btn-dark" onclick="location.reload()">Inicio</button>
    `;
    wheelsForm?.classList.add("d-none");
    divWheels.innerHTML = displayWheels;

}



//02 FUNCION VALIDAR matrciula
function validatePlate(plate: string) {
    let regex = /^(\d{4}[a-zA-Z]{3})$/;
                
    return regex.test(plate) ? true : false;
}




//03 FUNCION CREAR COCHE
function createCar() {

    var plateController: string = (<HTMLInputElement>document.getElementById("inputMatricula")).value;
    var brandController: string = (<HTMLInputElement>document.getElementById("inputMarca")).value;
    var colorController: string = (<HTMLInputElement>document.getElementById("inputColorCoche")).value;

    let inputPlateDiv = document.getElementById("inputMatricula") as HTMLDivElement;
    let inputPlateError = document.getElementById("plateError") as HTMLDivElement;


    if (validatePlate(plateController)) {
        alert("funciona y se va para la funcion showCar");
        car.plate = plateController;
        car.brand = brandController;
        car.color = colorController;
        showCar(car);


    } else {
        alert("no funciona y se va a invalid");
        inputPlateDiv.classList.add("is-invalid");
        inputPlateError.textContent = "Invalid format, introduce 4 numbers and 3 letters";

    }

}

function validateDiam(diams:string) {
    let regex = /[0-9.]+$/;

    if (diams != "" && regex.test(diams)) {
        let diamsNumerico = parseFloat(diams);
        if (diamsNumerico>=0.4 && diamsNumerico<=2) {
            return true;
        }
    } 
    return false;
}

//04 FUNCION CREAR RUEDA
function addWheels(car: Car) {
    let wheelValidator = true;

    for (let i = 1; i < 5; i++) {
        var rueda_Controller: string = (<HTMLInputElement>document.getElementById("inputMarca" + i)).value;
        var diametro_Controller: any = Number((<HTMLInputElement>document.getElementById("inputDiametro" + i)).value);

        let inputMarcaError = <HTMLDivElement>document.getElementById("marcaError"+i);
        let inputDiametroError = <HTMLDivElement>document.getElementById("diameterError" + i);

        //let inputMarcaError = document.getElementById("marcaError" + i) as HTMLDivElement;
        //let inputDiametroError = document.getElementById("diameterError" + i) as HTMLDivElement;

        document.getElementById("inputMarca" + i)?.classList.remove("is-invalid");
        document.getElementById("inputDiametro" + i)?.classList.remove("is-invalid");

        if (rueda_Controller == "") {
            document.getElementById("inputMarca"+i)?.classList.add("is-invalid");
            inputMarcaError.textContent = "Campo requerido"; 
            wheelValidator = false;
        } 

        
        if (!validateDiam(diametro_Controller)) {
            document.getElementById("inputDiametro"+i)?.classList.add("is-invalid");
            inputDiametroError.textContent = "Tamaño entre 0.4 y 2";
            wheelValidator = false;
        }
    }
    if (wheelValidator == true) {
        for (let i = 1; i<5; i++) {
            let rueda_Controller:string = (<HTMLInputElement>document.getElementById("inputMarca"+i)).value;
            let diametro_Controller:number = parseFloat((<HTMLInputElement>document.getElementById("inputDiametro"+i)).value);
            let newWheel = new Wheel(diametro_Controller, rueda_Controller);
            car.addWheel(newWheel);
       

            }

    showWheels(car);

    }
}


let createCarBtnInput = document.getElementById('createCarBtn')!;
createCarBtnInput.addEventListener("click", function(){
    createCar();
});



let createAddWheelsBtnInput = document.getElementById('createWheelsBtn')!;
createAddWheelsBtnInput.addEventListener("click", function(){
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