gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap
    .timeline({
        scrollTrigger: {
            trigger: ".introHeading",
            toggleActions: "play pause pause pause",
            // markers: true,
        },
        defaults: { duration: 1, x: 0, ease: "easeIn", opacity: 1 },
    })
    .to(".introHeading", {})
    .to(".my-description p", {}, "<")
    .to(
        ".my-description button",
        {
            duration: 0.8,
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

gsap.timeline({
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

const dividers = ["wave", "peak", "step"];

for (let divider of dividers) {
    for (let i = 1; i < 6; i++) {
        gsap.timeline({ repeat: -1, yoyo: true })
            .to(`#${divider}${i}`, {
                y: randomY(),
                duration: randomDuration(),
                ease: "power2.inOut",
            })
            .to(`#${divider}${i}`, {
                y: 0,
                duration: randomDuration(),
                ease: "power2.inOut",
            });
    }
}

const heroInit = () => {
    gsap.to(document.querySelector(".hero-heading"), {
        opacity: 1,
        ease: "power1.Out",
        duration: 4,
        delay: 1,
    });
};

window.addEventListener("load", heroInit);

gsap.timeline({ scrollTrigger: ".portfolioHeading", defaults: { duration: 1 } })
    .to(".portfolioHeading", {
        x: 0,
        ease: "back",
        opacity: 1,
    })
    .to(
        ".portfolioItems",
        {
            duration: 1.5,
            opacity: 1,
        },
        "<0.5"
    )
    .to(
        ".peak-divider",
        {
            y: 0,
        },
        "<"
    );

const contactTimeline = gsap
    .timeline({
        scrollTrigger: ".contactHeading",
        defaults: { duration: 1, ease: "linear" },
    })
    .to(".contactHeading", {
        x: 0,
        ease: "back",
        opacity: 1,
    })
    .to(".contactSubHeading", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
    })
    .to(
        ".social-media-circle",
        {
            rotate: "360",
            repeat: -1,
            duration: 10,
        },
        "<"
    )
    .to(
        ".contactForm",
        {
            clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            opacity: 1,
        },
        "<"
    )
    .to(
        ".social-media-circle a",
        {
            rotate: "-360",
            repeat: -1,
            duration: 10,
        },
        "<"
    );

const socialCircle = document.querySelector(".social-media-circle");
socialCircle.addEventListener("mouseenter", () => {
    contactTimeline.pause();
});
socialCircle.addEventListener("mouseleave", () => {
    contactTimeline.play();
});

const contactForm = document.querySelector(".contactForm");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
});
