import React from "react";
import Aos from "aos";

const Hero = () => {
  return (
    <>
      <section id="Home" className="pt-20 px-10 bg-gray-900">
        <div className="container flex justify-center">
          <div className="flex">
            <div className="w-full self-center px-4">
              <h1
                className="text-secondary font-bold md:text-xl"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Hi Everyone, im
                <span className="block font-bold text-4xl mt-1 mb-3 lg:text-5xl text-third">
                  Indra Alvine
                </span>
              </h1>
              <h2 className="font-medium text-secondary text-lg mb-3 lg:text-2xl">
                Fullstack developer &{" "}
                <span className="text-dark">Tech Enthusiast</span>
              </h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">
                I'm a web programmer who loves games and foods
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
