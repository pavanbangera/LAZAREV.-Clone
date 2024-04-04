(function navAnimation () {
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
})();
