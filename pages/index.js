import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    let container = document.getElementById("container");

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
  }, []);

  return (
    <>
      <div id="container">
        <div className="panel green"></div>
        <div className="panel yellow"></div>
        <div className="panel purple"></div>
        <div className="panel orange"></div>
        <div className="panel blue"></div>
        <div className="panel red"></div>
      </div>
    </>
  );
}
