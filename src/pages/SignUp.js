import React from "react";

function SignUp() {
  return (
    <div className="grid place-content-center  bg-blue-500">
      <div className="max-w-sm flex flex-col items-center justify-center my-8 p-5 md:p-0">
        <div className="flex  bg-white   justify-center flex-col pb-7 pt-8 md:px-14 px-8">
          <h3 className="md:text-2xl text-lg font-medium text-left text-primary-blue">
            Sign up
          </h3>
          <form>
            <div className="relative w-full ">
              <label className="block  text-black md:text-base text-sm font-medium mt-4">
                Company Name
                <input
                  type="text"
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 bg-secondary-input w-full mt-3.5 py-2 px-4 bg-white text-gray-700 placeholder-primary-placeHolder shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent;
"
                  style={{ transition: "all .15s ease" }}
                />
                <div className="text-red-500 mt-5"></div>
              </label>

              <label className="block  text-black md:text-base text-sm font-medium mt-4">
                Full Name
                <input
                  type="text"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 bg-secondary-input w-full mt-3.5 py-2 px-4 bg-white text-gray-700 placeholder-primary-placeHolder shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent;
"
                  style={{ transition: "all .15s ease" }}
                />
                <div className="text-red-500 mt-5"></div>
              </label>
              <label className="block  text-black md:text-base text-sm font-medium mt-4">
                Addrees(Ghana Post Address)
                <input
                  type="tel"
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 bg-secondary-input w-full mt-3.5 py-2 px-4 bg-white text-gray-700 placeholder-primary-placeHolder shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent;
"
                  style={{ transition: "all .15s ease" }}
                />
                <div className="text-red-500"></div>
              </label>
              <label className="block  text-black md:text-base text-sm font-medium mt-4">
                Email Address
                <input
                  type="email"
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 bg-secondary-input w-full mt-3.5 py-2 px-4 bg-white text-gray-700 placeholder-primary-placeHolder shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent;
"
                  style={{ transition: "all .15s ease" }}
                />
                <div className="text-red-500"></div>
              </label>
              <label className="block  text-black md:text-base text-sm font-medium mt-4">
                Phone Number
                <input
                  type="tel"
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 bg-secondary-input w-full mt-3.5 py-2 px-4 bg-white text-gray-700 placeholder-primary-placeHolder shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent;
"
                  style={{ transition: "all .15s ease" }}
                />
                <div className="text-red-500"></div>
              </label>
              <label className="block  text-black md:text-base text-sm font-medium mt-4">
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
                <div className="text-red-500"></div>
              </label>

              <label className="block  text-black md:text-base text-sm font-medium mt-4">
                Confirm Password
                <div className=" relative  w-full">
                  <input
                    type="password"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 bg-secondary-input w-full mt-3.5 py-2 px-4 bg-white text-gray-700 placeholder-primary-placeHolder shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent;
"
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>
                <div className="text-red-500"></div>
              </label>

              <div className="flex w-full mt-12 ">
                <button
                  type="submit"
                  className="py-2 px-4 bg-primaryYellow  active:bg-yellow-100 active:ring-primary-orange text-white w-full transition ease-in duration-200 text-center md:text-base text-sm font-semibold shadow-md rounded-lg "
                >
                  Submit
                </button>
              </div>
              <div className=" flex items-center justify-center flex-col divide-y divide-opacity-20 divide-secondary-gray w-full mt-10">
                <div></div>
                <p className=" text-tetiary-gray text-sm font-medium mt-4 flex items-center justify-center flex-col w-full pt-8">
                  Already have an account?
                  <div to="/signIn" className="text-primaryYellow block ">
                    Log in
                  </div>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
