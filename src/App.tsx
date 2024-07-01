import { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { Footer } from "./pages/Footer";
import Credentials from "./pages/Credentials";
import Cryptohunt from "./pages/Cryptohunt";
import Netflix from "./pages/Netflix";
import Kanban from "./pages/Kanban";
import Wings from "./pages/Wings";
import Catalyst from "./pages/Catalyst";
import Stopwatch from "./pages/Stopwatch";
import Homepage from "./pages/Homepage";
import Webdesigning from "./pages/Webdesigning";
import Services from "./pages/Services";
import Loader from "./pages/Loader";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init({
  duration:1300,
  easing:"ease-in-out",
  once:true,
  offset: 40,
});


function App() {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 500);
  }, []);

  return (
    <>
    {screenLoading ? (
       <Loader />
      ) : (
        <>
        {window.innerWidth > 1200 ?
      <AnimatedCursor
    innerSize={12}
    outerSize={12}
    color='255,255,255'
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={5}
    />
    :
    <AnimatedCursor
    innerSize={0}
    outerSize={0}
    outerAlpha={0}
    innerScale={0}
    outerScale={0}
    />  }
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Homepage />}></Route>
          <Route path="/credentials" element={<Credentials />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cryptohunt" element={<Cryptohunt />}></Route>
          <Route path="/netflix" element={<Netflix />}></Route>
          <Route path="/kanban" element={<Kanban />}></Route>
          <Route path="/wings" element={<Wings />}></Route>
          <Route path="/catalyst" element={<Catalyst />}></Route>
          <Route path="/stopwatchandtimer" element={<Stopwatch />}></Route>
          <Route path="/designs" element={<Webdesigning />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      </>
      )}
    </>
  );
}
export default App;

