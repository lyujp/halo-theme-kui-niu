const clickHamburger = ()=>{
    const menuElement = document.getElementById("menu");
    if(menuElement.style.display === "block"){
        menuElement.style.display = "none";
    }else{
        menuElement.style.display = "block";
    }
}

const copyrightDomain = document.getElementById("copyright-domain");
copyrightDomain.innerHTML = window.location.hostname;