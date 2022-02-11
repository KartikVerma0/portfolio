gsap.registerPlugin(ScrollTrigger);

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
    })
    .to(
        ".waves-divider",
        {
            y: 0,
            duration: 2,
        },
        "<"
    );

const randomY = () => {
    return Math.floor(Math.random() * 20) + 1;
};

const randomDuration = () => {
    return Math.floor(Math.random() * 4) + 1;
};

for (let i = 1; i < 6; i++) {
    gsap.timeline({ repeat: -1, yoyo: true })
        .to(`#path${i}`, {
            y: randomY(),
            duration: randomDuration(),
            ease: "power2.inOut",
        })
        .to(`#path${i}`, {
            y: 0,
            duration: randomDuration(),
            ease: "power2.inOut",
        });
}

const heroInit = () => {
    gsap.to(document.querySelector(".hero-heading"), {
        opacity: 1,
        ease: "power1.Out",
        duration: 4,
        delay: 1.5,
    });
};

window.addEventListener("load", heroInit);
