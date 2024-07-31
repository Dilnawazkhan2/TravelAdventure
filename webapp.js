const logobars = document.querySelector(".logobars"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");

logobars.addEventListener("click",()=>{
    menu.classList.add("active")
    
    gsap.from(".menu",{
        
        opacity:0,
        duration: .3
    })
});

close.addEventListener("click",()=>{
    menu.classList.remove("active")
    
});
function animate(selector){
    selector.forEach(selector => {
        gsap.to(selector,{

            y:30,
            duration:0.1,
            opacity:1,
            delay:0.2,
            stagger:0.2,
            ease:"power2.out",

        });
        
    });
}

function scrollTriggerAnimation(triggerSelector,boxSelectors){
    const timeline = gsap.timeline({
        scrollTrigger: {

            trigger: triggerSelector,
            start: "top 50%",
            end: "top 80%",
            scrub:1,
        },

    });
    boxSelectors.forEach(boxSelectors => {
        timeline.to(boxSelectors,{

            y:0,
            duration:1,
            opacity:1,
 

        });
        
    });
}

function swipeAnimation(triggerSelector,boxSelectors){
    const timeline = gsap.timeline({
        scrollTrigger: {

            trigger: triggerSelector,
            start: "top 50%",
            end: "top 100%",
            scrub:1,
        },

    });
    boxSelectors.forEach(boxSelectors => {
        timeline.to(boxSelectors,{

            x:0,
            duration:1,
            opacity:1,
 

        });
        
    });
}
function galleryAnimation(triggerSelector,boxSelectors){
    const timeline = gsap.timeline({
        scrollTrigger: {

            trigger: triggerSelector,
            start: "top 100%",
            end: "top 100%",
            scrub:1,
        },

    });
    boxSelectors.forEach(boxSelectors => {
        timeline.to(boxSelectors,{

            y:0,
            duration:1,
            opacity:1,
 

        });
        
    });
}

animate([".home .content .logo2,.home .content h1,.home .content p,.home .content .search"]);

scrollTriggerAnimation(".traveldetails",[".traveldetails .box1",".traveldetails .box2",".traveldetails .box3"]);

scrollTriggerAnimation(".Reviews .content4",[".Reviews .content4 .con4 h1",".Reviews .content4 .con5 p"]);

swipeAnimation(".Destinations",[".Destinations .content2 .con1 p",".Destinations .content2 .con1 h1",".Destinations .content2 .con2 p",".Destinations .content2 .con2 a"]);

galleryAnimation(".Destinations .gallery",([".Destinations .gallery .box1",".Destinations .gallery .box2",".Destinations .gallery .box3",".Destinations .gallery .box4",".Destinations .gallery .box5"]));

galleryAnimation(".features .gallery",([".features .gallery .box1",".features .gallery .box2",".features .gallery .box3",".features .gallery .box4"]));

swipeAnimation(".Destinations",[".Destinations .content2 .con1 p",".Destinations .content2 .con1 h1",".Destinations .content2 .con2 p",".Destinations .content2 .con2 a"]);

galleryAnimation(".Reviews .gallery",([".Reviews .gallery .box1",".Reviews .gallery .box2",".Reviews .gallery .box3",".Reviews .gallery .box4",".Reviews .gallery .box5",".Reviews .gallery .box6"]));