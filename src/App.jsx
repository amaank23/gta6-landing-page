import { useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap/gsap-core";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/SecondVideo";
import Lucia from "./sections/Lucia";
import { useGSAP } from "@gsap/react";
import PostCard from "./sections/PostCard";
import Final from "./sections/Final";
import Outro from "./sections/Outro";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [count, setCount] = useState(0);

  // useGSAP(() => {
  //   const horizontalWrapper = document.querySelector(".horizontal-wrapper");
  //   const sections = gsap.utils.toArray(".panel");

  //   gsap.to(horizontalWrapper, {
  //     x: () => `-${(sections.length - 1) * 100}vw`, // move left by full width of all but one panel
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".horizontal-section",
  //       pin: true, // keeps section fixed during scroll
  //       scrub: 1, // smoothness
  //       end: () => "+=" + horizontalWrapper.offsetWidth, // end after full scroll
  //     },
  //   });
  // }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <FirstVideo />
      <Jason />
      <SecondVideo />
      <Lucia />
      <PostCard />
      <Final />
      <Outro />
      {/* <section class="horizontal-section">
        <div class="horizontal-wrapper">
          <div class="panel">Panel 1</div>
          <div class="panel">Panel 2</div>
          <div class="panel">Panel 3</div>
          <div class="panel">Panel 4</div>
        </div>
      </section> */}
    </main>
  );
}

export default App;
