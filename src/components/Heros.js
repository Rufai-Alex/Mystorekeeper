import React from "react";
import Hero from "../icons/Hero.svg";
import heroBlob from "../icons/Hero_Blob.svg";

function Heros() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className=" absolute z-0 right-36">
          <img src={heroBlob} alt="bg" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center z-10">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            MyShopKeeper
            <br className=" lg:inline-block" />
            INVENTORY
            <br className="lg:inline-block" />
            MANAGEMENT SYSTEM
          </h1>
          <div className="mb-8 leading-relaxed">
            <p className=" font-medium text-lg tracking-widest">
              Your #1 option for an online
            </p>

            <p className="font-medium text-lg tracking-widest ">
              Inventery Management System,
            </p>

            <p className="font-extrabold text-lg tracking-widest">
              Pure Inventory . Pure Power
            </p>
            <button className="bggreen text-white py-2 px-10 rounded mt-4 font-medium">
              Get started
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 z-10">
          <img
            src={Hero}
            className="object-cover object-center rounded"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
}

export default Heros;
