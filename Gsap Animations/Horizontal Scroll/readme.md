<!-- Hozinotal Scrolling -->

<!-- const sections = gsap.utils.toArray(".section");
let maxWidth = 0;

const getMaxWidth = () => {
	maxWidth = 0;
	sections.forEach((section) => {
		maxWidth += section.offsetWidth;
	});
};
getMaxWidth();

const t = gsap.to(sections, {
	x: () => `-${maxWidth - window.innerWidth}`,
	ease: "none",
	scrollTrigger: {
		trigger: ".wrapper",
		pin: true,
		scrub: true,
		end: () => `+=${maxWidth}`,
		invalidateOnRefresh: true,
		id: "main",
		markers: true,
	}
});
 -->

<!-- CODEPEN REFERENCE -->
<!-- https://codepen.io/GreenSock/pen/XWYeagd -->