//Owl-carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 50,
    responsiveClass:true,
    responsive:{
        
        0:{
            items:1,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        },
        720:{
            items:2,
            loop:true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            autoHeight: true
        },
        1100:{
            items:3,
            loop:true,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            autoHeight: true
        }
    }
})