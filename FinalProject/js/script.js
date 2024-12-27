// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:2
//         }
//     }
// })
const navBar = document.querySelector("#navBar")
window.addEventListener("scroll", ()=>{
    if ((window.scrollY) > 40) {
        navBar.classList.add("scrolled-nav")
    }
    else navBar.classList.remove("scrolled-nav")

})

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

