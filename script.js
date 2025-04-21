var main = gsap.timeline();

main.from(".section1 nav i, nav h1, nav li, nav button",{
    opacity:0,
    duration:0.5,
    delay:0.5,
    y:-40,
    stagger:0.2
})

main.from("#part1 h1",{
    opacity:0,
    x:-200,
    duration:1

})

main.from("#part1 p",{
    opacity:0,
    x:-200
    
})

main.from("#part1 button",{
    opacity:0,
    y:40,
    duration:0.8
    
})


main.from("#part2 img",{
    opacity:0,
    x:200
    
},"-=1")


main.from(".section-bottom img",{
    opacity:0,
    duration:0.5,
    y:30,
    scrollTrigger: {
        trigger: ".section-bottom img",
        start: "top 90%",
        end:"top 0%",
        scrub:2,
       
    }

})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".section2 ",
        scroller: "body",
        start: "top 80%",
        end: "top 10%",
        scrub: 2,
       
    }
});

tl.from(".section2 h1, .section2 p",{
    y:30,
    opacity:0,
    duration:0.5,
    stagger: 0.3,
   
})

tl.from(".black.left",{
    opacity:0,
    x:-200,
    duration:0.4,

},"top")
tl.from(".white.left",{
    opacity:0,
    x:200,
    duration:0.4,

},"top")

tl.from(".black.right",{
    opacity:0,
    x:200,
    duration:0.4,

},"top","-=2")
tl.from(".white.right",{
    opacity:0,
    x:-200,
    duration:0.4,

},"top","-=2")


main.from("#partfirst",{
    opacity:0,
    y:40,
    duration:0.4,
    scrollTrigger:{
        trigger:"#partfirst",
        scroller:"body",
        start:"top 90%",
        scrub: 2,
    }


})

main.from("#part2nd h1",{
    opacity:0,
    x:-100,
    duration:0.4,
    scrollTrigger:{
        trigger:"#part2nd h1",
        // scroller:"body",
        start:"top bottom",
        end: "top 85%",
        scrub: 2,
    }
}) 

main.from("#part2nd p",{
    opacity:0,
    x:100,
    duration:0.4,
    scrollTrigger:{
        trigger:"#part2nd p",
        // scroller:"body",
        start:"top bottom",
        end: "top 85%",
        scrub: 2,
    }
}) 

tl.from("#part3rd",{
    opacity:0,
    y:50,
    duration:3,
    scrollTrigger:{
        trigger:"#part3rd",
        scroller: "body",
        start:"top 90%",
        end: "top 85%",
        scrub: 2
    }
})

tl.from("#part3rd #box ",{
    opacity:0,
    x:200,
    duration:2,
    scrollTrigger:{
        trigger: "#box ",
        scroller: "body",
        start:"top 90%",
        end: "top 85%",
        scrub: 2
    }

})
tl.from("#part3rd #line ",{
    opacity:0,
    y:50,
    duration:1,
    scrollTrigger:{
        trigger: "#line ",
        scroller: "body",
        start:"top 90%",
        end: "top 85%",
        scrub: 2
    }

})
tl.from("#footer ",{
    opacity:0,
    x:-100,
    duration:1,
    scrollTrigger:{
        trigger: "#line ",
        scroller: "body",
        start:"top 90%",
        end: "top 85%",
        scrub: 2
    }

})
