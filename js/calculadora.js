//ejemplo de calculadora
//inicializamos con window.onload para que que se espere a que cargue toda la página antes de comenzar a operar. Esto no permite ejecutar nada hasta que nos e cargue la página completamente.
window.onload = iniciar;

//En esta primera función llamamos al botón con el que vamos a calcular y le AÑADIMOS el evento de click
function iniciar(){
    let btnCalcular = document.getElementById("btnCalcular");//llamamos al elemto html del botón y lo guardamos en una variable.
    
    btnCalcular.addEventListener("click", clickBtnCalcular);


}
function clickBtnCalcular(){//Esta función se ejecuta cuando CLICK al botón.
    let txtPeso = document.getElementById("txtPeso");
    let peso = txtPeso.value;

    let txtAltura = document.getElementById("txtAltura");
    let altura = txtAltura.value;

    let imc = peso / (altura*altura);
    let redondeo = Math.round(imc);
    let resultado = document.getElementById("resultadoIMC");

    
    if(resultado){
        resultado.innerHTML = `<b>EL IMG ES:</b> ${redondeo}`
    }
    
    
    
    
}

