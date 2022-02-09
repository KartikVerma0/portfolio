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
    .to(".introHeading", {
        duration: 1,
        x: 0,
        ease: "easeIn",
        opacity: 1,
    })
    .to(
        ".my-description p",
        {
            duration: 1,
            x: 0,
            ease: "easeIn",
            opacity: 1,
        },
        "<"
    )
    .to(
        ".my-description button",
        {
            duration: 0.8,
            x: 0,
            ease: "easeIn",
            opacity: 1,
        },
        "<"
    );

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
    .to(".my-description img", {
        duration: 1,
        x: 0,
        ease: "easeIn",
        opacity: 1,
        delay: -1,
    });
