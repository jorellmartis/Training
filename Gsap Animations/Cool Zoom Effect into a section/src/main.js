

let Scrollanim = gsap.timeline({
    scrollTrigger: {
    trigger: '.container-loader',
    start: () => "top top",
    end: () => "bottom  bottom+=100vh"  ,
    scrub: true,
    pin : true,
    // markers: true,
}
});
    Scrollanim.to('.anim-loader',
    {
    scale : 5,
    })
    Scrollanim.to('.anim-loader',
    {
    opacity: 0.6,
    scale : 10,
    })
    Scrollanim.to('.anim-loader',
    {
    opacity: 0.3,
    scale : 20,
    })

    Scrollanim.to('.anim-loader',
    {
    opacity: 0,
    })

let sections = gsap.utils.toArray(".horiz");
let waht= gsap.set(".container-horiz", {width:((sections.length)*100)+'%'});

console.log(waht)

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
        trigger: ".container-horiz",
        pin: true,
        scrub: 0.1,
        markers: true,
    }
});