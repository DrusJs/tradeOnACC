document.getElementById("burger-button").addEventListener("click", (el)=>{
    el.currentTarget.classList.toggle("active");
});
setTimeout(()=>{
    try {
        document.querySelector(".animone").classList.remove("animone");    
        document.querySelector(".animtwo").classList.remove("animtwo");    
        document.querySelector(".animthree").classList.remove("animthree");
    } catch {}
}, 1300)