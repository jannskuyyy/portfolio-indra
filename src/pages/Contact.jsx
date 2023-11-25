import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <section id="Contact" className="pt-20 bg-gray-900 text-third px-10">
        <div className="container">
          <div className="flex justify-center flex-wrap">
            <div className="w-full flex px-4 mb-7 justify-center">
              <h4 className="font-bold uppercase text-2xl mb-2 text-secondary">
                Contact Me!
              </h4>
            </div>
            <div className="flex items-center gap-5 text-4xl  animate-bounce">
              <a href="https://github.com/Indraalvine" className="">
                <AiFillGithub />
              </a>
              <a href="https://www.instagram.com" className="">
                <BsInstagram />
              </a>
              <a href="www.linkedin.com/in/indraalvine" className="">
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
