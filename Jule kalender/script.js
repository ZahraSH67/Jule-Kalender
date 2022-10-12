//Hvad dato er det
let date = new Date;
let currentDay = date.getDate() //i dag er den = 10
let currentMonth = date.getMonth() + 1  //i dag er den lig med 10
const alertBox= document.querySelector(".alert")
// const audioSetting = document.querySelector(".audio-setting")
// audioSetting.addEventListener("onload", function(){
//     audioSetting.display = 
// })

//Denne variabel skal ændres til 12 når vi er færdig med at udvikle.
const activationMonth = 10;

console.log(currentDay);
console.log(currentMonth);



//Vi indsamler alle kalenderlåger i en liste.
const items = document.querySelectorAll(".item");

//Vi deklarerer et timt array der holder styr på om låger er åbne.

let openOrClosed = [];
//Her kommer noget local storrage
if(localStorage.days){
    openOrClosed = JSON.parse(localStorage.getItem("days"))
}


//LOOP
items.forEach(function(element, index){
    element.addEventListener("click", clickHandler);
    if(openOrClosed[index] == true){
        element.classList.add("open")
    }
})

//Deklaration at clickHandler funktion
function clickHandler(event){
    if (currentDay >= this.dataset.date && currentMonth == activationMonth){
        if(this.classList.contains("open")){
            this.classList.remove("open")
            openOrClosed[this.dataset.date-1] = false
        }else{
            this.classList.add("open")
            openOrClosed[this.dataset.date-1] = true
        }
        localStorage.setItem("days", JSON.stringify(openOrClosed))
    }
    else {
        alertBox.style.display = "block"
        setTimeout(() => {alertBox.style.display = "none";}, 8000)
    }
}



