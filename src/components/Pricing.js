import React, { Component } from "react";

export default class Pricing extends Component {
  render() {
    return (
      <div>

        <div className="transform rotate-180 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 68" enable-background="new 0 0 1440 68"><path d="m1622.3 1937.7c0 0-410.7 169.1-913.4 75.5-502.7-93.6-977.7 56.3-977.7 56.3v440h1891.1v-571.8" fill="#F4F5F7" transform="translate(0-1977)"></path></svg>
        </div>
        <div className="text-blue-800 py-8 px-16 lg:px-56 md:px-8 ">
          <div className="text-3xl text-center mb-8 font-medium">
            Simple plans hosted in the cloud
          </div>
          <div className="md:mt-12 grid grid-cols-1 md:grid-cols-3 text-center gap-0 md:gap-4  lg:gap-8">
            <div className="hover:shadow-xl transform hover:scale-105 shadow-md duration-300 transition ease-in mb-4 md:mb-0 border rounded-md">
              <div className="text-3xl font-medium bg-gray-200 p-3">Free</div>
              <div className="text-5xl font-heading font-semibold">USD 0</div>
              <div classNameName="text-md">per user/month</div>
              <div className="text-sm">Upto 10 users</div>
              <a
                className="inline-block py-4 my-8 px-8 leading-none text-white bg-blue-700 hover:bg-blue-800 rounded shadow"
                href="#"
              >
                Get started
              </a>
              <div className="text-gray-700 py-5 text-xl">
                <p>Free forever</p>
                <p>No obligation</p>
              </div>
            </div>
            <div className=" w-full hover:shadow-xl transform hover:scale-105 duration-300 transition ease-in shadow-md mb-4 md:mb-0 border rounded-md">
              <div className="text-3xl font-medium  p-3 border-b border-gray-200">Standard</div>
              <div className="text-5xl font-semibold font-heading">
                USD 7
                </div>
              <div classNameName="text-md">per user/month</div>
              <div className="text-sm">1-100 users</div>

              <a
                className="border border-blue-600 inline-block py-4 my-8 px-8 leading-none text-blue-600 bg-white-100 hover:bg-gray-300 rounded shadow"
                href="#"
              >
                Start Trial
              </a>
              <div className="text-gray-700 py-5 text-xl">
                <p>Free for 7 days</p>
                <p>No credit card needed</p>
              </div>
            </div>
            <div className=" hover:shadow-xl transform hover:scale-105 duration-300 transition ease-in shadow-md mb-4 md:mb-0 border rounded-md">
              <div className="text-3xl font-medium p-3 border-b border-gray-200">Premium</div>
              <div className="text-5xl font-heading font-semibold">
                USD 14</div>
              <div classNameName="text-md">per user/month</div>

              <div className="text-sm">1-100 users</div>
              <a
                className="inline-block py-4 my-8 px-8 border border-blue-600 leading-none text-blue-600 bg-white-100 hover:bg-gray-300 rounded shadow"
                href="#"
              >
                Start Trial
              </a>
              <div className="text-gray-700 py-5 text-xl">
                <p>Free for 7 days</p>
                <p>No credit card needed</p>
                <a className="text-blue-600" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-blue-800">
          <div className=" lg:mx-56 mx-8 shadow-md w-full border text-center text-xl px-6 py-8">
            <span className="font-bold">101+ users?</span>   We offer discounts for large teams! Calculate your price
            </div>
        </div>
        <div className="mt-8 flex justify-center text-blue-800">
          <a className="text-blue-700 hover:underline" href="#">
            Want to host on your own server?
              </a>
        </div>
        <div className="mt-16 mx-auto border-b-2 max-w-lg"></div>
      </div>
    );
  }
}
