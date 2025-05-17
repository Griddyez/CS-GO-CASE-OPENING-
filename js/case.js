
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let spin = document.querySelector(".spin")
spin.addEventListener("click",()=>{
    let r = getRandomInt(0,2)
    if (r==0){
        alert("Вы выйграли 1 кейс")
    }
    if (r==1){
        alert("Вы выйграли 2 кейс")
    }
    if (r==2){
        alert("Вы выйграли 3 кейс")
    }
})
let pay = document.querySelector(".pay")
pay.addEventListener("click",()=>{
        anime({
        targets: '.pay',
        scale:[
            {value:0.75,duration:300},
            {value:1.0,duration:200},
        ],
        duration: 500,
        easing: 'linear'
    })
    setTimeout(() => window.location.href = "./html/balance.html", 500)
})
let back = document.querySelector(".back")
back.addEventListener("click",()=>{
        anime({
        targets: '.pay',
        scale:[
            {value:0.75,duration:300},
            {value:1.0,duration:200},
        ],
        duration: 500,
        easing: 'linear'
    })
    setTimeout(() => window.location.href = "../html/index.html", 500)
})    