let solution = "";
let numbers = document.querySelector("#numbers");
numbers.addEventListener("click", function (event) {
    let keyNumber = event.target.textContent;
    let boxNumber = document.querySelector("#resultado");

    function acumular() {
        if (event.target.nodeName == "BUTTON") {

            if (keyNumber == "DEL") {
                solution = solution.slice(0, -1);
            }
            else if (keyNumber =="=") {
                solution = "" + eval(solution);

            }
            else if (keyNumber == "RESET") {
                solution = "";
            }

            else if (solution.length < 20) {
                solution += keyNumber;

            }
            else {
                return;
            }

        }
    }
    console.log(keyNumber);
    acumular();

    boxNumber.textContent = solution;

    if (solution.length == 12) {
        console.log("Tengo más de 12");
        boxNumber.classList.add("letraPequena");
    }

    else if (solution.length == 11) {
        boxNumber.classList.remove("letraPequena");

    }


})

//TEMA1 AZUL

let tema1 = document.querySelector("#theme1");
tema1.addEventListener("click", function(){
    //background 

    tema1.style.color = "hsl(223, 31%, 20%";
    restaurarColor(tema2, "white");
    restaurarColor(tema3, "white");
    

    document.documentElement.style.setProperty("--bgprimary", "hsl(222, 26%, 31%)");
    document.documentElement.style.setProperty("--bgsecondary", " hsl(223, 31%, 20%)");
    document.documentElement.style.setProperty("--bgterciary","hsl(224, 36%, 15%)");
    document.documentElement.style.setProperty("--bgkey", "hsl(30, 25%, 89%)");



    //Keys
    document.documentElement.style.setProperty("--kprimary", "hsl(225, 21%, 49%)");
    document.documentElement.style.setProperty('--ksecondary', 'hsl(224, 28%, 35%)');
    document.documentElement.style.setProperty("--kIgual", "hsl(6, 63%, 50%)");
    document.documentElement.style.setProperty("--kIgualShadow", "hsl(6, 70%, 34%)");
    document.documentElement.style.setProperty("--shadowButton", "hsl(28, 16%, 65%)");

    //Text
    document.documentElement.style.setProperty("--tprimary", " hsl(221, 14%, 31%)");
    document.documentElement.style.setProperty("--tsecondary", " white");
    

})


// TEMA 2 NARANJA

let tema2 = document.querySelector("#theme2");
tema2.addEventListener("click", function (event) {
    console.log(event.target.classList.add)
    tema2.style.color = "hsl(25, 98%, 40%)";
    restaurarColor(tema1, "hsl(60, 10%, 19%)");
    restaurarColor(tema3, "hsl(60, 10%, 19%)");
    
    //background 
    document.documentElement.style.setProperty("--bgprimary", "hsl(0, 0%, 90%)");
    document.documentElement.style.setProperty("--bgsecondary", "hsl(0, 5%, 81%)");
    document.documentElement.style.setProperty("--bgterciary","hsl(0, 0%, 93%)");
    document.documentElement.style.setProperty("--bgkey", "hsl(45, 7%, 89%)");


    //Keys
    document.documentElement.style.setProperty("--kprimary", "hsl(185, 42%, 37%)");
    document.documentElement.style.setProperty('--ksecondary', 'hsl(185, 58%, 25%)');
    document.documentElement.style.setProperty("--kIgual", "hsl(25, 98%, 40%)");
    document.documentElement.style.setProperty("--kIgualShadow", "hsl(25, 99%, 27%)");
    document.documentElement.style.setProperty("--shadowButton", "hsl(35, 11%, 61%)");

    //Text
    document.documentElement.style.setProperty("--tprimary", "hsl(60, 10%, 19%)");
    document.documentElement.style.setProperty("--tsecondary", "hsl(60, 10%, 19%)");
    
})

//TEMA 3 MORADO

let tema3 = document.querySelector("#theme3");
tema3.addEventListener("click", function() {
    //background
    tema3.style.color = "hsl(290, 70%, 36%)";
    restaurarColor(tema1, "hsl(52, 100%, 62%)");
    restaurarColor(tema2, "hsl(52, 100%, 62%)");
   

    document.documentElement.style.setProperty("--bgprimary", "hsl(268, 75%, 9%)");
    document.documentElement.style.setProperty("--bgsecondary", "hsl(268, 71%, 12%)");
    document.documentElement.style.setProperty("--bgterciary","hsl(268, 71%, 12%)");
    document.documentElement.style.setProperty("--bgkey", "hsl(268, 47%, 21%)");



    //Keys
    document.documentElement.style.setProperty("--kprimary", "hsl(281, 89%, 26%)");
    document.documentElement.style.setProperty('--ksecondary', 'hsl(285, 91%, 52%)');
    document.documentElement.style.setProperty("--kIgual", "hsl(176, 100%, 44%)");
    document.documentElement.style.setProperty("--kIgualShadow", "hsl(177, 92%, 70%)");
    document.documentElement.style.setProperty("--shadowButton", "hsl(290, 70%, 36%)");

    //Text
    document.documentElement.style.setProperty("--tprimary", "hsl(52, 100%, 62%)");
    document.documentElement.style.setProperty("--tsecondary", "hsl(52, 100%, 62%)");

    
  
    
    
})

function restaurarColor(etiqueta, color1){
    etiqueta.style.color = color1;
    console.log("estoy funcionando");
    console.log(etiqueta);
    console.log(color1);
}

//setTimeout(saludos, 3000, "Nathan", "Programador");
//Hacer una función para cambiar el color.
//Hacer libreria
// Hacer que las variables cambien de contenido 


