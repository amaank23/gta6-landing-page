import { useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap/gsap-core";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/SecondVideo";
import Lucia from "./sections/Lucia";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Navbar />
      <Hero />
      <FirstVideo />
      <Jason />
      <SecondVideo />
      <Lucia />
    </main>
  );
}

export default App;
