import React from "react";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className="grid place-content-center  bg-blue-500 h-screen">
      <div className="max-w-sm flex flex-col items-center justify-center my-8 p-5 md:p-0">
        <div className="flex bg-white  justify-center flex-col pb-7 pt-8 md:px-14 px-8">
          <h3 className="md:text-2xl text-lg font-medium text-left text-primary-blue">
            Log in
          </h3>
          <form className="">
            <div className="relative w-full ">
              <label className="block  text-black text-base  font-medium mb-3.5 mt-9">
                Email address/Phone number
                <input
                  type="text"
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 bg-secondary-input w-full mt-3.5 py-2 px-4 bg-white text-gray-700 placeholder-primary-placeHolder shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent;
"
                  style={{ transition: "all .15s ease" }}
                  placeholder="example@mail.com"
                />
                <div className="text-red-500 mt-2 text-sm"></div>
              </label>
              <label className="block  text-black text-base font-medium mt-4">
                Password
                <div className=" relative  w-full">
                  <input
                    type="password"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 bg-secondary-input w-full mt-3.5 py-2 px-4 bg-white text-gray-700 placeholder-primary-placeHolder shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent;
"
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>
                <div className="text-red-500 mt-2 text-sm"></div>
              </label>

              <div className="flex w-full mt-12">
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-500  active:bg-yellow-100 active:ring-primary-orange text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg "
                >
                  Submit
                </button>
              </div>
              <div className=" flex items-center justify-center flex-col divide-y divide-opacity-20 divide-secondary-gray w-full mt-10">
                <p className="block  text-blue-500 text-base font-medium pb-2">
                  <Link to="/forget"> Forgot Password?</Link>
                </p>
                <p className=" text-tetiary-gray text-sm font-medium mt-4 text-center items-center justify-center flex-col w-full pt-8">
                  Don’t have an account?
                  <span className="text-blue-500  ">
                    <Link to="/signUp"> Sign up</Link>
                  </span>
                </p>
              </div>
              <div className="text-center text-sm font-medium mt-4  ">
                <Link to="/"> Go back to homepage</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
