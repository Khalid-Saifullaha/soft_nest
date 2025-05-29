import React from "react";
import SoftwareCard from "./SoftwareCard";

const Software = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="text-center">
        <p className="text-lg sm:text-base md:text-xl font-bold text-blue-700 dark:text-pink-500 uppercase">
          Softwares
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl mt-3 font-bold leading-[1.8rem] md:leading-[3rem]">
          Driving Change with Innovative <br /> Successful Softwares
        </h1>
      </div>
      {/* card */}
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <div>
          <SoftwareCard icon="/images/i1.png" title="Best Marketing software" />
        </div>
        <div>
          <SoftwareCard icon="/images/i2.png" title="Product Sales Software" />
        </div>
        <div>
          <SoftwareCard icon="/images/i3.png" title="Best Marketing Software" />
        </div>
      </div>
    </div>
  );
};

export default Software;
