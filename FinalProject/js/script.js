const navBar = document.querySelector("#navBar")
const pageUp = document.querySelector("#pageUp")
const toggleVisible = document.querySelector("#toggleVisible")
const colorPick = document.querySelector("#colorPick")
const subscibeForm = document.querySelector("#subscibeForm")
const touchForm = document.querySelector("#touchForm")

const checkValidation = (formName, fieldName, len=0)=>{
    if(!formName[fieldName].value){
        formName[formName].nextSibling.nextSibling.innerHTML = `<p class="alert alert-danger mt-2"> ${fieldName} is required </p>`
        return false
    }
    else if (formName[fieldName].value.lenght < len){
        formName[formName].nextSibling.nextSibling.innerHTML = `<p class="alert alert-danger mt-2"> ${fieldName} should be more than ${len} characters </p>`
        return false
    }
    else{
        formName[formName].nextSibling.nextSibling.innerHTML = " "
        return true
    }
}


window.addEventListener("scroll", ()=>{
    if ((window.scrollY) > 40) {
        navBar.classList.add("scrolled-nav")
    }
    else navBar.classList.remove("scrolled-nav")

})


if(pageUp){

    window.addEventListener("scroll", ()=>{
        if ((window.scrollY) < (window.innerHeight)) {
            pageUp.classList.add("d-none")
        }
        else pageUp.classList.remove("d-none")
    
    })
    
    pageUp.addEventListener("click", ()=>{
        window.scrollTo({
            top: 0,
            behavior : "smooth"
        })
    })
}

if(toggleVisible){
    toggleVisible.addEventListener("click", ()=>{
        if((toggleVisible.innerText.toLowerCase()) == "show"){
            colorPick.classList.remove("w-0")
            toggleVisible.innerText = "Hide"
        }
        else{
            colorPick.classList.add("w-0")
            toggleVisible.innerText = "Show"
        }
    })
}

if(subscibeForm){
    subscibeForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        if(!subscibeForm.mail.value){
            subscibeForm.mail.nextSibling.nextSibling.innerHTML = `<p class="alert alert-danger mt-2"> mail is required </p>`
            return false
        }
        else if (!((subscibeForm.mail.value).includes("@") && (subscibeForm.mail.value).includes(".com"))){
            subscibeForm.mail.nextSibling.nextSibling.innerHTML = `<p class="alert alert-danger mt-2"> mail should be like example@mail.com </p>`
            return false
        }
        else{
            subscibeForm.mail.nextSibling.nextSibling.innerHTML = " "
            return true
        }
    })
}

if(touchForm){
    touchForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        checkValidation(touchForm, "name", 5)
        checkValidation(touchForm, "email")
        checkValidation(touchForm,"subject", 8)
        
    })
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


