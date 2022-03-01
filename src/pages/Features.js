import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import check from "../icons/check.svg";
import manage from "../icons/manage.svg";

function Features() {
  return (
    <div>
      <Nav />

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Smart, Simple &
              <br className="hidden lg:inline-block" />
              Effective Ineventory
              <br className="hidden lg:inline-block" />
              Manager for businesses
            </h1>
            <p className="mb-8 leading-relaxed">
              Track expenses, run reports and even more not from just one place
              but any where, any time.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex  bggreen text-white border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Buy Now
              </button>
              <button className=" ml-4 md:ml-24 inline-flex  bggreen text-white border-0 py-2  px-2 md:px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Start Free 30 Day Trial
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src={manage}
              className="object-cover object-center rounded"
              alt="hero"
            />
          </div>
        </div>
      </section>

      <section class="">
        <h2
          className=" font-bold text-3xl md:text-4xl text-center"
          id="pricing"
        >
          MyshopKeeper For Everyone
        </h2>
        <div class="container px-5 py-24 mx-auto h-full">
          <div class="flex flex-wrap -m-4 items-stretch h-full">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="border border-slate-400 flex flex-col p-4 pt-0 justify-start items-start">
                <h2 className="font-semibold text-3xl pt-9">Basic</h2>
                <p className="font-medium text-sm pt-3">
                  start your own business
                </p>
                <p className=" font-bold pt-3">
                  USD 16.00/<span className="font-medium text-sm">mo</span>{" "}
                </p>
                <button className="bggreen text-white font-bold text-sm bgg  p-2 mt-2 rounded ">
                  Buy Now
                </button>
                <div className=" mt-12">
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">1 warehouse. </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">1 shop.</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">5 user management.</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">
                      Only 3 users can login including you.
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">
                      Only 1 guest user is allowed.
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">Basic logging.</p>
                  </div>
                  <div className="flex items-center space-x-1 lg:pb-16">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">24hours support.</p>
                  </div>
                </div>
                <button className="bggreen text-white  px-2 py-1 mt-12 rounded">
                  Start Free Trial
                </button>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="border border-slate-400 flex flex-col p-4 pt-0 justify-start items-start">
                <h2 className="font-semibold text-3xl pt-9">Advanced</h2>
                <p className="font-medium text-sm pt-3">
                  start your own business
                </p>
                <p className=" font-bold pt-3">
                  USD 16.00/<span className="font-medium text-sm">mo</span>{" "}
                </p>
                <button className="bggreen text-white font-bold text-sm bgg  p-2 mt-2 rounded ">
                  Buy Now
                </button>
                <div className=" mt-12">
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">2 warehouses. </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">2 shops.</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">Advanced logging.</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">10 user management.</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">
                      Only 5 users can login plus you.
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">
                      Only 2 guest users are allowed.{" "}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 lg:mb-20">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm ">24hours support.</p>
                  </div>
                </div>
                <button className="bggreen text-white  px-2 py-1 mt-12 rounded">
                  Start Free Trial
                </button>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="border border-slate-400 flex flex-col p-4 pt-0 justify-start items-start">
                <h2 className="font-semibold text-3xl pt-9">Enterprise</h2>
                <p className="font-medium text-sm pt-3">
                  start your own business
                </p>
                <p className=" font-bold pt-3">
                  USD 16.00/<span className="font-medium text-sm">mo</span>{" "}
                </p>
                <button className="bggreen text-white font-bold text-sm bgg  p-2 mt-2 rounded ">
                  Buy Now
                </button>
                <div className=" mt-12">
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">Unlimited warehouse.</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">Unlimited shops.</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">Unlimited logging.</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">
                      Unlimited user management.
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">
                      Unlimited user logins including you.
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">
                      Only 2 guest users are allowed.{" "}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">24hours support.</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">
                      {" "}
                      Custom user interface.
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">
                      Organization domain name to access application.
                    </p>
                  </div>
                </div>
                <button className="bggreen text-white  px-2 py-1 mt-12 rounded">
                  Start Free Trial
                </button>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="border border-slate-400 flex flex-col p-4 pt-0 justify-start items-start">
                <h2 className="font-semibold text-3xl pt-9">Local</h2>
                <p className="font-medium text-sm pt-3">
                  start your own business
                </p>
                <p className=" font-bold pt-3">
                  USD 16.00/<span className="font-medium text-sm">mo</span>{" "}
                </p>
                <button className="bggreen text-white font-bold text-sm bgg  p-2 mt-2 rounded ">
                  Buy Now
                </button>
                <div className=" mt-12">
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">3 warehouses. </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">4 shops.</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">Advanced logging.</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">15 user management.</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">
                      Only 4 users can login plus you.
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">
                      Support yearly subscriptions only.
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">No automatic backups.</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">
                      Works only on client servers.
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">24hours support.</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src={check} alt="mark" />
                    <p className="font-medium text-sm">Coming soon.</p>
                  </div>
                </div>
                <button className="bggreen text-white  px-2 py-1 mt-12 rounded">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Features;
