// Round to 3 decimals

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


// eventListener on button
// grab string/value from input field and convert to number of needed

const convertBtn = document.getElementById("convert-btn")
const clearBtn = document.getElementById("clear-btn")
const nightBtn = document.getElementById("night-btn")
let lenghtEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")


console.log(lenghtEl)
console.log(volumeEl)
console.log(massEl)
console.log(convertBtn)

let meters = 0;
let feet = 0;
let liters = 0;
let gallon = 0;
let kilos = 0;
let pounds = 0;
let meterToFeet = 3.281;
let literToGallon = 0.264;
let kilosToPounds = 2.204;

clearBtn.addEventListener("click", function(){
    lenghtEl.textContent = ""
    volumeEl.textContent = ""
    massEl.textContent = ""
})

nightBtn.addEventListener("click", function(){
    
    let classesToToggle = [".lower-banner", ".convert-boxes"]
    
    classesToToggle.forEach(classToggle => {
        
        let elements = document.querySelectorAll(classToggle)
        
        elements.forEach(element => {
            element.classList.toggle('dark')
        });    
    });
    
})

convertBtn.addEventListener("click", function(){
    // generate outputs
    console.log("button clicked!")
    
    let inputValue = parseFloat(document.getElementById("input-field").value)
    
    lenghtEl.textContent = `
    ${inputValue} meters = ${Math.floor(inputValue*meterToFeet*1000)/1000} feet |
    ${inputValue} feet = ${Math.floor(inputValue/meterToFeet*1000)/1000} meters
    
    `
    
    volumeEl.textContent = `
        ${inputValue} liters = ${Math.floor(inputValue*literToGallon*1000)/1000} gallons |
        ${inputValue} gallons = ${Math.floor(inputValue/literToGallon*1000)/1000} liters
        
    `
    
    massEl.textContent = `
        ${inputValue} kilos = ${Math.floor(inputValue*kilosToPounds*1000)/1000} pounds |
        ${inputValue} pounds = ${Math.floor(inputValue/kilosToPounds*1000)/1000} kilos
        
    `
})