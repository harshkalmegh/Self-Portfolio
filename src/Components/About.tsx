import React from "react";
import { useLocation } from "react-router-dom";
import Index from "./Navigation/Index";

function About() {
  const { search, state } = useLocation();
  console.log({ search, state });
  return (
    <div>
      <Index />
      <p>ABout</p>
    </div>
  );
}

export default About;
