import gsap from "gsap";
// Horizontal scroll
export const horizontalScroll = (el) => {
  let container = document.getElementById(el);
  console.log(container);
  gsap.to(container, {
    x: () =>
      -(container.scrollWidth - document.documentElement.clientWidth) + "px",
    ease: "none",
    scrollTrigger: {
      trigger: container,
      invalidateOnRefresh: true,
      pin: true,
      scrub: 1,
      end: () => "+=" + container.offsetWidth,
    },
  });
};
