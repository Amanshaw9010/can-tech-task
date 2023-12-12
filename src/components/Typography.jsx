import React from "react";
import Typewriter from "typewriter-effect";

const Typography = () => {
  return <div></div>;
};

export const TypeWriterEffectText = ({ text }) => {
  return (
    <h1 className="text-2xl mb-1.5 font-semibold text-white">
      <Typewriter
        options={{
          delay: 30,
          cursor: "",
          autoStart: true,
          loop: false,
        }}
        onInit={(typewriter) => {
          typewriter.typeString(text).pauseFor(0).start();
        }}
      />
    </h1>
  );
};

export default Typography;
