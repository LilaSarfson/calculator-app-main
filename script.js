let solution = "";
let numbers = document.querySelector("#numbers");

numbers.addEventListener("click", function (event) {
    let keyNumber = event.target.textContent;
    let boxNumber = document.querySelector("#resultado");

    if (event.target.nodeName != "BUTTON" || solution.length > 20) {
        return;
    }


    console.log(keyNumber);
    acumular(keyNumber);

    boxNumber.textContent = solution;

    if (solution.length == 12) {
        console.log("Tengo más de 12");
        boxNumber.classList.add("letraPequena");
    }

    else if (solution.length==11){
        boxNumber.classList.remove("letraPequena");

    }


})

function acumular(keyNumber) {

    if (keyNumber == "DEL") {
        solution = solution.slice(0, -1);
    }
    else if (keyNumber == "=") {
        solution = "" + eval(solution);

    }
    else if (keyNumber == "RESET") {
        solution = "";
    }
    else {
        solution += keyNumber;
    }

}
