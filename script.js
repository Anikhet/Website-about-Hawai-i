// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
var timer = document.querySelector(".loader h5")
var grow = 0 
setInterval(() => {
    if (grow < 101){
        timer.innerHTML = grow++
    }
}, 45);
tl = gsap.timeline()

tl.from(".loader h1,.loader h5",{
    y:200,
    opacity:0,
   
})
tl.to(".loader h5",{
    animationName:"anime",
    opacity:1,
 
  
    
})



tl.to(".loader",{
    y:-1300,
    delay:4,
    display:'none',

})




