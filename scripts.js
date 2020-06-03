"use strict"


// Variables __________
var resultadoUno;
var resultadoDos;
var resultadoTres;
var miNumero;
var miNumeroDos;
var miNumeroTres;
var miSpan;
var miSpanDos;
var miSpanTres;
var botLine;
var animationLine;
var nodoAnimation1;
var nodoAnimation3;
var nodoAnimation2;
var nodoNumThree;
var nodoNumTwo;
var nodoNumOne;
var nodoSvg4;
var nodoSvg3;
var nodoSvg2;
var timer;
var timerDos;
var timerTres;

window.onload = percent()+circleCounter();

// Percentage loading function ___________________
function percent(){
        var counter= 0;

        timer = setInterval(function(){
            counter ++;       
            miNumero.innerHTML = "<h3>"+counter+"</h3>";
            if(counter == 30){
                clearInterval(timer);
            };
        } , 100);

        resultadoUno = document.querySelector(".resultadoUno");
        miNumero= document.querySelector(".numeroUno");
        nodoAnimation1 = document.querySelector(".animUno");
        nodoAnimation1.classList.add("animateLine");
        var counterDos= 0;

        timerDos = setInterval(function(){

            counterDos ++;
            miNumeroDos.innerHTML = "<h3>"+counterDos+"</h3>";
            if(counterDos == 90){
                clearInterval(timerDos);
            };

        } , 33.3);

        resultadoDos = document.querySelector(".resultadoDos");
        miNumeroDos= document.querySelector(".numeroDos"); 
        nodoAnimation2 = document.querySelector(".animDos");
        nodoAnimation2.classList.add("animateLine2");
        var counterTres= 0;

        timerTres = setInterval(function(){

            counterTres ++;
            miNumeroTres.innerHTML = "<h3>"+counterTres+"</h3>";
            if(counterTres == 60){
                clearInterval(timerTres);
            };

        } , 50);

        resultadoTres = document.querySelector(".resultadoTres");
        miNumeroTres= document.querySelector(".numeroTres");
        nodoAnimation3 = document.querySelector(".animTres");
        nodoAnimation3.classList.add("animateLine3");
  
};

var circun = 2* Math.PI * 47.37;
var calc6_3 = circun * (1 - 0.63);
var calc7_8 = circun * (1 - 0.78);
var calc9_6 = circun * (1 - 0.96);
console.log(circun);
console.log(calc6_3);
console.log(calc7_8);
console.log(calc9_6);


// Loading Progress Circle function ___________________

var time1,time2,time3;

function circleCounter(){
    var counterBlue= 0;
    clearInterval(time1);

    time1 = setInterval(function(){

        counterBlue ++; 
        nodoNumOne.innerHTML = "<h3>"+(counterBlue/ 10)+"</h3>";
        if(counterBlue == 63){
        clearInterval(time1);
        };

    } ,47.61);
    
    nodoNumOne= document.querySelector(".numOne");
    nodoSvg2 = document.querySelector(".circle2");
    nodoSvg2.classList.add("cls-2");
    var counterPink= 0;
    clearInterval(time2);
    nodoNumTwo= document.querySelector(".numTwo");

    time2 = setInterval(function(){

        counterPink ++;
        nodoNumTwo.innerHTML = "<h3>"+(counterPink/ 10)+"</h3>";
        if(counterPink == 78){
            clearInterval(time2);
        };

    } ,38.46);

    nodoSvg3 = document.querySelector(".circle3");
    nodoSvg3.classList.add("cls-3");
    var counterGreen= 0;
    clearInterval(time3);
    nodoNumThree= document.querySelector(".numThree");
    time3 = setInterval(function(){

        counterGreen ++;
        nodoNumThree.innerHTML = "<h3>"+(counterGreen/ 10)+"</h3>";
        if(counterGreen == 96){
            clearInterval(time3);
        };

    } ,31.25);
    nodoSvg4 = document.querySelector(".circle4");
    nodoSvg4.classList.add("cls-4");
    
   
};


// Reload buttons __________________

var btn1 = document.querySelector(".reloadOne");

btn1.addEventListener("click", function(){
    console.clear();
    clearInterval(timer);
    clearInterval(timerDos);
    clearInterval(timerTres);
    nodoAnimation1.classList.remove("animateLine");
    nodoAnimation2.classList.remove("animateLine2");
    nodoAnimation3.classList.remove("animateLine3");

    setTimeout(() => {
        percent();
    }, 10);

});

var btn2 = document.querySelector(".reloadTwo");

btn2.addEventListener("click", function(){
    console.clear();
    nodoSvg2 = document.querySelector(".circle2");
    nodoSvg2.classList.remove("cls-2");
    nodoSvg3 = document.querySelector(".circle3");
    nodoSvg3.classList.remove("cls-3");
    nodoSvg4 = document.querySelector(".circle4");
    nodoSvg4.classList.remove("cls-4");
   
    setTimeout(() => {  
        circleCounter();
    }, 10);
    
});