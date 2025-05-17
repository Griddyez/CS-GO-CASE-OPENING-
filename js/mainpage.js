let reg_button = document.querySelector(".log-in")
let FAQ = document.querySelector(".FAQ")
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
for (i = 0; i<cases.length;i++){
    let a = cases[i]
    a.addEventListener("click",()=>{
        anime({
            targets: a,
            scale:[
                {value:0.75,duration:300},
                {value:1.0,duration:200},
            ],
            duration: 500,
            easing: 'linear'
        })
        setTimeout(() => window.location.href = "./html/case.html", 500)
    })
}
var activities = document.querySelector(".selector");

activities.addEventListener("click", function() {
    var options = activities.querySelectorAll("option");
    var count = options.length;
    if(typeof(count) === "undefined" || count < 2)
    {
        addActivityItem();
    }
});
let Contacts = document.querySelector(".Contancts")
let Developers = document.querySelector(".Developers")
let Followus = document.querySelector(".Follow-us")
let dlist = document.querySelectorAll(".d-list-li")
let dlist_r = ["Фёдор","Стас","Дмитрий"]
let dlist_e = ["Fyodor","Stas","Dmitriy"]
activities.addEventListener("change", function() {
    if(activities.value == "Русский")
    {
        alert("YOU'VE CHANGED THE LANGUAGE TO COMMUNIST ONE, BE AWARE OF THIS UGLY CAPITALIST!")
        rebalance.innerHTML = "Пополнение"
        input.innerHTML = "Вывод"
        Contacts.innerHTML = "Наши Контакты"
        Developers.innerHTML = "Список Разработчиков"
        Followus.innerHTML = "Следите за нашей активностью"
        for (let i=0;i<dlist.length;i++){
            dlist[i].innerHTML = dlist_r[i]
        }
    }
    else if(activities.value="Английский")
    {
        alert("ВЫ ИЗМЕНИЛИ ЯЗЫК И ВЫ БОЛЬШЕ НЕ НА РУССКОЙ ВЕРСИИ САЙТА, УДАЧИ!")
        rebalance.innerHTML = "Replenishment"
        input.innerHTML = "Withdrawal"
        Contacts.innerHTML = "Our Contacts"
        Developers.innerHTML = "Developer list"
        Followus.innerHTML = "Follow us"
        for (let i=0;i<dlist.length;i++){
            console.log(dlist[i])
            dlist[i].innerHTML = dlist_e[i]
        }
    }
});
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