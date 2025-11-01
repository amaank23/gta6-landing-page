import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Final = () => {
  const videoRef = useRef(null);
  useGSAP(() => {
    gsap.set(".final-content", { opacity: 0 });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".final",
        start: "top top",
        end: "90% top",
        scrub: true,
        pin: true,
      },
    });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".final",
        top: "top 80%",
        end: "90% top",
        scrub: true,
      },
    });
    timeline.to(".final-content", {
      duration: 1,
      opacity: 1,
      scale: 1,
      ease: "power1.inOut",
    });

    videoRef.current.onloadedmetadata = () => {
      timeline.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: "power1.inOut",
        },
        "<"
      );
    };
  });
  return (
    <section className="final">
      <div className="final-content size-full">
        <video
          src="/videos/output3.mp4"
          className="size-full object-cover"
          ref={videoRef}
          muted
          playsInline
          preload="auto"
        ></video>
      </div>
    </section>
  );
};

export default Final;
