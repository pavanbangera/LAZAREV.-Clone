function locoScroll () {

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop (value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect () {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}



function navAnim () {
    let nav = document.querySelector(".nav-part2");


    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "26vh",
            duration: 0.5
        }, 'a')
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        }, 'a')
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        }, 'a')
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        }, 'a')
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        }, 'a')
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.1
        }, 'a')
    })
};

function page1Anim () {
    let t1 = gsap.timeline();

    t1.from("#page1", {
        opacity: 0
    })
    t1.from("#page1", {
        transform: "scaleX(0.6) scaleY(0.2)",
        borderRadius: "50px",
        top: "100",
        duration: "2"
    })
    t1.from("#page1 h1,#page1 p,#page1 div", {
        transform: "scaleX(0.9) scaleY(0.7)",
        stagger: {
            amount: 0.5
        }
    })
    t1.from("nav", {
        opacity: 0,
        duration: 1
    })
}

function page2Anim () {
    let elems = document.querySelectorAll(".p2-elem");

    elems.forEach(elem => {
        elem.lastElementChild.addEventListener("mouseenter", () => {
            gsap.to(elem.childNodes[1], {
                opacity: 1,
                scale: 1
            })
        })
        elem.lastElementChild.addEventListener("mouseleave", () => {
            gsap.to(elem.childNodes[1], {
                opacity: 0,
                scale: 0
            })
        })
        elem.lastElementChild.addEventListener("mousemove", (px) => {
            gsap.to(elem.childNodes[1], {
                x: px.x - elem.getBoundingClientRect().x - 50,
                y: px.y - elem.getBoundingClientRect().y - 50
            })
        })
    })

};

function page3Anim () {
    let playBtn = document.querySelector(".p3-play");
    let playVideo = document.querySelector("#page3 video");

    playBtn.addEventListener("click", () => {
        gsap.to(playVideo, {
            transform: "scaleX(1) scaleY(1)",
            borderRadius: 0
        })
        playVideo.play();
    })
    playVideo.addEventListener("click", () => {
        gsap.to(playVideo, {
            transform: "scaleX(0.7) scaleY(0)",
            borderRadius: '30px'
        })
        playVideo.pause();
    })

}

function page7Anim () {
    let containers = document.querySelectorAll(".p7-right");
    containers.forEach((container) => {
        container.children[2].addEventListener("mouseenter", () => {
            gsap.to(container.children[1], {
                opacity: 1,
                scale: 1
            })
            container.childNodes[1].play();

        }, 'p7')
        container.children[2].addEventListener("mouseleave", () => {
            gsap.to(container.children[1], {
                opacity: 0,
                scale: 0
            })
            container.childNodes[1].load();
        }, 'p7')
        container.children[2].addEventListener("mousemove", (px) => {
            gsap.to(container.children[1], {
                x: px.x - container.getBoundingClientRect().x - 400,
                y: px.y - container.getBoundingClientRect().y - 100
            })
        }, 'p7')
    })
}
function page8Anim () {


    let boxes = document.querySelectorAll(".p8-box");
    boxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.children[3].play();
            let t1 = gsap.timeline();
            t1.to(box.children[1], {
                display: "none",
                duration: 0.3

            }, "p8")
            t1.to(box.children[2], {
                display: "none",
                duration: 0.2
            }, "p8")
            t1.to(box.children[3], {
                height: "85%",
                duration: 0.1

            }, "p8")
        })
        box.addEventListener("mouseleave", () => {
            let t1 = gsap.timeline();
            t1.to(box.children[1], {
                display: "block",
                duration: 0.2

            }, "p8")
            t1.to(box.children[2], {
                display: "block",
                duration: 0.3
            }, "p8")
            t1.to(box.children[3], {
                height: "50%",
                duration: 0.3

            }, "p8")
            box.children[3].load();
        })

    })
}

function page9Anim () {
    let details = document.querySelectorAll(".p9-detail");
    details.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            let t1 = gsap.timeline();
            t1.to(box.lastElementChild, {
                opacity: 1,
                y: 30
            })
        })
        box.addEventListener("mouseleave", () => {
            let t1 = gsap.timeline();
            t1.to(box.lastElementChild, {
                opacity: 0,
                y: 0
            })
        })
    })
    let dropDowns = document.getElementsByTagName('details');

    Array.from(dropDowns).forEach(element => {
        element.addEventListener("toggle", () => {
            if (element.hasAttribute("open")) {
                element.children[0].children[0].children[0].classList.remove("close");
                element.children[0].children[0].children[0].classList.add("open");
            } else {
                element.children[0].children[0].children[0].classList.remove("open");
                element.children[0].children[0].children[0].classList.add("close");
            }
        });
    });


}
function page10Anim () {

    gsap.from(".p10-content h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".p10-content",
            scroller: "#main",
            // markers: true,
            start: "top 80%",
            end: "top -20%",
            scrub: true
        }
    })
}

function page11Anim () {
    let p11BubbleContiner = document.querySelector(".p11-left .invisible");

    p11BubbleContiner.addEventListener("mouseenter", () => {
        gsap.to(".p11-bubble", {
            opacity: 1,
            scale: 1
        })
    })
    p11BubbleContiner.addEventListener("mouseleave", () => {
        gsap.to(".p11-bubble", {
            opacity: 0,
            scale: 0
        })
    })
    p11BubbleContiner.addEventListener("mousemove", (px) => {
        gsap.to(".p11-bubble", {
            x: px.x - p11BubbleContiner.getBoundingClientRect().x - 80,
            y: px.y - p11BubbleContiner.getBoundingClientRect().y - 300
        })
    })
}

locoScroll();
page10Anim();
page1Anim();

page3Anim();
page7Anim();
page9Anim();
page11Anim();

function applyMediaQuery () {
    if (window.matchMedia("(min-width: 762px)").matches) {
        navAnim();
        page2Anim();
        page8Anim();
    } else {

    }
}

window.onload = applyMediaQuery;
window.addEventListener("resize", applyMediaQuery);