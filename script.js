function navlinks(){
    const menuIcon = document.querySelector('#icons .ri-menu-line');
    const links = document.querySelector('#links');
    const body = document.body;
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.appendChild(overlay);
    
    menuIcon.addEventListener('click', () => {
      links.classList.toggle('active');
      menuIcon.classList.toggle('active');
      overlay.classList.toggle('active');
    
      if (links.classList.contains('active')) {
        body.classList.add('no-scroll');
      } else {
        body.classList.remove('no-scroll');
      }
    });
    
    // Close navbar if overlay is clicked
    overlay.addEventListener('click', () => {
      links.classList.remove('active');
      menuIcon.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    
}

navlinks();

function locomotive(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#scroll-wrapper"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#scroll-wrapper", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#scroll-wrapper").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
    
}
locomotive();

function imgCon(){
    if(window.innerWidth <= 900){

        let imgContainer=document.querySelector("#img-container");
        let cursor=document.querySelector("#cursor");
        
        imgContainer.addEventListener("mouseenter",function(){
            gsap.to(cursor,{
            opacity:1,
            scale:1
        })
        
        })
        imgContainer.addEventListener("mouseleave",function(){
            gsap.to(cursor,{
            opacity:0,
            scale:0
        })
        })
        imgContainer.addEventListener("mousemove",function(dets){
            gsap.to(cursor,{
            left:dets.x-50,
            top:dets.y-50
        })
        })
    }
}
imgCon();
function loadanim(){
    let load=gsap.timeline();
    load.from("#page1 h1",{
        y:30,
        opacity:0,
        duration:0.8,
        delay:0.2,
        stagger:0.4
    })
    load.from("#page1 #img-container",{
        scale:1,
        opacity:0,
        duration:0.5
    })

}
loadanim();
function nav() {
    // Logo animation (both desktop & mobile ok)
    gsap.to("#nav-part1 svg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#scroll-wrapper",
        start: "top 0",
        end: "top -10%",
        scrub: true
      },
    });
  
    // Desktop-only animations
    ScrollTrigger.matchMedia({
      "(min-width: 1025px)": function () {
        // Animate links out on scroll
        gsap.to("#nav-part2 #links", {
          transform: "translateY(-100%)",
          opacity: 0,
          scrollTrigger: {
            trigger: "#page1",
            scroller: "#scroll-wrapper",
            start: "top 0",
            end: "top -10%",
            scrub: true
          },
        });
  
        // Glass effect toggle
        ScrollTrigger.create({
          scroller: "#scroll-wrapper",
          start: "top -1",          // activate once scrolled 1px
          end: "bottom bottom",     // stays till bottom
          toggleClass: { targets: "#nav", className: "glass-nav" }
        });
      }
    });
  }
  nav();
  
  
function cursor(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor-main",{
            top:dets.y,
            left:dets.x
        })
    })
    document.querySelectorAll(".child").forEach(function(elem) {
        elem.addEventListener("mouseenter", function() {
    
        gsap.to("#cursor-main",{
            transform: 'translate(-50%,-50%) scale(1)'
        });
    });
    elem.addEventListener("mouseleave",function(){
        gsap.to("#cursor-main",{
            transform: 'translate(-50%,-50%) scale(0)'
        
    });
    });
    });
}
cursor();