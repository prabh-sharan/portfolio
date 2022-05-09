


const scrollUp=document.getElementById("scroll-top")
const goToTop=()=>{
    document.body.scrollIntoView({
        behavior:"smooth",
    });
}

scrollUp.addEventListener("click", goToTop)