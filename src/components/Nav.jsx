import React from "react";

const Nav = () => {
  return (
    <>
      <header className=" bg-gray-900 z-10 sticky top-0">
        <div className="container">
          <ul className="flex justify-center flex-wrap gap-10 py-3 text-white lg:text-lg sm:text-sm ">
            <li className="hover:text-xl hover:text-third py-2 mx-2">
              <a href="#Home">Home</a>
            </li>
            <li className="hover:text-xl py-2 mx-2  hover:text-third">
              <a href="#Contact">Contact</a>
            </li>
            <li className="hover:text-xl py-2 mx-2  hover:text-third">
              <a href="#Project">Project</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Nav;
