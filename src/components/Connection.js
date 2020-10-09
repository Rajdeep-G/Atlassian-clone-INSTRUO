import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

export class Connection extends Component {
  render() {
    return (
      <div className="text-blue-800">
        <div
          className="container mx-auto flex px-12 py-8 lg:py-24 flex-col md:flex-row items-center"
        >

          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center"
          >
            <h1
              className="title-font  text-2xl mb-4 font-bold"
            >
              Connect your team's work to your product roadmap
                        </h1>
            <p className="mb-8 text-xl">
              Ship faster and more reliably by building smarter plans for your team and for your organization.
                        </p>
            <button className="text-blue-700 border border-blue-700 px-3 py-2 hover:bg-gray-300 transition duration-300 rounded">
              Learn more about Roadmaps
                        </button>
          </div>
          <Zoom>
            <div className="lg:flex-grow md:w-1/2 mt-6 md:mt-0 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded shadow-2xl"
                alt="connections"
                src={process.env.PUBLIC_URL + '/images/connection.png'}
              />
            </div>
          </Zoom>
        </div>
      </div>
    )
  }
}

export default Connection
