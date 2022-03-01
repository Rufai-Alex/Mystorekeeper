import React from "react";
import Analyse from "../icons/Analyse.svg";
import Daily from "../icons/Daily.svg";
import incentTrack from "../icons/incentTrack.svg";
import Login from "../icons/Login.svg";
import recommend from "../icons/recommend.svg";
import Shop from "../icons/Shop.svg";
import userManage from "../icons/userManage.svg";
import warehouse from "../icons/warehouse.svg";

function Footer() {
  return (
    <div className="">
      <section class="  bggreen text-slate-200">
        <div class="container  p-24 mx-auto">
          <h2 className="font-bold text-3xl text-center lg:p-4">
            Our Features
          </h2>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 md:p-8 pt-8  w-full">
              <div className="flex flex-col justify-center items-start   space-y-4">
                <img src={userManage} alt="manage" />
                <h4 className="font-bold text-lg">User Management</h4>
                <p className="font-bold text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
              </div>
            </div>

            <div class="lg:w-1/4 md:w-1/2 md:p-8 pt-8  w-full">
              <div className="flex flex-col justify-center items-start   space-y-4">
                <img src={warehouse} alt="manage" />
                <h4 className="font-bold text-lg">Multiple Warehouse</h4>
                <p className="font-bold text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 md:p-8 pt-8 w-full">
              <div className="flex flex-col justify-center items-start   space-y-4">
                <img src={Daily} alt="manage" />
                <h4 className="font-bold text-lg">Track daily sales</h4>
                <p className="font-bold text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 md:p-8 pt-8  w-full">
              <div className="flex flex-col justify-center items-start   space-y-4">
                <img src={Analyse} alt="manage" />
                <h4 className="font-bold text-lg">Advanced Alanysis</h4>
                <p className="font-bold text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 md:p-8 pt-8 w-full">
              <div className="flex flex-col justify-center items-start   space-y-4">
                <img src={Shop} alt="manage" />
                <h4 className="font-bold text-lg">Multiple Shops</h4>
                <p className="font-bold text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 md:p-8 pt-8  w-full">
              <div className="flex flex-col justify-center items-start   space-y-4">
                <img src={Login} alt="manage" />
                <h4 className="font-bold text-lg">Login User activities</h4>
                <p className="font-bold text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 md:p-8 pt-8  w-full">
              <div className="flex flex-col justify-center items-start   space-y-4">
                <img src={incentTrack} alt="manage" />
                <h4 className="font-bold text-lg">Inventory Tracking</h4>
                <p className="font-bold text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 md:p-8 pt-8  w-full">
              <div className="flex flex-col justify-center items-start   space-y-4">
                <img src={recommend} alt="manage" />
                <h4 className="font-bold text-lg">Recommendations</h4>
                <p className="font-bold text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam
                </p>
              </div>
            </div>
            <button className="bg-blue-500 py-1  p-6 ppx-16 rounded mt-4 font-bold text-lg mx-auto">
              Get started
            </button>
          </div>
        </div>
      </section>

      <div className="bg-black text-slate-200 flex justify-between items-start w-full pt-8 md:px-16 pb-24 flex-col md:flex-row">
        <div className=" w-1/2 px-16">
          <h4 className="font-medium text-lg">
            <ul className="">
              <li className="">Terms and conditions</li>
              <li className="">Privacy policy</li>
              <li className="">Liencis</li>
            </ul>
          </h4>
        </div>
        <div className="flex justify-between  lg:w-1/2 m-auto  w-full p-4 px-8">
          <div className="">
            <h4 className="text-blue-500 text-sm font-normal pb-3"> Company</h4>
            <ul className="text-sm font-normal space-y-2">
              <li>About us</li>
              <li>Our Team</li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-blue-500 text-sm font-normal pb-3">
              Get in touch
            </h4>
            <ul className="text-sm font-normal space-y-2">
              <li>+233 27 137 6580</li>
              <li>+233 20 248 2206</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
