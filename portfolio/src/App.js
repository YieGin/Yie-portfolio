import React, { useRef } from "react";
import Navbar from "./Jsx/Navbar/Navbar";
import { Routes, Route, HashRouter } from "react-router-dom";
import LandingPage from "./Jsx/LandingPage/LandingPage";
import LandingPageMid from "./Jsx/LandingPage/LandingPageMid";
import About from "./Jsx/LandingPage/About";
const App = () => {
  const work = useRef(null);

  const handleClickWork = () => {
    setTimeout(() => {
      work.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const HireMe = useRef(null);

  const handleClickHireMe = () => {
    setTimeout(() => {
      HireMe.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const scrollFunctions = [handleClickWork, handleClickHireMe];
  const scrollRefList = [work, HireMe];

  return (
    <div>
      <HashRouter>
        <Navbar func={scrollFunctions} />
        <Routes>
          <Route
            path="/"
            element={<LandingPage scrollref={scrollRefList} />}
          ></Route>
          <Route path="/" element={<LandingPageMid />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
