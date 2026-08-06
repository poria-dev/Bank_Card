// selects --------------

const textnumber = document.getElementById("text_card")
const cvv2box = document.getElementById("cvv2")
const yearsbox = document.getElementById("years")
const inpnumber = document.querySelectorAll(".inp")
const cvv2input = document.getElementById("cvv2input")
const monthinput = document.getElementById("monthinput")
const yearsinput = document.getElementById("yearsinput")
const check = document.getElementById("check")
const otpInput = document.querySelector(".otpInput")
const submitOtpBtn = document.getElementById("submitOtp")
const pas = document.getElementById("pas")

const captchaInput = document.getElementById("captchaInput")
const captchaRefresh = document.getElementById("captchaRefresh")
const captchaBox = document.getElementById("captchaBox")




let f = ''
let timer = 60
let arr = []
let i = null
let flag = 0

// selects --------------


// onload ....


let testy = localStorage.getItem("inp")
let checkcvv2 = localStorage.getItem("cvv2")
if (checkcvv2) {

    cvv2input.value = checkcvv2
    cvv2box.innerHTML = checkcvv2

}

if (testy) {

    inpnumber[0].value = testy[0] + testy[1] + testy[2] + testy[3]
    inpnumber[1].value = testy[4] + testy[5] + testy[6] + testy[7]
    inpnumber[2].value = testy[8] + testy[9] + testy[10] + testy[11]
    inpnumber[3].value = testy[12] + testy[13] + testy[14] + testy[15]

    textnumber.innerHTML = testy

}

// onload .........

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
            val.style.border = "2px solid #22c55e"
        } else {
            val.style.border = "2px solid #ef4444"

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
        cvv2input.style.border = "2px solid #22c55e"
    } else {
        cvv2input.style.border = "2px solid #ef4444"

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


// create function for about conditional in arrow years and mouth ....

function stringobject(e) {

    let arr = []
    arr.push(f + "/" + monthinput.value)
    yearsbox.innerHTML = arr.join("/")

}



check.addEventListener("click", () => {

    if (check.checked == true) {


        arr.push(inpnumber[0].value)
        arr.push(inpnumber[1].value)
        arr.push(inpnumber[2].value)
        arr.push(inpnumber[3].value)

        localStorage.setItem("inp", arr.join(""))
        localStorage.setItem("cvv2", cvv2input.value)


    } else {

        localStorage.removeItem("inp")
        localStorage.removeItem("cvv2")

    }

})


function showToast(type, title, text) {

    const toast = document.getElementById("toast")
    const box = document.getElementById("toastBox")
    const icon = document.getElementById("toastIcon")
    const progress = document.getElementById("toastProgress")

    document.getElementById("toastTitle").innerHTML = title
    document.getElementById("toastText").innerHTML = text

    progress.style.transition = "none"
    progress.style.width = "100%"

    if (type == "success") {

        icon.innerHTML = `
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#16A34A"/>
        <path d="M8 12.5L10.8 15.2L16.5 9.5"
        stroke="white"
        stroke-width="2.3"
        stroke-linecap="round"
        stroke-linejoin="round"/>
        </svg>`

        icon.className =
            "w-14 h-14 rounded-2xl flex justify-center items-center bg-green-100"

        progress.className =
            "h-full bg-gradient-to-r from-green-500 to-emerald-400"

    }

    if (type == "error") {

        icon.innerHTML = `
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#DC2626"/>
        <path d="M15.5 8.5L8.5 15.5M8.5 8.5L15.5 15.5"
        stroke="white"
        stroke-width="2.3"
        stroke-linecap="round"/>
        </svg>`

        icon.className =
            "w-14 h-14 rounded-2xl flex justify-center items-center bg-red-100"

        progress.className =
            "h-full bg-gradient-to-r from-red-500 to-rose-400"

    }

    if (type == "info") {

        icon.innerHTML = `
        <svg width="30" height="30" fill="none" viewBox="0 0 24 24">

        <circle cx="12" cy="12" r="10" fill="#2563EB"/>

        <path d="M12 8V8.1M12 11V16"
        stroke="white"
        stroke-width="2.2"
        stroke-linecap="round"/>

        </svg>`

        icon.className =
            "w-14 h-14 rounded-2xl flex justify-center items-center bg-blue-100"

        progress.className =
            "h-full bg-gradient-to-r from-blue-600 to-cyan-400"

    }

    toast.classList.remove("translate-x-[450px]", "opacity-0")

    toast.classList.add("translate-x-0", "opacity-100")

    setTimeout(() => {

        progress.style.transition = "4s linear"
        progress.style.width = "0%"

    }, 50)

    setTimeout(() => {

        toast.classList.remove("translate-x-0", "opacity-100")
        toast.classList.add("translate-x-[450px]", "opacity-0")

    }, 4000)

}


submitOtpBtn.addEventListener("click", () => {

    flag = 0

    inpnumber.forEach((val) => {

        if (val.value.length < 4) {

            val.style.border = "2px solid #ef4444"

        } else {

            val.style.border = "2px solid #22c55e"
            flag++

        }

    })

    if (cvv2input.value.length < 3) {

        cvv2input.style.border = "2px solid #ef4444"

    } else {
        cvv2input.style.border = "2px solid #22c55e"
        flag++
    }

    if (monthinput.value.length < 2) {
        monthinput.style.border = "2px solid #ef4444"

    } else {
        monthinput.style.border = "2px solid #22c55e"
        flag++

    } if (yearsinput.value.length < 2) {
        yearsinput.style.border = "2px solid #ef4444"

    } else {

        yearsinput.style.border = "2px solid #22c55e"
        flag++
    }

    safe()

    if (flag >= 8) {

        submitOtpBtn.setAttribute("disabled", "disabled")
        submitOtpBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> در حال پردازش ...`

        setTimeout(() => {
            showToast(
                "success",
                "تراکنش موفق",
                "پرداخت شما با موفقیت انجام شد. در حال انتقال به صفحه فروشنده..."
            )
            submitOtpBtn.innerHTML = `<i class="fa-solid fa-check"></i> پرداخت موفق`
            submitOtpBtn.classList.remove("bg-blue-600", "hover:bg-blue-700")
            submitOtpBtn.classList.add("bg-green-500")
        }, 1500);

        setTimeout(() => {
            location.reload()
        }, 6000);

    } else {
        showToast("error", "اطلاعات ناقص", "لطفاً تمامی فیلدهای کارت بانکی و رمز پویا را تکمیل کنید.")
    }

})



// this is about captcha .............

captchaRefresh.addEventListener("click", (e) => {

    i = parseInt(Math.random() * 9001) + 1000

    captchaBox.innerHTML = i

    safe()
})

captchaInput.addEventListener("input", () => {

    safe()

})

function safe() {

    let val = captchaInput.value

    if (val == i) {

        captchaInput.style.border = "1px solid green"
        flag++
        console.log(flag);

        pas.removeAttribute("disabled")

    } else {
        captchaInput.style.border = "1px solid red"

        pas.setAttribute("disabled", "disabled")

    }
}


pas.setAttribute("disabled", "disabled")
pas.addEventListener("click", () => {


    let timer = 30

    pas.setAttribute("disabled", "disabled")


    let x = setInterval(() => {
        timer--
        pas.innerHTML = timer

        if (timer <= 0) {
            clearInterval(x)

            setTimeout(() => {

                pas.innerHTML = "دریافت رمز"
                captchaInput.value = ""
                captchaInput.style.border = "1px solid red"

            }, 300);
        }
    }, 500);


})

