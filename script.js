let crsr=document.querySelector("#cursor")
let crsrBlur=document.querySelector("#cursor-blur")

gsap.to("#nav", {
    backgroundColor: "rgb(0, 0, 0)",
    height: "80px",
    duration: 1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -30%",
        end: "top -30%",
        scrub: 1
    }
})
gsap.to("#main", {
    backgroundColor: "black",
    duration: 1,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -20%",
        end: "top -100%",
        scrub: 3
    }
})

document.addEventListener("mousemove", function (dets) {
    // Move cursor instantly
    gsap.to(crsr, {
        x: dets.x - 5, // Offset for cursor
        y: dets.y - 5,
        duration: 0.2, // Instant movement
    });

    // Move cursorBlur with a delay
    gsap.to(crsrBlur, {
        x: dets.x - 50, // Offset for blur effect
        y: dets.y - 50,
        duration: 0.5, // Smooth delay
    });
});
let btnall=document.querySelectorAll(".btn" );
btnall.forEach(function (element) {
    element.addEventListener("mouseover", function () {
        gsap.to(crsr, {
            scale: 10,
            backgroundColor: "transparent",
            duration: 0.3,
        });
        gsap.to(crsrBlur, {
            opacity: 0.5,
            duration: 0.3,
            backgroundColor:"#000000"
        });
    });
    element.addEventListener("mouseleave", function () {
        gsap.to(crsr, {
            scale: 1,
            backgroundColor:"#95C11E",
            duration: 0.3,
        });
        gsap.to(crsrBlur, {
            opacity: 1,
            duration: 0.3,
            backgroundColor:"#96c11e"
        });
    });
});
gsap.from("#nav img, #nav .btn",{
    y: -100,
    opacity: 0,
    duration: 0.5,
    stagger: {
        amount: 0.1,
        from: "start" // Start, "center", or "end"
    }
})
gsap.from("#page1 h1, #page1 p, #page1 h2", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: {
        amount: 0.1,
        from: "start" // Start, "center", or "end"
    }
})
gsap.from("#scroller",{
    y: 150,
    opacity: 0,
    duration: 0.5,
    stagger: {
        amount: 0.1,
        from: "start" // Start, "center", or "end"
    },
    scrollTrigger: {
        trigger: "#scroller",
        scroller: "body",
        start: "top 80%",
        end: "top 80%",
        scrub: 1
    }
})
gsap.from("#about img, #about h1, #about p",{
    y: 150,
    opacity: 0,
    duration: 0.5,
    stagger: {
        amount: 0.1,
        from: "start" // Start, "center", or "end"
    },
    scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 80%",
        end: "end 80%",
        scrub: 1
    }
})
gsap.from("#card-container .card", {
    scale: 0.8, // Scale down to 50%
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#card-container",
        scroller: "body",
        start: "top 80%",
        end: "end 80%",
        scrub: 1
    }
})
gsap.from("#about-img, #food-img", {
    y: 150,
    opacity: 0,
    duration: 0.5,
    stagger: {
        amount: 0.1,
        from: "start" // Start, "center", or "end"
    },
    scrollTrigger: {
        trigger: "#about-img, #food-img",
        scroller: "body",
        start: "top 80%",
        end: "end 80%",
        scrub: 1
    }
})
gsap.from("#quotes #colon1", {
    y: -50,
    x: -50,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#quotes",
        scroller: "body",
        start: "top 40%",
        end: "end 100%",
        scrub: 1
    }
})
gsap.from("#quotes #colon2", {
    y: 50,
    x: 50,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#quotes",
        scroller: "body",
        start: "top 40%",
        end: "end 40%",
        scrub: 1
    }
})
gsap.from("#elem-container h1", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#elem-container h1",
        scroller: "body",
        start: "top 80%",
        end: "end 80%",
        scrub: 1
    }
})