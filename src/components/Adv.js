import React, { Component } from "react";

export default class Adv extends Component {
    render() {
        return (
            <div className="greyish-bg pb-6">
                <div class="text-gray-700 body-font greyish-bg px-8 md:px-16 lg:px-56 py-5 border-b">
                    <div class="flex flex-col items-center text-center bg-white py-8 lg:py-8 rounded-lg">
                        <img
                            src={process.env.PUBLIC_URL + '/images/arrow.svg'}
                            className="justify-center h-16 w-16  "
                        ></img>
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium md:mt-4 text-gray-900">
                            Move work forward from anywhere
                        </h1>
                        <p class="mb-8 md:mx-auto mx-w-md leading-relaxed justify-center text-xl">
                            Track and manage projects in real time from the convenience of
                            your favorite device with Jira mobile.
                        </p>
                        <div class="flex flex-col">
                            <button class="inline-flex rounded-lg items-center sm:mt-6 md:ml-0 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-300 focus:outline-none">
                                <img
                                    src={process.env.PUBLIC_URL + '/images/apps.svg'}
                                    alt="image"
                                    srcset=""
                                ></img>
                            </button>
                            <button class="inline-flex rounded-lg items-center hover:bg-gray-300 mt-8 focus:outline-none">
                                <img
                                    src={process.env.PUBLIC_URL + '/images/gp.svg'}
                                    alt="image"
                                ></img>
                            </button>
                        </div>
                    </div>

                    <div className="container mt-8  mx-auto bg-white grid grid-cols-1 lg:grid-cols-2">
                        <div>
                            <img
                                className="object-cover h-auto"
                                src={process.env.PUBLIC_URL + '/images/trulia.png'}
                            ></img>
                        </div>
                        <div className="pl-8 flex flex-col">
                            <div>
                                <img
                                    className="object-contain h-20 w-20"
                                    src={process.env.PUBLIC_URL + '/images/trulialoc.svg'}
                                ></img>
                            </div>
                            <div className="text-2xl mt-3 px-2">
                                “Jira Software is instrumental in building and maintaining the
                                best software on the market.”
                            </div>
                            <div className="text-lg mt-4">DANIELE FARNEDI, TRULIA CTO</div>
                            <div className="text-left mt-8 mb-8">
                                <a className="cursor-pointer hover:underline text-blue-500 hover:text-blue-700">
                                    View their story
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 mb-4">
                        <img src={process.env.PUBLIC_URL + '/images/curveads.png'}></img>
                    </div>
                </div>
            </div>
        );
    }
}
