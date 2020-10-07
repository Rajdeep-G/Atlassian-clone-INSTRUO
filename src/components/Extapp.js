import React, { Component } from "react";

export class Extapp extends Component {
  render() {
    return (
      <div>
        <div className="text-blue-800 body-font">
          <div className='w-full lg:px-12 flex justify-center'>
            <div className="flex justify-center py-8 lg:py-24 md:flex-row flex-col items-center sm:px-0">
              <div className=" lg:w-1/3 md:w-1/3 w-5/6 mb-10 md:mb-0 flex justify-center">
                <img
                  className="h-40 w-40 object-cover object-center rounded"
                  alt="hero"
                  src={process.env.PUBLIC_URL + '/images/jiraex.png'}
                />
              </div>
              <div className=" lg:flex-grow lg:w-1/3 md:w-2/3  mr-4 lg:mr-32 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-xl mb-4 font-bold text-gray-90">
                  Extend Jira Software with apps
              </h1>
                <p className="mb-4 leading-relaxed text-xl">
                  Tempo Timesheets, Zephyr, and over 3,000 other apps ensure Jira
                  Software can be custom tailored to fit any and every use case.
              </p>
                <div className="text-left">
                  <a className="cursor-pointer hover:underline text-blue-500 hover:text-blue-700">
                    Explore apps on Atlasian Marketplace
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="display-apps w-full">
          <img src={process.env.PUBLIC_URL + '/images/app.svg'}></img>
        </div>
      </div>
    );
  }
}

export default Extapp;
