//Calculating the area of a Trapezoid

"use strcit";

//Event listeners
document.getElementById("calculate-btn").addEventListener("click", calculateArea)

//Event functions
function calculateArea() {
    //Input of number values
    let b1 = Number(document.getElementById("b1").value);
    let b2 = Number (document.getElementById("b2").value);
    let h1 = Number (document.getElementById("h1").value);

    //Processing to calculate area
    let area = ((b1+b2)/2)*h1

    //Output of final area
    document.getElementById("area").innerHTML = area;
}
