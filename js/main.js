/////////////////////
////////burger///////
/////////////////////
if (document.getElementById("burger-button")) {
    const burgerButton = document.getElementById("burger-button");
    const popupMenu = document.getElementById("popup-menu");

    burgerButton.addEventListener("click", ()=>{
        burgerButton.classList.toggle("active");
        if (burgerButton.classList.contains("active")) {
            popupMenu.classList.add("active");
            document.body.classList.add("noscroll");
        } else {
            popupMenu.classList.remove("active");
            document.body.classList.remove("noscroll");
        }
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
    if (document.querySelector(".none-balance-button")) {
        document.querySelector(".none-balance-button").addEventListener("click", ()=> {
            document.getElementById("modal-none-balance").classList.remove("active");
            document.getElementById("modal-balance").classList.add("active");
        })

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
}
/////////////////////
/////modals.END//////
/////////////////////
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
    document.querySelectorAll(".poligon-inner").forEach((el)=>{
        if (el.value) {
            el.nextElementSibling.classList.add("non-empty")
        }
    })
    document.querySelectorAll(".pulses").forEach((el)=>{
        el.addEventListener("animationend", ()=>{el.classList.remove("animate")});
    })
    function checkInput(elem) {
        if (elem.value) {
            elem.nextElementSibling.classList.add("non-empty");
        } else {
            elem.nextElementSibling.classList.remove("non-empty");
        }
    }
    function Pulse(el) {
        if (!el.previousElementSibling.value) {return;}
        let elem = el.parentElement.parentElement;
        if (elem.classList.contains("animate")) {
            elem.classList.remove("animate");
            setTimeout(()=>{elem.classList.add("animate")}, 5)
        } else {
            elem.classList.add("animate");
        }
    }
}
if (document.querySelector(".card-filter__list")) {
    document.querySelectorAll(".card-filter__list").forEach((el=>{
        el.addEventListener("click", (e)=>{
            document.querySelector(".card-filter__list.active").classList.remove("active");
            e.currentTarget.classList.add("active");
        })
    }))
}
if (document.getElementsByClassName('number-ticker')){
    var accountTotal = document.querySelector(".buy-input .total");
    var counters = document.getElementsByClassName('number-ticker');
    var defaultDigitNode = document.createElement('div');
    defaultDigitNode.classList.add('digit');

    for (var i = 0; i < 10; i++) {
        defaultDigitNode.innerHTML += i + '<br>';
    }

    [].forEach.call(counters, function (counter) {
        var currentValue = parseInt(counter.getAttribute('data-value')) || 0;
        var digits = [];
        accountTotal.previousElementSibling.addEventListener("click", ()=>{
            accountTotal.value = +accountTotal.value-50<=0?0:+accountTotal.value-50;
            let multy = +accountTotal.value;
            setValue(multy*10);
            animateDiscount(+accountTotal.value);
        });
        accountTotal.nextElementSibling.addEventListener("click", ()=>{
            accountTotal.value = +accountTotal.value+50>=950?950:+accountTotal.value+50;
            let multy = +accountTotal.value;
            setValue(multy*10);
            animateDiscount(+accountTotal.value);
        });
        generateDigits(currentValue.toString().length);
        setValue(1500);


        function setValue (number) {
            var s = number.toString().split('').reverse().join('');
            var l = s.length;

            if (l > digits.length) {
                generateDigits(l - digits.length);
            }
            
            // if (l < digits.length) {
            //     document.getElementsByClassName("digit")[0].remove();
            // }
            for (var i = 0; i < digits.length; i++) {
                setDigit(i, s[i] || 0);
            }
        }

        function setDigit (digitIndex, number) {
            digits[digitIndex].style.marginTop = '-' + number + 'em';
        }

        function generateDigits (amount) {
            for (var i = 0; i < amount; i++) {
                var d = defaultDigitNode.cloneNode(true);
                counter.appendChild(d);
                digits.unshift(d);
            }
        }

        function animateDiscount(total) {
            document.querySelector(".store-form__percent-list.active").classList.remove("active");
            if (+total >= 500) {
                document.getElementsByClassName("store-form__percent-list")[3].classList.add("active");
            } else if (+total >= 100){
                document.getElementsByClassName("store-form__percent-list")[2].classList.add("active");
            } else if (+total >= 50) {
                document.getElementsByClassName("store-form__percent-list")[1].classList.add("active");
            } else {
                document.getElementsByClassName("store-form__percent-list")[0].classList.add("active");
            }
        }
    });
}
if (document.querySelector(".main-accept__button")) {
    document.querySelector(".main-accept__button").addEventListener("click", (elem)=> {
        let self = elem.currentTarget;
        if (self.classList.contains("animateBuy")) {
            self.classList.remove("animateBuy");
            setTimeout(()=>{self.classList.add("animateBuy")}, 5)
        } else {
            self.classList.add("animateBuy");
        }
    }) 
    document.querySelector(".main-accept__button").addEventListener("mouseover", (elem)=> {
        let self = elem.currentTarget;
        if (self.classList.contains("animateBuy")) {
            return;
        } 
            self.classList.add("animateBuy");
        
    }) 
    document.querySelector(".main-accept__button").addEventListener("animationend", ()=>{document.querySelector(".main-accept__button").classList.remove("animateBuy")});
}
if (document.querySelector(".balance-button")) {
    document.querySelectorAll(".balance-button").forEach((el)=>{
        el.addEventListener("click", ()=> {
            if (el.classList.contains("animateBuy")) {
                el.classList.remove("animateBuy");
                setTimeout(()=>{el.classList.add("animateBuy")}, 5)
            } else {
                el.classList.add("animateBuy");
            }
        }) 
    })
    document.querySelectorAll(".balance-button").forEach((el)=>{
        el.addEventListener("animationend", ()=>{el.classList.remove("animateBuy")}); 
    })
}

if (document.querySelector(".account-card")) {
    document.querySelectorAll(".cards-section .account-card").forEach((el)=>{
        el.addEventListener("mouseenter", (e)=>{
            if (window.matchMedia("(min-width: 1150px)").matches){
                try{      
                document.querySelector(".account-card.hover").classList.remove("hover");
                } catch{}
                document.getElementsByClassName("shadow-page")[0].classList.add("active");
                document.getElementsByClassName("shadow-page")[1].classList.add("active");
                let coords = el.getBoundingClientRect();                
                let desc = document.querySelector(".card-hover");
                    document.querySelector(".cards-section").classList.add("shadow");
                    el.classList.add("hover");
                    if (+coords.left < window.innerWidth/2){
                        if (+coords.left+ 1000 > document.body.clientWidth) {
                            desc.classList.add("small");
                        }
                        desc.style.display = "block";
                        desc.style.top = (+coords.top+window.pageYOffset-60)+"px";
                        desc.style.left = (+coords.left+ window.pageXOffset+242)+"px";
                        console.log(desc.style.left, +coords.left, window.pageXOffset);
                    } else {
                        desc.classList.add("wrap");
                        if (+coords.left < 1000) {
                            desc.classList.add("small");
                        }                   
                        desc.style.display = "block";
                        desc.style.top = (+coords.top+window.pageYOffset-84)+"px";
                        desc.style.left = (+coords.left+ window.pageXOffset-78-desc.scrollWidth)+"px";
                        console.log(desc.style.left, +coords.left, window.pageXOffset);
                    }
            }
        })
    })
    document.querySelectorAll(".cards-section .account-card").forEach((el)=>{
        el.addEventListener("mouseleave", (e)=>{
              
            if (window.matchMedia("(min-width: 1150px)").matches){
                let desc = document.querySelector(".card-hover");
                document.querySelector(".cards-section").classList.remove("shadow");
                el.classList.remove("hover");
                desc.style.display = "none";
                desc.classList.remove("wrap");
                desc.classList.remove("small");
                el.classList.remove("active");                
                document.getElementsByClassName("shadow-page")[0].classList.remove("active");
                document.getElementsByClassName("shadow-page")[1].classList.remove("active");
            }
        })
    })
    document.querySelectorAll(".account-card").forEach((el)=>{
        el.addEventListener("click", ()=>{
            if (window.matchMedia("(max-width: 1150px)").matches){
                document.getElementById("modal-card-desc").classList.add("active");
                document.body.classList.add("noscroll");
            }
        })
    })
}

if (document.querySelector(".method-bg")) {
    document.querySelectorAll(".deposit__methods .method-bg").forEach((el)=>{
        el.addEventListener("click", ()=>{
            document.querySelector(".method-bg.active").classList.remove("active");
            el.classList.add("active");
        })
    })
}
if (document.querySelector(".review__card")) {
    document.getElementsByClassName("review__card")[0].addEventListener("click", ()=>{
        document.getElementById("modal-accounts").classList.add("active");
        document.body.classList.add("noscroll");
    })
    document.getElementsByClassName("review__card")[1].addEventListener("click", ()=>{
        document.getElementById("modal-balance").classList.add("active");
        document.body.classList.add("noscroll");
    })
    document.getElementsByClassName("review__card")[2].addEventListener("click", ()=>{
        document.getElementById("modal-none-balance").classList.add("active");
        document.body.classList.add("noscroll");
    })
    document.getElementsByClassName("review__card")[3].addEventListener("click", ()=>{
        document.getElementById("modal-balance-cript").classList.add("active");
        document.body.classList.add("noscroll");
    })
}
if (document.querySelector(".modal-account-download")) {
    document.querySelector(".modal-account-download").addEventListener("click", (elem)=> {
        let self = elem.currentTarget;
        if (self.classList.contains("cloud-anim")) {
            self.classList.remove("cloud-anim");
            setTimeout(()=>{self.classList.add("cloud-anim")}, 5)
        } else {
            self.classList.add("cloud-anim");
        }
    }) 
    document.querySelector(".modal-account-download").addEventListener("animationend", ()=>{document.querySelector(".modal-account-download").classList.remove("cloud-anim")});
}
if (document.querySelector(".cell img")) {
    document.querySelectorAll(".cell img").forEach((el=>{
        el.addEventListener("click", ()=> {
            if (el.classList.contains("cloud-anim")) {
                el.classList.remove("cloud-anim");
                setTimeout(()=>{el.classList.add("cloud-anim")}, 5)
            } else {
                el.classList.add("cloud-anim");
            }
        }) 
        el.addEventListener("animationend", ()=>{el.classList.remove("cloud-anim")});
    }))
}
if (document.querySelector(".deposit-button")) {
    document.querySelector(".deposit-button").addEventListener("click", (elem)=> {
        let self = elem.currentTarget;
        if (self.classList.contains("LightClick")) {
            self.classList.remove("LightClick");
            setTimeout(()=>{self.classList.add("LightClick")}, 5)
        } else {
            self.classList.add("LightClick");
        }
    }) 
}
if (document.querySelector(".cards-filter-mobile-bg")){
    document.querySelector(".cards-filter-mobile-bg").addEventListener("click", (el)=>{
        el.currentTarget.classList.toggle("active")
    })
    document.querySelectorAll(".drop-item").forEach((el)=>{
        el.addEventListener("click", ()=>{
            document.querySelector(".cards-filter-mobile span").innerHTML = el.innerHTML;
        })
    })
    window.onclick = function (event) {
        if (!(event.target.className == 'non-skew') && !(event.target.className == 'cards-filter-mobile')){
                document.querySelector(".cards-filter-mobile-bg").classList.remove("active");
        }
    }
}

if (document.querySelector(".store-section__example")) {
    document.querySelector(".store-section__example").addEventListener("click", (elem)=> {
        elem.currentTarget.classList.add("active");
        elem.currentTarget.innerHTML = "";
    })
}

document.querySelector(".modal-button").addEventListener("click", ()=>{
    document.querySelector(".notice-bg").classList.add("active");
    hideNotice();
})

function hideNotice() {
    setTimeout(()=>{document.querySelector(".notice-bg").classList.remove("active");}, 3000);    
}