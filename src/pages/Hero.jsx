import React from "react";

const Hero = () => {
  return (
    <>
      <section id="Home" className="pt-20 px-10 bg-gray-900">
        <div className="container flex">
          <div className="w-full px-4 flex justify-center">
            <div className="w-1/2 px-5">
              <h1
                className="text-secondary font-bold md:text-xl pt-18"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Hi Everyone, im
                <span className="block font-bold text-4xl mt-1 mb-3 lg:text-5xl text-third">
                  Indra Alvine
                </span>
              </h1>
            </div>
            <div className="w-1/2 pl-14 right-0">
              <h2 className="font-medium text-lg mb-3 pt-18 lg:text-4xl text-third">
                Fullstack developer &{" "}
                <span className="text-dark gap-3">Tech Enthusiast</span>
              </h2>
              <p className="font-medium text-secondary pb-12 lg:text-xl">
                A web developer with 2 years sales and marketing experience who
                loves games, foods, and currently writting codes to have fun and
                looking forward to work in tech industries
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
