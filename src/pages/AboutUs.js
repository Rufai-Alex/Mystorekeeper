import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import about from "../icons/about-us.svg";

function AboutUs() {
  return (
    <div>
      <Nav />
      <section className="body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About US
            </h1>
            <p className="mb-8 leading-relaxed">
              In our modern world, security is the most essential when it comes
              to operating a business. Why? This is because you won't always be
              in your organization hence someone will be managing your business
              for you. How do you know what's going on in your business? This is
              when we come in to help you know what's going on in your absence
              at any time anywhere.
            </p>
            <div className="">
              {" "}
              Our Team:{" "}
              <ul className="">
                <li className="">Abraham Nyarko.</li>
                <li className="">Kazia</li>
              </ul>
            </div>
          </div>
          <div className="lg:max-w-lg w-full">
            <img className="" alt="hero" src={about} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;
