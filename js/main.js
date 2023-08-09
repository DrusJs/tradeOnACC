document.getElementById("burger-button").addEventListener("click", (el)=>{
    el.currentTarget.classList.toggle("active");
});
// document.getElementById("particles-js").style.height = document.body.scrollHeight+"px";
setTimeout(()=>{
    try {
        document.querySelector(".animone").classList.remove("animone");    
        document.querySelector(".animtwo").classList.remove("animtwo");    
        document.querySelector(".animthree").classList.remove("animthree");
    } catch {}
}, 1300);

try {
    var accountTotal = document.querySelector(".buy-input .total");
    setInputNumberAction()
} catch {}

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
    document.querySelector(".promo-table").classList.remove("active");
    document.querySelector(".referal-accordion").classList.remove("active");
    document.querySelector(".profile-table__header-item.active").classList.remove("active");
    elem.classList.add("active");
}