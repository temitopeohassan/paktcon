
import React, { useEffect } from "react";

const Linkedin = () => {
  useEffect(() => {
    window.location.href = "https://linkedin.com/";
  }, []);

  return <div>Redirecting...</div>;
};

export default Linkedin;