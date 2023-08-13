
/////////////////////
////////burger///////
/////////////////////
if (document.getElementById("burger-button")) {
const burgerButton = document.getElementById("burger-button");

burgerButton.addEventListener("click", ()=>{
    burgerButton.classList.toggle("active");
    // if (burgerButton.classList.contains("active")) {
    //     popupMenu.classList.add("active");
    //     document.body.classList.add("noscroll");
    // } else {
    //     popupMenu.classList.remove("active");
    //     document.body.classList.remove("noscroll");
    // }
});
}
/////////////////////
////////modals///////
/////////////////////
if (document.querySelector(".modal-wrapper")) {
const modalWrappers = document.querySelectorAll(".modal-wrapper");
const modalCloseButtons = document.querySelectorAll(".modal-close");
modalWrappers.forEach(el =>{
    el.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal-wrapper")){
            e.currentTarget.classList.remove("active");
            document.body.classList.remove("noscroll");
        }
    });
});

modalCloseButtons.forEach(el => {
    el.addEventListener("click", (e) => {
        e.currentTarget.parentElement.parentElement.classList.remove("active");
        document.body.classList.remove("noscroll");
    });
});
//modal-accounts
document.querySelector(".footer-logo").addEventListener("click", () => {
    document.getElementById("modal-accounts").classList.add("active");
    document.body.classList.add("noscroll");
});
//login-modal-open
document.querySelector(".auth__sign-in").addEventListener("click", () => {
    document.getElementById("modal-login").classList.add("active");
    document.body.classList.add("noscroll");
});
document.querySelector(".logmodal-open").addEventListener("click", () => {
    document.getElementById("modal-registration").classList.remove("active");
    document.getElementById("modal-login").classList.add("active");
});
//registration-modal-open
document.querySelector(".auth__sign-up").addEventListener("click", () => {
    document.getElementById("modal-registration").classList.add("active");
    document.body.classList.add("noscroll");
});
document.querySelector(".regmodal-open").addEventListener("click", () => {
    document.getElementById("modal-login").classList.remove("active");
    document.getElementById("modal-registration").classList.add("active");
});
//remind-modal 
document.querySelector(".remind-pass").addEventListener("click", () => {
    document.getElementById("modal-login").classList.remove("active");
    document.getElementById("modal-remind").classList.add("active");
});
document.querySelectorAll(".return-button").forEach((el)=>{
        el.addEventListener("click", () => {
        document.getElementById("modal-remind").classList.remove("active");
        document.getElementById("modal-reset").classList.remove("active");
        document.getElementById("modal-login").classList.add("active");
    });
});
let timerEmail;
document.querySelector(".remind__password-modal .modal-button.check").addEventListener("click", () => {
    // Если почта не найдена, то
    // document.querySelector(".remind__password-modal").classList.add("error"); return;
    document.querySelector(".remind__password-modal").classList.add("accept");
    document.querySelector(".repeat-button").classList.add("await");
    document.querySelector(".timeline-modal").innerHTML = "4:59";
    let timeMinut = 298;
    timerEmail = setInterval(function () {
        seconds = timeMinut%60;
        minuts = timeMinut/60%60;
        if (timeMinut < 1) {
            document.querySelector(".timeline-modal").innerHTML = "0:00";
            clearInterval(timerEmail);
            document.querySelector(".repeat-button").classList.remove("await");
        } else {
            seconds = seconds>9?seconds:"0"+seconds;
            let strTimer = `${Math.trunc(minuts)}:${seconds}`;
            document.querySelector(".timeline-modal").innerHTML = strTimer;
        }
        --timeMinut;
    }, 1000)
});
document.querySelector(".repeat-button").addEventListener("click", (el) => {
    if (document.querySelector(".timeline-modal").innerHTML == "0:00"){
        document.querySelector(".repeat-button").classList.add("await");
        clearInterval(timerEmail);
        document.querySelector(".timeline-modal").innerHTML = "4:59";
        let timeMinut = 298;
        timerEmail = setInterval(function () {
            seconds = timeMinut%60;
            minuts = timeMinut/60%60;
            if (timeMinut < 1) {
                document.querySelector(".timeline-modal").innerHTML = "0:00";
                clearInterval(timerEmail);
                document.querySelector(".repeat-button").classList.remove("await");
            } else {
                seconds = seconds>9?seconds:"0"+seconds;
                let strTimer = `${Math.trunc(minuts)}:${seconds}`;
                document.querySelector(".timeline-modal").innerHTML = strTimer;
            }
            --timeMinut;
        }, 1000)
    }
})
}

if (document.querySelector(".more-review")) {
    document.querySelector(".more-review").addEventListener("click", (el) => {
        el.currentTarget.style.display = "none";
        document.querySelectorAll(".review__card.hide").forEach((el)=>{
            el.classList.remove("hide");
        })
    })
}


if (document.querySelector(".animone")) {
    setTimeout(()=>{
            document.querySelector(".animone").classList.remove("animone");    
            document.querySelector(".animtwo").classList.remove("animtwo");    
            document.querySelector(".animthree").classList.remove("animthree");
    }, 1300);
}
if (document.querySelector(".buy-input .total")) {
    var accountTotal = document.querySelector(".buy-input .total");
    setInputNumberAction()
} 

function setInputNumberAction() {
    accountTotal.previousElementSibling.addEventListener("click", ()=>{
        accountTotal.innerHTML = accountTotal.innerHTML=="0"?0:+accountTotal.innerHTML-50;
    });
    accountTotal.nextElementSibling.addEventListener("click", ()=>{
        accountTotal.innerHTML = accountTotal.innerHTML=="950"?950:+accountTotal.innerHTML+50;
    });
}

function Center(num, elem) {
    document.querySelector(".profile-table__body").classList.add("center");
    document.querySelector(".history-table").classList.remove("active");
    document.querySelector(".promo-table").classList.remove("active");
    document.querySelector(".referal-table").classList.add("active");
    document.querySelector(".referal-accordion").classList.add("active");
    document.querySelector(".profile-table__header-item.active").classList.remove("active");
    elem.classList.add("active");
}
function CenterNo(num, elem) {
    document.querySelector(".profile-table__body").classList.remove("center");
    document.querySelector(".history-table").classList.add("active");
    document.querySelector(".referal-table").classList.remove("active");
    document.querySelector(".promo-table").classList.remove("active");
    document.querySelector(".referal-accordion").classList.remove("active");
    document.querySelector(".profile-table__header-item.active").classList.remove("active");
    elem.classList.add("active");
}
function CenterNoPromo(num, elem) {
    document.querySelector(".profile-table__body").classList.remove("center");
    document.querySelector(".history-table").classList.remove("active");
    document.querySelector(".referal-table").classList.remove("active");
    document.querySelector(".promo-table").classList.add("active");
    document.querySelector(".referal-accordion").classList.remove("active");
    document.querySelector(".profile-table__header-item.active").classList.remove("active");
    elem.classList.add("active");
}
//input-poligon
if (document.querySelector(".poligon-inner")) {
    if (document.querySelector(".poligon-inner").value) {
        document.querySelector(".poligon-inner").nextElementSibling.classList.add("non-empty")
    }
    document.querySelector(".pulses").addEventListener("animationend", animEnd);
    function checkInput(elem) {
        if (elem.value) {
            elem.nextElementSibling.classList.add("non-empty");
        } else {
            elem.nextElementSibling.classList.remove("non-empty");
        }
    }
    function animEnd() {
        document.querySelector(".pulses").classList.remove("animate");
    }
    function Pulse() {
        if (!document.querySelector(".poligon-inner").value) {return;}
        let elem = document.querySelector(".pulses")
        if (elem.classList.contains("animate")) {
            elem.classList.remove("animate");
            setTimeout(()=>{elem.classList.add("animate")}, 5)
        } else {
            elem.classList.add("animate");
        }
    }
}