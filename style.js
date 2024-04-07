function navAnim () {
    var nav = document.querySelector("nav")

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
            duration: 0.2
        }, 'b')
    })
};


function page2Anim () {
    let elems = document.querySelectorAll(".p2-elem");

    elems.forEach(elem => {
        elem.addEventListener("mouseenter", () => {
            gsap.to(elem.childNodes[5], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", () => {
            gsap.to(elem.childNodes[5], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", (px) => {
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


// navAnim();
// page2Anim();
// page3Anim();
