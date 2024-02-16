const cursor = document.querySelector("#cursor");
const cursorblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (event) {
    updateCursor(event.pageX, event.pageY);
});

function updateCursor(pageX, pageY) {
    cursor.style.transform = `translate(${pageX - 8}px, ${pageY - 5}px)`;
    cursorblur.style.transform = `translate(${pageX - 200}px, ${pageY - 200}px)`;
}

const nav= document.querySelectorAll("#nav h4")
nav.forEach(function(elem){
    // console.log(elem);
    elem.addEventListener("mouseenter",function(){
        cursor.style.width = "40px"; 
        cursor.style.height = "40px";
        cursor.style.marginTop ="-7px"
        cursor.style.marginLeft ="-7px"
        cursor.style.border="1px solid #fff"
        cursor.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.width = "20px"; 
        cursor.style.height = "20px";
        cursor.style.marginTop ="0px"
        cursor.style.marginLeft ="0px"
        cursor.style.border="none"
        cursor.style.backgroundColor="#05a8e8"
    })
})


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 0.5
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 1
    }
});

gsap.from("#about img:first-child", {
    y: 70,
    opacity: 0,
    duration: 0.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#about",
        start: "top center", // Adjust the start position based on your layout
        end: "bottom center", // Adjust the end position based on your layout
        scroller: "body",
        toggleActions: "play none none reverse",
        scrub:2,
        // markers: true
    }
});

gsap.from("#about-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    
    scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom center",
        scroller: "body",
        toggleActions: "play none none reverse",
        scrub:3,
        // markers: true
    }
});

gsap.from("#about img:last-child", {
    y: 70,
    opacity: 0,
    duration: 0.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom 60%",
        scroller: "body",
        toggleActions: "play none none reverse",
        scrub:2,
        // markers: true
    }
});

// gsap.utils.toArray("#about img:first-child, #about-in, #about img:last-child").forEach((el) => {
//     gsap.from(el, {
//         y: 100,
//         opacity: 0,
//         duration: 1,
//         ease: "power4.out",
//         scrollTrigger: {
//             trigger: "#about",
//             start: "top 60%",
//             end: "bottom 50",
//             scroller: "body",
//             scrub:3,
//             // markers: true,
//             toggleActions: "play none none reverse",
//         },
//     });
// });


// gsap.from(".card", {
//     scale:0.8,
//     opacity: 0,
//     duration: 1,
//     stagger:0.1,
//     ease: "power4.out",
//     scrollTrigger: {
//         trigger: ".card",
//         start: "top center",
//         end: "bottom 60%",
//         scroller: "body",
//         toggleActions: "play none none reverse",
//         scrub:1
//         // markers: true
//     }
// });

// gsap.to(".card:hover ", {
//     transform: "rotate3d(-1, 1, 0, 25deg);",
//     overwrite: "none" // or "none" to prevent overwriting
// });


gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})
gsap.from("#footer h3",{
    y:50,
    scrollTrigger:{
        trigger:"#footer h3",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})