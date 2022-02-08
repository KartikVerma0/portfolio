gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(MotionPathPlugin, ScrollToPlugin, TextPlugin);

const tl1 = gsap
    .timeline({
        scrollTrigger: {
            trigger: ".introHeading",
            toggleActions: "play pause pause pause",
            // markers: true,
        },
    })
    .from(".introHeading", {
        duration: 1,
        x: -700,
        ease: "easeIn",
        opacity: 0,
    })
    .from(".my-description p", {
        duration: 1,
        x: -700,
        ease: "easeIn",
        opacity: 0,
        delay: -1,
    })
    .from(".my-description button", {
        duration: 0.8,
        x: -700,
        ease: "easeIn",
        opacity: 0,
        delay: -1,
    });

for (let i = 1; i < 3; i++) {
    tl1.to(".my-description button", {
        scale: 1.2,
        duration: 0.3,
    }).to(".my-description button", {
        scale: 1,
        duration: 0.3,
    });
}

const tl2 = gsap
    .timeline({
        scrollTrigger: {
            trigger: ".my-description img",
            toggleActions: "play pause pause pause",
            // markers: true,
        },
    })
    .from(".my-description img", {
        duration: 1,
        x: 700,
        ease: "easeIn",
        opacity: 0,
        delay: -1,
    });
