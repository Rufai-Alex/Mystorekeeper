import React from "react";

function Faq() {
  return (
    <div>
      <div className="w-full md:w-3/5 mx-auto p-8">
        <h2 className="self-center mb-6 lg:text-5xl font-bold text-black text-center text-2xl ">
          FAQS
        </h2>
        <div className="shadow-md">
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-single-one"
              type="radio"
              name="tabs2"
            />
            <label
              className="block p-5 leading-normal cursor-pointer"
              for="tab-single-one"
            >
              Can I use mystorekeeper offline?
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">Ans: Yes we have an offline offering.</p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-single-two"
              type="radio"
              name="tabs2"
            />
            <label
              className="block p-5 leading-normal cursor-pointer"
              for="tab-single-two"
            >
              Do I get support using the offline version?
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">
                Ans: Yes you get 24hours support from our team.
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-single-three"
              type="radio"
              name="tabs2"
            />
            <label
              className="block p-5 leading-normal cursor-pointer"
              for="tab-single-three"
            >
              Do I get automatic backup using the offline version?
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">
                Ans: we don’t support backups to the cloud. You are responsible
                for the life cycle of your data.
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-single-four"
              type="radio"
              name="tabs2"
            />
            <label
              className="block p-5 leading-normal cursor-pointer"
              for="tab-single-four"
            >
              Do prices change?
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">
                Ans: Pricing may change based on the total quantity of data in
                our database.
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-single-five"
              type="radio"
              name="tabs2"
            />
            <label
              className="block p-5 leading-normal cursor-pointer"
              for="tab-single-five"
            >
              Do I get access to new features as a basic subscriber?
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">
                Ans: Yes all new features are available for each subscription
                but are limited based on the subscription type.
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-single-six"
              type="radio"
              name="tabs2"
            />
            <label
              className="block p-5 leading-normal cursor-pointer"
              for="tab-single-six"
            >
              Can I request for a feature?
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">
                Ans: Yes you can request for a feature in our request feature
                section.
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-single-seven"
              type="radio"
              name="tabs2"
            />
            <label
              className="block p-5 leading-normal cursor-pointer"
              for="tab-single-seven"
            >
              How long does it take after I successfully request for a feature?
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">
                Ans: It depends on the type of feature you requested but it
                takes a minimum of one month.
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-single-seven"
              type="radio"
              name="tabs2"
            />
            <label
              className="block p-5 leading-normal cursor-pointer"
              for="tab-single-seven"
            >
              How long does it take after I successfully request for a feature?
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">
                Ans: It depends on the type of feature you requested but it
                takes a minimum of one month.
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-single-8"
              type="radio"
              name="tabs2"
            />
            <label
              className="block p-5 leading-normal cursor-pointer"
              for="tab-single-8"
            >
              Can I have my own custom interface plus my own domain name?
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">
                Ans: Yes you can get your own custom domain name and user
                interface when you subscribe to the enterprise version.
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-single-9"
              type="radio"
              name="tabs2"
            />
            <label
              className="block p-5 leading-normal cursor-pointer"
              for="tab-single-9"
            >
              Can I downgrade my subscription?
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">
                Ans: No once subscribe, you can’t downgrade.
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-single-9"
              type="radio"
              name="tabs2"
            />
            <label
              className="block p-5 leading-normal cursor-pointer"
              for="tab-single-9"
            >
              Can I downgrade my subscription?
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">
                Ans: No once subscribe, you can’t downgrade.
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-single-10"
              type="radio"
              name="tabs2"
            />
            <label
              className="block p-5 leading-normal cursor-pointer"
              for="tab-single-10"
            >
              Can I cancel my subscription?
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">
                Ans: Yes, subscriptions can be canceled at any time.
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-single-11"
              type="radio"
              name="tabs2"
            />
            <label
              className="block p-5 leading-normal cursor-pointer"
              for="tab-single-11"
            >
              Can I use the app anywhere?
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">
                Ans: Yes you can use the app anytime and anywhere.
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-single-12"
              type="radio"
              name="tabs2"
            />
            <label
              className="block p-5 leading-normal cursor-pointer"
              for="tab-single-12"
            >
              Do I get automatic backups and reports?
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">Ans: Yes except the Local subscription.</p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-single-13"
              type="radio"
              name="tabs2"
            />
            <label
              className="block p-5 leading-normal cursor-pointer"
              for="tab-single-13"
            >
              Does the app take stock for me automatically?
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">
                Ans: Yes the app takes monthly stock and email the result to the
                user and can be checked also on the system but does not work
                with local subscription
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
