import { useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap/gsap-core";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-9xl text-blue-600">ASDSA</h1>
    </>
  );
}

export default App;
