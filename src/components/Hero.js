import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <div>
        <div className="px-2 py-6 lg:mx-16 flex flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/3 my-auto lg:py-10">
            <p className="text-blue-900 text-3xl sm:tex-4xl md:text-4xl font-semibold line-height-sm">The #1 software development tool used by agile teams</p>
            <button className="mt-6 px-3 py-2 rounded-sm text-white bg-blue-600 hover:bg-blue-800 text-center">Get it free</button>
          </div>

          <div className="px-2 py-6 w-full sm:w-1/2 md:w-2/3">
            <img src={process.env.PUBLIC_URL + '/images/hero.png'} alt=""></img>
          </div>
        </div>
        <div className="my-10 md:mx-16 lg:mx-32">
          <div className="text-blue-900 font-semibold text-2xl md:text-3xl text-center">
            <div>The best software teams ship early and often.</div>
          </div>
          <div className="mt-2 text-blue-800 text-lg md:text-xl w-full">
            <div className="mx-auto lg:max-w-xl text-center"> Jira Software is built for every member of your software team to plan, track and release great software.</div>
          </div>
        </div>
      </div>
    );
  }
}