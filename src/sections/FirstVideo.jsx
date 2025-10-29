import { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";

const FirstVideo = () => {
  const videoRef = useRef(null);
  useGSAP(() => {
    gsap.set(".first-vd-wrapper", { marginTop: "-150vh", opacity: 0 });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-vd-wrapper",
        start: "top top",
        end: "+=200% top",
        scrub: true,
        pin: true,
      },
    });
    timeline
      .to(".hero-section", { delay: 0.5, opacity: 0, ease: "power1.inOut" })
      .to(".first-vd-wrapper", {
        opacity: 1,
        duration: 2,
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
  }, []);
  return (
    <section className="first-vd-wrapper">
      <div className="h-dvh">
        <video
          src="/videos/output1.mp4"
          className="first-vd"
          ref={videoRef}
          muted
          playsInline
          preload="auto"
        ></video>
      </div>
    </section>
  );
};

export default FirstVideo;
