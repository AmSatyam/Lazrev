let elem = document.querySelectorAll(".right-elem");

elem.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale: 0
        })
})
elem.addEventListener("mousemove", function(dets){

    gsap.to(elem.childNodes[3],{
        x:dets.x - elem.getBoundingClientRect().x - 200,
        x:dets.y - elem.getBoundingClientRect().y - 20
    })
})
})
}) 


// let vidst = document.querySelector("#page3-icon")
// vidst.addEventListener("onclick",function(){
    
// })