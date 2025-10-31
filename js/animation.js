document.addEventListener("DOMContentLoaded", () => {
    gsap.from("main", {
        duration: 0.4,
        opacity: 0,
        ease: "inout",
    })

    gsap.from(".startButt_container", {
        duration: 0.3,
        opacity: 0,
        ease: "inout",
        delay: 0.4,
        stagger: 0.1
    })


    gsap.from("section", {
        duration: 0.2,
        scale: 0.95,
        ease: "inout",
        //stagger: 0.1 startButt_container
    })
})

/* export function animationResult() {
    gsap.from("#resultparr", {
        duration: 0.7,
        opacity: 0,
        ease: "inout",
    })

}
export function animationTriangle() {
    gsap.from("#triangle-container", {
        duration: 0.8,
        scale: 0,
        ease: "bounce.out",
    })

} */