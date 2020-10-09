import React, { Component } from 'react'

export class Workflow extends Component {
    render() {
        return (
            <div>
                <div className="text-blue-800 py-8 px-8 lg:px-64 flex flex-col mx-auto w-full">
                    <div className="flex flex-wrap -mx-2 md:content-between">
                        <div className="lg:w-1/2 px-2 mb-6 lg:mb-0 text-center md:text-left">
                            <div className="text-3xl font-bold">
                                Choose a workflow, or make your own
                            </div>
                        </div>
                        <div className="lg:w-1/2 px-2 text-xl">
                            <p className="">
                                Every team has a unique process for shipping software. Use an
                                out-of-the-box workflow, or create one to match the way your team
                                works.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center">
                    <img className='md:w-2/3 w-4/5 object-contain' src={process.env.PUBLIC_URL + '/images/workflow.png'} alt="image" ></img>
                </div>
            </div>
        )
    }
}

export default Workflow
