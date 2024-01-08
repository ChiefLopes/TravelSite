// Layout.js

import React, { useEffect } from "react";

// Imported Library for scroll animation
import Aos from "aos";
import "aos/dist/aos.css";

// Creating a context API for the scroll animation
const Scroll = ({ children }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return <div>{children}</div>;
};

export default Scroll;
