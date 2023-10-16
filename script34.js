
 
gsap.to(".a",{
    scrollTrigger:{
         trigger:"#home",
         start:"top top",
         
         end:"bottom 40%",
         scrub:"1"
     },
     opacity:0,
     duration:2,
     stagger:.2,
  ease:"power1.out"
 
 })
 gsap.to("#second img",{
     scrollTrigger:{
          trigger:"#second",
          start:"top 30%",
          
          end:"center 10% ",
          scrub:"1"
      },
      width:"30%",
      duration:2,
 
   ease:"power1.out"
  
  })