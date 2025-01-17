//document: puente entre html y javascript
/*let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego del número secreto";*/

//innerHTML: Seta un valor sobre un elemento html
/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';*/

//let numeroSecreto = generarNumeroSecreto(); //Variable de ámbito global
let numeroSecreto = 0; //Variable de ámbito global
let intentos= 1;
let listaNumerosSorteados = []; //Almacenará los numeros para verificar si ya fue sorteado el número
let numeroMaximo = 10;



function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }

        intentos++;
        limpiarCaja();
    }
    /*console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario === numeroSecreto); //triple igual (===): Significa que el valor tiene que ser igual en valor y tipo de dato.
    */
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    //let numeroSecreto = Math.floor(Math.random()*10)+1; //Variable de ámbito de bloque
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;  

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{

        //Si el número generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            //Recursividad: Cuando una función se llama a si misma.
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
    console.log(numeroSecreto);
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();   

    //Indicar mensaje de inicio intervalo de numeros
    //mensajesIniciales();

    //Generar número aleatorio
    //numeroSecreto = generarNumeroSecreto();

    //Intentos igual a cero
    condicionesIniciales();

    //Deshabilitar boton nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled',true);


    
}

condicionesIniciales();












/*
//Desafio:

//Crea una función que muestre "Hola Mundo en la Consola"
function muestraHolaMundo(){
    console.log("Hola Mundo")
}

muestraHolaMundo();

//Crea unafuncion que reciba un nombre como parametro y muestre "¡Hola, [nombre]!" en la consola.
function muestraNombre(nombre){
    console.log(`¡Hola, ${nombre}!`)
}

muestraNombre('Patricio');

//Crea una función que reciba un número como parámetro y devuelva el doble de ese número.
function doblaNumero(numero){
    console.log(numero*2);
    return numero*2;
}

doblaNumero(2);

//Recibe 3 números como parámetro y calcula su promedio

function calculaPromedio (numero1, numero2, numero3){
    console.log( (parseInt(numero1)+parseInt(numero2)+parseInt(numero3))/3 );
    return (parseInt(numero1)+parseInt(numero2)+parseInt(numero3))/3;
}

calculaPromedio(5,9,3);

//Recibe dos numeros como parametro y retorna el mayor
function retornaNumeroMayor(num1,num2){
    let numeroMayor
    if(num1 > num2){
        numeroMayor = num1;
    }else{
        numeroMayor = num2;
    }
    console.log(`El número mayor es: ${numeroMayor}`);
    return numeroMayor;
}

retornaNumeroMayor(5,10);

//Recibe un numero por parametr y devuelve el resultado de  multiplicar ese número por si mismo
function multiplicaPorSiMismo(num1){
    console.log(num1*num1);
    return num1*num1;
}

multiplicaPorSiMismo(6);
*/

let listaVacia = [];

let lengajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Phyton'];
//console.log(lengajesDeProgramacion);
lengajesDeProgramacion.push('Java');
lengajesDeProgramacion.push('Ruby');
lengajesDeProgramacion.push('GoLang');

console.log(lengajesDeProgramacion);

function mostrarLista(){
    //console.log(lengajesDeProgramacion);
    let listaInversa = [];
    let cantidadElementosLista = lengajesDeProgramacion.length-1;
    //console.log(cantidadElementosLista);

    while (cantidadElementosLista >= 0){
        listaInversa.push(lengajesDeProgramacion[cantidadElementosLista]);
        cantidadElementosLista --;
    }

    console.log(listaInversa);

}

//mostrarLista();

function calculaPromedioLista(){
    let listaNumeros = [1,2,6,7,7]

    let suma  = 0;
    let promedio = 0;
    let cantidadElementosLista = listaNumeros.length-1
    let contador = listaNumeros.length-1;
    console.log(cantidadElementosLista);

    while(contador >= 0){
        suma = suma+listaNumeros[contador];
        console.log(suma);
        contador--;
    }

    promedio = suma/cantidadElementosLista;
    console.log(promedio);
}

//calculaPromedioLista();

function numeroMayor(listaNumerosDesafio){
    //let numerosAlAzar = [74,11,2,10];
    let numerosAlAzar = listaNumerosDesafio;
    let maximaIteracion = numerosAlAzar.length-1;
    let numeroMayor = 0;

    for (let i = 0; i < numerosAlAzar.length; i++) {
        //console.log(i)
        if(i+1 <= maximaIteracion){
            if(numeroMayor > numerosAlAzar[i]){
                numeroMayor = numeroMayor
            }else{
                numeroMayor = numerosAlAzar[i]
            }
        }

        //console.log(numeroMayor);
        
    }

    console.log(numeroMayor);
}

function numeroMenor(listaNumerosDesafio){
    //let numerosAlAzar = [74,11,2,10];
    let numerosAlAzar = listaNumerosDesafio;
    let maximaIteracion = numerosAlAzar.length-1;
    let numeroMenor;

    for (let i = 0; i < numerosAlAzar.length; i++) {
  
        if(i+1 <= maximaIteracion){
            if(numeroMenor < numerosAlAzar[i]){
                numeroMenor = numeroMenor
            }else{
                numeroMenor = numerosAlAzar[i]
            }
        }
        
    }

    console.log(numeroMenor);
}

function muestraMenoryMayor(listaNumerosDesafio){
    numeroMayor(listaNumerosDesafio);
    numeroMenor(listaNumerosDesafio);
}

let listaNumerosDesafio = [74,1,2,10];
muestraMenoryMayor(listaNumerosDesafio);
