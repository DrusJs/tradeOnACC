document.getElementById("burger-button").addEventListener("click", (el)=>{
    el.currentTarget.classList.toggle("active");
});

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