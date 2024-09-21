


// Calling F(x)
smoothScroll();







// Imp F(x)
function smoothScroll() {
   const lenis = new Lenis()

   lenis.on('scroll', ScrollTrigger.update)

   gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
   })

   gsap.ticker.lagSmoothing(0)
}







/* ----Under----- */
const horizontalTl = gsap.timeline({
   scrollTrigger: {
      scroller: 'body',
      trigger: '.horizontal-section',
      start: '0% 80%',
      end: '100% -300%',
      scrub: true
   }
})

horizontalTl
   .to('.horizontal-section', {
      clipPath: 'circle(40% at 50% 50%)',
      duration: 0.4,
      ease: 'power1.in',
   })
   .to('.horizontal-section', {
      clipPath: 'circle(100% at 50% 50%)',
      ease: 'power1.out',
   })
   .from('.horizontal-section >*', {
      opacity: 0,
      transformOrigin: '10% 50%',
      stagger: 0.05,
      duration: 0.2,
      scale: 0.6
   }, '<')
   .to('.horizontal-heading', {
      xPercent: -73,
      ease: 'power1.inOut',
      duration: 1,
      ease: 'none',
   }, '-=0.3')
   .to('.horizontal-elements', {
      xPercent: -84.5,
      ease: 'power1.inOut',
      duration: 1,
      ease: 'none',
   }, '<')

ScrollTrigger.create({
   scroller: 'body',
   trigger: '.horizontal-section',
   pin: '.horizontal-section',
   start: '0% 0%',
   end: '100% -320%',
   scrub: true
})