const card = document.getElementById("card")
const datee = document.getElementById("date")
const time = document.getElementById("time")
const btn = document.getElementById("btn")


let i = localStorage.getItem("number")

if (i) {

    card.textContent = i.substring(0, 4) + "    ****   ****    " + i.substring(14, 19)

}

btn.addEventListener("click",()=>{

    window.location.href = "index.html"

})


const sa = new Date().toLocaleDateString("fa")


datee.textContent = sa

const timeorg = new Date().toLocaleTimeString("fa")

time.textContent = timeorg


// :) ............................
