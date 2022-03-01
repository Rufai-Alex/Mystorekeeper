import React from "react";
import contact from "../icons/Contact.svg";
import facebook from "../icons/facebook.png";
import intagram from "../icons/instagram.png";
import twitter from "../icons/twitter.png";

function Contact() {
  return (
    <section className="text-gray-600 body-font">
      <h2 className="self-center mb-6 lg:text-5xl font-bold text-black text-center text-2xl ">
        Contact Us
      </h2>
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="md:w-1/2 md:pr-16 lg:px-8 pr-0">
          <div className=" flex flex-col  space-y-4  ">
            <label for="name-with-label" className="text-black">
              <p className=""> Enter Full Name</p>
              <input
                type="text"
                id="name-with-label"
                className="  mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-4/5 py-2 px-4 bg-white text-black placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="email"
                placeholder="Your name"
              />{" "}
            </label>
            <label for="name-with-label" className="text-black">
              <p className=""> Enter Email</p>
              <input
                type="text"
                id="name-with-label"
                className="mt-2  rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-4/5  py-2 px-4 bg-white text-black placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="email"
                placeholder="Your name"
              />{" "}
            </label>
            <label for="name-with-label" className="text-black">
              <p> Enter Subject</p>
              <input
                type="text"
                id="name-with-label"
                className="mt-2  rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-4/5  py-2 px-4 bg-white text-black placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="email"
                placeholder="Your name"
              />{" "}
            </label>

            <label className="text-black" for="name">
              <p> Enter Your Message</p>
              <textarea
                className=" mt-2 flex-1 appearance-none border border-gray-300 w-4/5  py-2 px-4 bg-white text-black placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                id="comment"
                placeholder="Enter your comment"
                name="comment"
                rows="5"
                cols="40"
              ></textarea>
            </label>
            <button className=" bggreen text-white py-1  rounded mt-8 font-medium  w-1/2 lg:w-1/4">
              {" "}
              Send Message
            </button>
          </div>
        </div>
        <div className=" md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <div className="flex flex-col justify-center items-center">
            <div className="">
              <img src={contact} alt="" />
            </div>

            <div className="mt-14">
              <div className="flex flex-col">
                <p className="text-2xl text-black font-semibold ">
                  Let's Get Interactive
                </p>

                <div className="flex justify-between mt-6">
                  <img src={facebook} alt="" />
                  <img src={intagram} alt="" />
                  <img src={twitter} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
