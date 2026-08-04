// selects --------------

const textnumber = document.getElementById("text_card")
const cvv2box = document.getElementById("cvv2")
const yearsbox = document.getElementById("years")

const inpnumber = document.querySelectorAll(".inp")

const cvv2input = document.getElementById("cvv2input")
const monthinput = document.getElementById("monthinput")
const yearsinput = document.getElementById("yearsinput")
const btn = document.getElementById("btn")
const check = document.getElementById("check")

let f = ''
let timer = 60

// selects --------------




function inputbox(e) {

    let i = []

    i.push(inpnumber[0].value)
    i.push(inpnumber[1].value)
    i.push(inpnumber[2].value)
    i.push(inpnumber[3].value)

    textnumber.innerHTML = i.join(" ")



}

inpnumber.forEach((val, index) => {

    val.addEventListener("input", () => {

        if (val.value.length >= 4) {
            val.style.border = "1px solid green"
        } else {
            val.style.border = "1px solid red"

        }

        inputbox()

        if (val.value.length == 4) {

            if (index < 3) {
                val.nextElementSibling.focus()
            }

        }

    })

})


cvv2input.addEventListener("input", () => {
    cvv2box.innerHTML = cvv2input.value

    if (cvv2input.value.length >= 3) {
        cvv2input.style.border = "1px solid green"
    } else {
        cvv2input.style.border = "1px solid red"

    }

})




monthinput.addEventListener("input", () => {

    stringobject()

    if (monthinput.value.length == 2) {

        monthinput.nextElementSibling.nextElementSibling.focus()
    }

})
yearsinput.addEventListener("input", () => {

    // value for years ----
    f = yearsinput.value
    // value for years ----

    stringobject()

})


btn.addEventListener("click", () => {


    let flag = 0

    inpnumber.forEach((val) => {

        if (val.value.length < 4) {

            val.style.border = "1px solid red"

        } else {

            val.style.border = "1px solid green"
            flag++

        }

    })

    if (cvv2input.value.length < 3) {

        cvv2input.style.border = "1px solid red"

    } else {
        cvv2input.style.border = "1px solid green"
        flag++
    }

    if (monthinput.value.length < 2) {
        monthinput.style.border = "2px solid red"

    } else {
        monthinput.style.border = "2px solid green"
        flag++

    } if (yearsinput.value.length < 2) {
        yearsinput.style.border = "2px solid red"

    } else {

        yearsinput.style.border = "2px solid green"
        flag++
    }

    if (flag >= 7) {

        btn.setAttribute("disabled", "disabled")



        cvv2input.classList.add("bg", "pointer")
        monthinput.classList.add("bg", "pointer")
        yearsinput.classList.add("bg", "pointer")

        inpnumber.forEach((val) => {
            val.classList.add("bg", "pointer")
        })

        setTimeout(() => {
            alert("رمز پویا ارسال شد ")
        }, 500);


        let x = setInterval(() => {
            timer--
            btn.innerHTML = timer

            if (timer == 0) {
                clearInterval(x)
                btn.innerHTML = `   <span class="relative flex justify-center items-center gap-2">


                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">

                    <path d="M12 2L4 5V11C4 16.5 7.5 20 12 22C16.5 20 20 16.5 20 11V5L12 2Z" stroke="white" stroke-width="2"/>

                    <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

                </svg>


                پرداخت و تکمیل سفارش


            </span>`

                timer = 60

                alert("اگه هنوز رمز دوم دریافت نکردید ئوباره تلاش کنید")

                cvv2input.value = ""
                monthinput.value = ""
                yearsinput.value = ""

                cvv2input.style.border = "1px solid red"
                monthinput.style.border = "1px solid red"
                yearsinput.style.border = "1px solid red"

                btn.removeAttribute("disabled")

                cvv2input.classList.remove("bg", "pointer")
                monthinput.classList.remove("bg", "pointer")
                yearsinput.classList.remove("bg", "pointer")

                inpnumber.forEach((val) => {
                    val.classList.remove("bg", "pointer")
                })
            }

        }, 700);

    }

})


// create function for about conditional in arrow years and mouth ....

function stringobject(e) {

    let arr = []
    arr.push(f + "/" + monthinput.value)
    yearsbox.innerHTML = arr.join("/")

}