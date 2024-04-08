function locoScroll () {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop (value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect () {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
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
        }, 'b')
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        }, 'b')
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.1
        }, 'b')
    })
};


function page2Anim () {
    let elems = document.querySelectorAll(".p2-elem");

    elems.forEach(elem => {
        elem.lastElementChild.addEventListener("mouseenter", () => {
            gsap.to(elem.childNodes[5], {
                opacity: 1,
                scale: 1
            })
        })
        elem.lastElementChild.addEventListener("mouseleave", () => {
            gsap.to(elem.childNodes[5], {
                opacity: 0,
                scale: 0
            })
        })
        elem.lastElementChild.addEventListener("mousemove", (px) => {
            gsap.to(elem.childNodes[5], {
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


// locoScroll();
// navAnim();
// page2Anim();
// page3Anim();
// page7Anim();
