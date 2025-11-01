import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const PostCard = () => {
  const videoRef = useRef(null);
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".post-card",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
    videoRef.current.onloadedmetadata = () => {
      timeline.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
    };
  }, []);
  return (
    <section className="post-card">
      <div className="animated-gradient-bg"></div>
      <div className="post-card-wrapper group hover:rotate-1 hover:scale-[1.02] transition duration-700">
        <img src="/images/overlay.webp" alt="" />
        <video
          ref={videoRef}
          muted
          autoPlay
          playsInline
          preload="auto"
          src="/videos/postcard-vd.mp4"
        ></video>

        <button className="group-hover:bg-yellow transition duration-700">
          Explore Leonida Keys
        </button>
      </div>
    </section>
  );
};

export default PostCard;
