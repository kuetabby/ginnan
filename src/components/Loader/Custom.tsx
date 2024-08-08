import React from "react";
import { galaxy } from "@/utils/font";

import "./style.css";

interface Props {}

// const YinLoader: React.FC<Props> = () => {
//   return (
//     <div className="w-full h-screen flex flex-col justify-center items-center mx-auto overflow-hidden">
//       <div className="yin-loaders" />
//     </div>
//   );
// };

const YinLoader: React.FC<Props> = () => {
  return (
    <div
      className={`w-full h-screen flex flex-col justify-center items-center mx-auto overflow-hidden ${galaxy.className}`}
    >
      <div className="w-full h-28 flex items-center justify-center">
        <div className="dot-loader" />
      </div>
      <h1 className="flex text-ginnan-primary text-xl lg:text-2xl 2xl:text-3xl font-semibold mt-4">
        This is what I do every time.
        <div className="loading-pulse">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </h1>
    </div>
  );
};

export default YinLoader;
