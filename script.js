gsap.from("#nav h3",{
    y:-25,
    opacity:0,
    duration:1,
    delay:3,
    stagger:0.2,
});

gsap.from("img",{
    x:1000,
    rotate:360,
    duration:2,
    delay:4,
    stagger:1,

});

gsap.from("#head1",{
    x:-1000,
    duration:2,
    delay:0.5,

});

gsap.from("#head2,#head3",{
    y:1000,
    duration:2,
    delay:0.5,
    stagger:0.6,

})