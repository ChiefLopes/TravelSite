// Layout.js

import React, { useEffect } from "react";

// Imported Library for scroll
import Aos from "aos";
import "aos/dist/aos.css";

const Scroll = ({ children }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return <div>{children}</div>;
};

export default Scroll;
