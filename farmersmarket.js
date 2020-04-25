document.getElementById("marketname").innerText = "The Green Market"; //changes the name of the market
document.getElementById("slogan").innerText = "Locally Sourced Produce for the Locals!"; //changes the slogan

// <select><option value="somethinghere">howitshowsuponwebpage</option></select>

let availableFruits = ["Blueberries", "Strawberries", "Watermelons"]; //this array will go inside of dropdown list
let fruitDropDown = "<select>";
for (let i = 0; i < availableFruits.length; i++) {
    fruitDropDown = fruitDropDown + `<option value="${availableFruits[i]}">${availableFruits[i]}</option>`
}
fruitDropDown = fruitDropDown + "</select>"; //select is placed on the outside of the code block because just like select's opening tag it just needs to be put in once! 

document.getElementById("availablefruits").innerHTML = fruitDropDown; 

let availableVeggies = ["Potatoes", "Onions", "Broccoli"];
let veggieDropDown = "<select>";
for (let i = 0; i < availableVeggies.length; i++) {
    veggieDropDown = veggieDropDown + `<option value="${availableVeggies[i]}">${availableVeggies[i]}</option>`;
}
veggieDropDown = veggieDropDown + "</select>";

document.getElementById("availableveggies").innerHTML = veggieDropDown;