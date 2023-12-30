import React from "react";

const Project = () => {
  return (
    <>
      <section id="Project" className="pt-40 pb-16 bg-gray-900 text-secondary">
        <div className="container">
          <div
            className="w-full px-4"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-xl sm:text-2xl text-dark mb-2">
                Projects
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                New
              </h2>
              <p className="font-medium tetx-md text-secondary md:text-lg">
                This section explaining about all my latest projects
              </p>
            </div>
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-12 px-4 md:w-1/2 justify-center">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="V-rent.png"
                  alt=""
                  data-aos="flip-up"
                  data-aos-duration="500"
                />
              </div>
              <h3 className="font-semibold text-2xl text-dark mt-5 mb-3">
                V-Rent
              </h3>
              <p className="font-medium text-lg text-secondary pb-2">
                V-Rent is a renting cars website with a purpose to make a better
                transactions
              </p>
              <p className="text-md pb-1">My participations :</p>
              <ol>
                <li>Make hero and banner page</li>
                <li>Integrate transactions page with API</li>
              </ol>
            </div>

            <div className="mb-12 px-4 md:w-1/2 justify-center">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="crud.png"
                  alt="landing page"
                  data-aos="flip-up"
                  data-aos-duration="500"
                  width="w-full"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                CRUD
              </h3>
              <p className="font-medium text-base text-secondary">
                A simple CRUD website
              </p>
              <p>my participations :</p>
              <ol>
                <li>Creating CRUD API</li>
                <li>Creating databse with Mysql</li>
                <li>Creating frontend with React</li>
              </ol>
            </div>

            <div className="mb-12 px-4 md:w-1/2 justify-center">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src=""
                  alt="landing page"
                  data-aos="flip-up"
                  data-aos-duration="500"
                  width="w-full"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Market Info
              </h3>
              <p className="font-medium text-base text-secondary">
                A simple market web
              </p>
              <p>my participations :</p>
              <ol>
                <li>Creating web using ReactJS</li>
                <li>Using fake API to integrate with frontend</li>
              </ol>
            </div>

            <div className="mb-12 px-4 md:w-1/2 justify-center">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="Laundry.png"
                  alt="landing page"
                  data-aos="flip-up"
                  data-aos-duration="500"
                  width="w-full"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Laundry Mart
              </h3>
              <p className="font-medium text-base text-secondary">
                A simple Laundry Website
              </p>
              <p>my participations :</p>
              <ol>
                <li>Creating web HTML and CSS</li>
                <li>Making </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
