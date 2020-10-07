import React, { Component } from 'react'

export class Blog extends Component {
    render() {
        return (
            <div className="motion-safe:animate-fadeIn text-blue-900 mx-8 py-16">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 ">

                    <div className="order-last md:order-first my-auto">
                        <div className="py-2">
                            <div className="text-2xl font-bold">
                                Release
                                </div>
                            <div className="text-xl">
                                Ship with confidence and sanity knowing the information you have is always up-to-date.
                                </div>
                        </div>
                        <div className="py-2">
                            <div className="text-2xl font-bold">
                                Report
                                </div>
                            <div className="text-xl">
                                Improve team performance based on real-time, visual data that your team can put to use.
                                </div>
                        </div>
                    </div>
                    <div className="my-auto" >
                        <img className="shadow-2xl rounded-md" src={process.env.PUBLIC_URL + '/images/blog2.png'}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog
