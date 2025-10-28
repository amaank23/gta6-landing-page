import { useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap/gsap-core";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
