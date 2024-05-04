import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Software Engineering Student", "Web Developer"],
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default Type;
