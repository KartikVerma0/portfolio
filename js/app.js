gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap
    .timeline({
        scrollTrigger: {
            trigger: ".introHeading",
            toggleActions: "play complete pause pause",
            // markers: true,
        },
        defaults: { duration: 1, x: 0, ease: "easeIn", opacity: 1 },
    })
    .to(".introHeading", {})
    .to(".my-description p", {}, "<")
    .to(
        "#getInTouch ",
        {
            duration: 0.8,
        },
        "<"
    );

for (let i = 1; i < 3; i++) {
    tl1.to("#getInTouch", {
        scale: 1.2,
        duration: 0.3,
    }).to("#getInTouch", {
        scale: 1,
        duration: 0.3,
    });
}

gsap.timeline({
    scrollTrigger: {
        trigger: ".my-description img",
        toggleActions: "play complete pause pause",
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
    gsap.to(document.querySelector("#hero__heading"), {
        opacity: 1,
        ease: "power1.Out",
        duration: 4,
        delay: 1,
    });
};

window.addEventListener("load", heroInit);

gsap.timeline({ scrollTrigger: "#portfolioHeading", defaults: { duration: 1 } })
    .to("#portfolioHeading", {
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

gsap.timeline({
    scrollTrigger: "#skillHeading",
    defaults: { duration: 1, ease: "back" },
})
    .to("#skillHeading", {
        x: 0,
        opacity: 1,
    })
    .from(".skill-figure", {
        y: 10,
        duration: 0.8,
        opacity: 0,
        stagger: 0.1,
    })
    .from(
        ".skill-lottie__animation",
        {
            y: 30,
            opacity: 0,
        },
        "-=1"
    );

const contactTimeline = gsap
    .timeline({
        scrollTrigger: "#contactHeading",
        defaults: { duration: 1, ease: "linear" },
    })
    .to("#contactHeading", {
        x: 0,
        ease: "back",
        opacity: 1,
    })
    .to("#contact-section__text", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
    })
    .to(
        ".social-media-section__circle",
        {
            rotate: "360",
            repeat: -1,
            duration: 10,
        },
        "<"
    )
    .to(
        "#contactForm",
        {
            clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
            opacity: 1,
        },
        "<"
    )
    .to(
        ".social-media-section__circle a",
        {
            rotate: "-360",
            repeat: -1,
            duration: 10,
        },
        "<"
    );

const socialCircle = document.querySelector(".social-media-section__circle");
socialCircle.addEventListener("mouseenter", () => {
    contactTimeline.pause();
});
socialCircle.addEventListener("mouseleave", () => {
    contactTimeline.play();
});

function createSuccessAlert() {
    let successAlertDiv = document.createElement("div");
    let closeButton = document.createElement("button");
    successAlertDiv.classList.add("alert", "alert-success", "mt-2");
    successAlertDiv.setAttribute("role", "alert");
    successAlertDiv.style.fontSize = "clamp(0.85rem,1.75vw,1.1rem)";
    successAlertDiv.textContent = "Your Message has been Delivered.";
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("aria-label", "Close");
    closeButton.classList.add("btn-close");
    successAlertDiv.append(closeButton);
    closeButton.style.position = "absolute";
    closeButton.style.right = "10px";
    contactForm.appendChild(successAlertDiv);
    closeButton.addEventListener("click", () => {
        successAlertDiv.style.display = "none";
    });
}

function createFailureAlert() {
    let failureAlertDiv = document.createElement("div");
    let closeButton = document.createElement("button");
    failureAlertDiv.classList.add("alert", "alert-danger", "mt-2");
    failureAlertDiv.setAttribute("role", "alert");
    failureAlertDiv.style.fontSize = "clamp(0.85rem,1.75vw,1.1rem)";
    failureAlertDiv.textContent = "Your Message failed to Delivered.";
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("aria-label", "Close");
    closeButton.classList.add("btn-close");
    failureAlertDiv.append(closeButton);
    closeButton.style.position = "absolute";
    closeButton.style.right = "10px";
    contactForm.appendChild(failureAlertDiv);
    closeButton.addEventListener("click", () => {
        failureAlertDiv.style.display = "none";
    });
}

const contactForm = document.querySelector(".contactForm");

const spinnerBorder = document.querySelector(".spinner-border");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    spinnerBorder.classList.toggle("d-none");
    fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
    })
        .then((response) => response.json())
        .then((html) => {
            createSuccessAlert();
            spinnerBorder.classList.toggle("d-none");
        })
        .catch((e) => {
            createFailureAlert();
        });
});

const mobNavBarToggleBtn = document.querySelectorAll(
    ".navigation-bar-mobile__toggle-btn svg"
);
for (let i = 0; i < 2; i++) {
    mobNavBarToggleBtn[i].addEventListener("click", () => {
        document
            .querySelector(
                `.navigation-bar-mobile__toggle-btn svg:nth-child(${i + 1})`
            )
            .classList.toggle("hidden");
        document
            .querySelector(
                `.navigation-bar-mobile__toggle-btn svg:nth-child(${2 - i})`
            )
            .classList.toggle("hidden");
        document
            .querySelector(".navigation-bar-mobile__links")
            .classList.toggle("active");
    });
}

mobNavBarToggleBtn[0].addEventListener("click", () => {
    gsap.to(".navigation-bar-mobile__links li", {
        yPercent: 1000,
        duration1: 1,
        stagger: 0.2,
    });
    gsap.to(mobNavBarToggleBtn[1], {
        right: 57,
        bottom: 57,
    });
});

mobNavBarToggleBtn[1].addEventListener("click", () => {
    gsap.to(".navigation-bar-mobile__links li", {
        yPercent: 0,
        duration1: 1,
    });
});

const mobNavLinks = document.querySelectorAll(
    ".navigation-bar-mobile__links li"
);

for (let link of mobNavLinks) {
    link.addEventListener("mouseenter", () => {
        gsap.to(link, {
            keyframes: {
                "33%": {
                    scale: 1.2,
                    rotate: "-10",
                },
                "66%": {
                    rotate: "10",
                },
                "100%": {
                    rotate: "0",
                    scale: 1,
                },
            },
        });
    });
}
