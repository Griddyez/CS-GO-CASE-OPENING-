let reg_button = document.querySelector(".log-in")
let FAQ = document.querySelector(".FAQ")
console.log("HIIIIIIIIIIIIIIIIIIIII")
let upgrade = document.querySelector(".upgrade")
let case1 = document.querySelector(".case")
let rebalance = document.querySelector(".rebalance")
let input = document.querySelector(".input")
let login = document.querySelector(".log-in")
let cases = document.querySelectorAll(".case-image")
FAQ.addEventListener("click", function () {
    anime({
        targets: '.FAQ',
        scale:[
            {value:0.75,duration:300},
            {value:1.0,duration:200},
        ],
        duration: 500,
        easing: 'linear'
    })
    setTimeout(() => window.location.href = "./html/faq.html", 500)
})

upgrade.addEventListener("click", function () {
    anime({
        targets: '.upgrade',
        scale:[
            {value:0.75,duration:300},
            {value:1.0,duration:200},
        ],
        duration: 500,
        easing: 'linear'
    })
    setTimeout(() => window.location.href = "./html/case.html", 500)
})
case1.addEventListener("click", function () {
    anime({
        targets: '.case1',
        scale:[
            {value:0.75,duration:300},
            {value:1.0,duration:200},
        ],
        duration: 500,
        easing: 'linear'
    })
})
rebalance.addEventListener("click", function () {
    anime({
        targets: '.rebalance',
        scale:[
            {value:0.75,duration:300},
            {value:1.0,duration:200},
        ],
        duration: 500,
        easing: 'linear'
    })
    setTimeout(() => window.location.href = "./html/balance.html", 500)
})
input.addEventListener("click", function () {
    anime({
        targets: '.input',
        scale:[
            {value:0.75,duration:300},
            {value:1.0,duration:200},
        ],
        duration: 500,
        easing: 'linear'
    })
    setTimeout(() => window.location.href = "./html/moneyinput.html", 500)
})
login.addEventListener("click", function () {
    anime({
        targets: '.login',
        scale:[
            {value:0.75,duration:300},
            {value:1.0,duration:200},
        ],
        duration: 500,
        easing: 'linear'
    })
    setTimeout(() => window.location.href = "./html/registration.html", 500)
})
//for (i = 0; i<cases.length;i++){
//    let a = cases[i]
//    a.addEventListener("mousedown",()=>{
//        anime({
//            targets: '.a',
//            scale:[
//                {value:0.75,duration:300},
//                {value:1.0,duration:200},
//            ],
//            duration: 500,
//            easing: 'linear'
//        })
//    })
//    setTimeout(() => window.location.href = "./html/case.html", 500)
//}