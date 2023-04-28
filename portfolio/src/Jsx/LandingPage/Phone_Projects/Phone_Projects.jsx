import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import "./style/Phone.scss";
import Image12 from "../../../Images/12.png";
import Image13 from "../../../Images/13.png";
import Phone_svg from "./Phone_svg";

function Phone_Projects() {
  const textScrollVariantss = {
    visible: { opacity: 1, top: 0 },
    hidden: { opacity: 0 },
  };

  const controls1 = useAnimation();
  const [ref1, inView1] = useInView();
  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
  }, [controls1, inView1]);

  return (
    <div className="Phone_box">
      <Phone_svg />
      <motion.figure
        ref={ref1}
        variants={textScrollVariantss}
        initial="hidden"
        className="snip1361"
        animate={controls1}
      >
        <img src={Image13} alt="sample45" />
        <figcaption>
          <h3>Shopping App</h3>
          <p>
            An example of responsive website appealing to high-end customers
            been done for a purpose of skill showcase p
          </p>
          <div className="center">
            <div className="btn-phone-1">
              <a
                target="_blank"
                href="https://www.youtube.com/shorts/plJJEBWO48U"
              >
                <span>Watch Video</span>
              </a>
            </div>
            <div className="btn-phone-2">
              <a
                target="_blank"
                href="https://github.com/YieGin/Shopping-App-UI-With-React-Native-Redux-toolkit"
              >
                <span>Check code</span>
              </a>
            </div>
          </div>
        </figcaption>
      </motion.figure>
      <motion.figure
        ref={ref1}
        variants={textScrollVariantss}
        initial="hidden"
        className="snip1361"
        animate={controls1}
      >
        <img src={Image12} alt="sample45" />
        <figcaption>
          <h3>Spotfiy clone</h3>
          <p>
            An example of responsive website appealing to high-end customers
            been done for a purpose of skill showcase p
          </p>
          <div className="center">
            <div className="btn-phone-1">
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=ChsdPLmG1U8"
              >
                <span>Watch Video</span>
              </a>
            </div>
            <div className="btn-phone-2">
              <a target="_blank" href="https://github.com/YieGin/Instagram-app">
                <span>Check code</span>
              </a>
            </div>
          </div>
        </figcaption>
      </motion.figure>
    </div>
  );
}

export default Phone_Projects;
