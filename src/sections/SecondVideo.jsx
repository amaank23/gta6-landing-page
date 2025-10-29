import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const SecondVideo = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set(".lucia", { marginTop: "-60vh", opacity: 0 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".lucia",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
      },
    });

    timeline.to(".lucia", {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      //   delay: 1.5,
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
  }, []);
  return (
    <section className="lucia">
      <div className="h-dvh">
        <video
          src="/videos/output2.mp4"
          className="size-full object-cover second-vd"
          style={{ objectPosition: "30% 0%" }}
          ref={videoRef}
          muted
          playsInline
          preload="auto"
        ></video>
      </div>
    </section>
  );
};

export default SecondVideo;
