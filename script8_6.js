
function suma(num1, num2) {
    num1 = prompt("1er numero para sumar")
    num2 = prompt("2do numero para sumar")
    resultado = parseInt(num1) + parseInt(num2);
    alert(resultado);
}
function clickaction(b) {
    switch (b.id) {
        case "hombre":
            alert("pulsaste hombre");
            break;
        case "mujer":
            alert("pulsaste mujer");
            break;
    }
}

var getData = function () {
    var dato = document.getElementById("dato1").value;
    console.log(dato);
    //  document.getElementById("mensaje").value = dato;
    document.getElementById('cont1').innerHTML += dato;
}



function numMayor() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (num1 == num2) {
        alert("los numeros son iguales");
    } else if (num1 > num2) {
        alert("el mayor es: " + num1);
    } else {
        alert("el numero mayor es: " + num2);
    }

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function numAlea() {

    let numAleatorio = document.getElementById("numAleatorio");

    let opcionesGeneradas = "";
    for (let i = 0; i < 10; i++) {
        opcionesGeneradas += "<option>" + getRandomInt(1, 500) + "</option>";
    }

    numAleatorio.innerHTML = opcionesGeneradas;
}


function getData2() {

    let nombre = document.getElementById("dato2").value;
    let opcion = "<li> " + nombre + "</li>";
    let lista = document.getElementById("lista-nombres");
    lista.innerHTML += opcion;
}