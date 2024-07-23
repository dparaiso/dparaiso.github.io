gsap.registerPlugin(ScrollTrigger);

		gsap.set(".dot", {xPercent: -50, yPercent: -50});
		
		let tl = gsap.timeline({
		  scrollTrigger: {
		    trigger: ".block",
		    start: "top top",
		    end: "+=100%",
		    scrub: 0.5,
		    pin: ".dot"
		  },
		})

	tl.from(".dot", {
	  scale: 0.1,
	  repeat: 1,
	  yoyo: true
})