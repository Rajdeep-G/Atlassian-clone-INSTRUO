import React, { Component } from 'react';

export default class Features extends Component {
    render() {
        return (
            <div class="text-blue-800 z-0">
                <div class="container px-5 py-24 mx-auto">
                    <div
                        class="flex flex-wrap w-full mb-20 flex-col items-center text-center"
                    >
                        <h1 class="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-800">
                            Go agile with ease
                        </h1>
                        <p class="lg:w-1/2 w-full text-xl text-gray-700">
                            Whether you’re a seasoned agile expert, or just getting started, Jira
                            Software unlocks the power of agile.
                         </p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class=" p-6 rounded-lg hover:shadow-lg transition duration-300 cursor-default">
                                <div
                                    class="w-10 h-10 inline-flex items-center justify-center rounded-full text-blue-500 mb-4"
                                >
                                    <img
                                        src={process.env.PUBLIC_URL + '/images/f1.svg'}
                                        alt="image"
                                        srcset=""
                                    />
                                </div>
                                <h2 class="text-2xl text-gray-800 font-semibold title-font mb-2">
                                    Flexible planning
                                </h2>
                                <p class="text-gray-800">
                                    Scrum? Check. Kanban? Check. Mixed methodology? Check. Jira
                                    Software’s rich planning features enable your team to flexibly
                                    plan in a way that works best for them.
                                </p>
                            </div>
                        </div>
                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class=" p-6 rounded-lg hover:shadow-lg transition duration-300 cursor-default">
                                <div
                                    class="w-10 h-10 inline-flex items-center justify-center rounded-full text-blue-500 mb-4">
                                    <img
                                        src={process.env.PUBLIC_URL + '/images/f2.svg'}
                                        alt="image"
                                        srcset=""
                                    />
                                </div>
                                <h2 class="text-2xl text-gray-800 font-semibold title-font mb-2">
                                    Accurate estimations
                                </h2>
                                <p class="text-gray-800">
                                    Estimations help your team become more accurate and efficient. Use story points, hours, t-shirt sizes, or your own estimation technique. Jira Software supports them all.
                                </p>
                            </div>
                        </div>
                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class=" p-6 rounded-lg hover:shadow-lg transition duration-300 cursor-default">
                                <div
                                    class="w-10 h-10 inline-flex items-center justify-center rounded-full text-blue-500 mb-4">
                                    <img
                                        src={process.env.PUBLIC_URL + '/images/f3.svg'}
                                        alt="image"
                                        srcset=""
                                    />
                                </div>
                                <h2 class="text-2xl text-gray-800 font-semibold title-font mb-2">
                                    Value-driven prioritization
                                </h2>
                                <p class="text-gray-800">
                                    Order user stories, issues, and bugs in your product backlog with simple drag and drop prioritization. Ensure stories that deliver the most customer value are always at the top.
                                </p>
                            </div>
                        </div>
                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class=" p-6 rounded-lg hover:shadow-lg transition duration-300 cursor-default">
                                <div
                                    class="w-10 h-10 inline-flex items-center justify-center rounded-full text-blue-500 mb-4"
                                >
                                    <img
                                        src={process.env.PUBLIC_URL + '/images/f4.svg'}
                                        alt="image"
                                        srcset=""
                                    />
                                </div>
                                <h2 class="text-2xl text-gray-800 font-semibold title-font mb-2">
                                    Transparent execution
                                </h2>
                                <p class="text-gray-800">
                                    Whether your team is across the table or around the world, Jira Software brings a new level of transparency to your team's work and keeps everyone on the same page.
                                </p>
                            </div>
                        </div>
                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class=" p-6 rounded-lg hover:shadow-lg transition duration-300 cursor-default">
                                <div
                                    class="w-10 h-10 inline-flex items-center justify-center rounded-full text-blue-500 mb-4"
                                >
                                    <img
                                        src={process.env.PUBLIC_URL + '/images/f5.svg'}
                                        alt="image"
                                        srcset=""
                                    />
                                </div>
                                <h2 class="text-2xl text-gray-800 font-semibold title-font mb-2">
                                    Actionable results
                                </h2>
                                <p class="text-gray-800">
                                    Extensive reporting functionality gives your team critical insight into their agile process. Backed by data, retrospectives are more data-driven and actionable than ever before.
                                </p>
                            </div>
                        </div>
                        <div class="xl:w-1/3 md:w-1/2 p-4">
                            <div class=" p-6 rounded-lg hover:shadow-lg transition duration-300 cursor-default">
                                <div
                                    class="w-10 h-10 inline-flex items-center justify-center rounded-full text-blue-500 mb-4"
                                >
                                    <img
                                        src={process.env.PUBLIC_URL + '/images/f6.svg'}
                                        alt="image"
                                        srcset=""
                                    />
                                </div>
                                <h2 class="text-2xl text-gray-800 font-semibold title-font mb-2">
                                    Scalable evolution
                                </h2>
                                <p class="text-gray-800">
                                    Add and change issue types, fields, and workflows as your team evolves. Jira Software is agile project management designed for teams of every shape and size.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}