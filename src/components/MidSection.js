import React from "react";
import Transaction from "../icons/Transaction.svg";
import Decision from "../icons/Decision.svg";
import Grow from "../icons/Grow.svg";
import Sorting from "../icons/Sorting.svg";
import bgTop from "../icons/BgtopBlack.svg";
import bgbottom from "../icons/Bgbottom.svg";
import arrow from "../icons/arrow.svg";
import clock from "../icons/clock.svg";
import desktop from "../icons/desktop.svg";
import flyarrow from "../icons/flyarrow.svg";

function MidSection() {
  return (
    <div className="">
      <div className="mt-20 lg:px-24 px-12">
        <div className=" flex items-center flex-col">
          <h2 className="font-bold lg:text-4xl text-2xl tracking-wide text-center">
            Management made easy
          </h2>
          <p className="font-medium text-center lg:px-24  mt-4 mb-8">
            <span className="font-extrabold text-4xl">O</span>ur Missionis to
            help to{" "}
            <span className="font-extrabold text-xl"> organizations </span>from
            smaller to large scale to effectively{" "}
            <span className="font-extrabold text-xl"> manage</span> their{" "}
            <span className="font-extrabold text-xl">businesses anywhere</span>{" "}
            at
            <span className="font-extrabold text-xl"> anytime</span>
          </p>

          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img
                      src={Transaction}
                      alt=" transaction"
                      class=" h-full w-full"
                    />
                  </div>
                  <h3 className=" font-medium text-xl mt-8 text-center">
                    Easy Transaction
                  </h3>
                  <p className=" text-center font-normal text-sm mt-2">
                    Payment of goods and services in your organization can be
                    collected using mobile money and visa.
                  </p>
                </div>
                <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img
                      src={Decision}
                      alt="decision"
                      className="h-full w-full"
                    />
                  </div>
                  <h3 className=" font-medium text-xl mt-8 text-center">
                    Make Better Decision
                  </h3>
                  <p className=" text-center font-normal text-sm mt-2">
                    Since your data will be available anytime, better decisions
                    can be made using this historical data.
                  </p>
                </div>
                <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img src={Grow} alt="grow" className=" h-full w-full" />
                  </div>
                  <h3 className=" font-medium text-xl mt-8 text-center">
                    Grow Your Business
                  </h3>
                  <p className=" text-center font-normal text-sm mt-2">
                    With mystorekeeper, a user can expand his organization
                    without worrying about how to manage it.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="">
            <button className="bggreen py-1 text-white px-8 lg:px-16 rounded mt-4 lg:font-bold  text-lg mb-14">
              Get started
            </button>
          </div>
        </div>
      </div>

      <section class="relative  lg:p-24 ">
        <div className="invisible md:visible absolute top-0 right-0">
          <img src={bgTop} alt="" />
        </div>
        <div className="invisible md:visible absolute bottom-0 left-0 ">
          <img src={bgbottom} alt="" />
        </div>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 px-10">
              Make sure you have the stock you need, every time, all time .
              Simple
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/2">
              <div className="">
                <img src={Sorting} alt="sorting" />
              </div>
            </div>
            <div class="p-4 md:w-1/2">
              <div className=" flex flex-col justify-center items-center space-y-4">
                <div className="flex space-x-5 justify-center items-center">
                  <img src={clock} alt="clocks" />
                  <div className="">
                    <h4 className=" font-semibold text-lg">Fast and Secure</h4>
                    <p className=" font-normal text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                  </div>
                </div>
                <div className="flex space-x-5 justify-center items-center">
                  <img src={desktop} alt="" />
                  <div className="">
                    {" "}
                    <h4 className=" font-semibold text-lg">
                      Clean Design and Easy Experience
                    </h4>
                    <p className=" font-normal text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                  </div>
                </div>
                <div className="flex space-x-5 justify-center items-center">
                  <img src={arrow} alt="" />
                  <div className="">
                    <h4 className=" font-semibold text-lg">Accurate Results</h4>
                    <p className=" font-normal text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                  </div>
                </div>
                <div className="flex space-x-5 justify-center items-center">
                  <img src={flyarrow} alt="" />
                  <div className="">
                    <h4 className=" font-semibold text-lg">
                      Efeective Supply Chain
                    </h4>
                    <p className=" font-normal text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MidSection;
