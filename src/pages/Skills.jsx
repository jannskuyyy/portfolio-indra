import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <section className="bg-gray-900 text-secondary px-10 pt-24">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="text-3xl w-full flex px-4 mb-7 justify-center">
              <h2 className="font-bold uppercase text-2xl mb-2">Skill</h2>
            </div>
            <div
              className="flex items-center gap-5 text-4xl"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <p>
                <FaHtml5 />
              </p>
              <p>
                <FaCss3 />
              </p>
              <p>
                <IoLogoJavascript />
              </p>
              <p>
                <IoLogoReact />
              </p>
              <p>
                <FaNodeJs />
              </p>
              <p>
                <SiTailwindcss />
              </p>
              <p className="text-4xl">
                <SiMysql />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
