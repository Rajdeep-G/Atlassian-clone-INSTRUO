import React, { Component } from 'react'

export class Integrations extends Component {
    render() {
        return (
            <div className="text-blue-800">
                <div className="py-12 px-8 lg:px-32 text-center">
                    <div className="pb-8">
                        <h2 className="text-3xl font-bold pb-4">
                            Integrate with the tools you already use
                        </h2>
                        <h4 className="pb-8 text-xl">
                            Upgrade your workflow with Confluence, Bitbucket, and hundreds of
                            other developer tools.
                        </h4>
                    </div>
                    <div className="flex flex-wrap items-center justify-center mb-12 w-full">
                        <div className="lg:w-1/3 px-8 mb-8 lg:mb-0">
                            <img
                                className="mx-auto h-24"
                                src={process.env.PUBLIC_URL + '/images/int1.svg'}
                                alt="image"
                            />
                            <h3 className="text-2xl mt-6 mb-3 text-left font-bold">Knowledge management</h3>
                            <p className="text-gray-800 leading-relaxed text-md text-left font-medium">
                                Transform product requirements in Confluence into a Jira Software backlog with one click.
                            </p>
                            <div className="md:mt-8 text-left"><a className="cursor-pointer hover:underline text-blue-500 hover:text-blue-700">Learn more about Confluence</a></div>

                        </div>
                        <div className="lg:w-1/3 px-8 mb-8 lg:mb-0">
                            <img
                                className="mx-auto h-24"
                                src={process.env.PUBLIC_URL + '/images/int2.svg'}
                                alt="image"
                            />
                            <h3 className="text-2xl mt-6 mb-3 text-left font-bold">Development workflow</h3>
                            <p className="text-gray-800 leading-relaxed text-md text-left font-medium">
                                Jira Software automatically updates issues and transitions work when code is committed in Bitbucket.
                            </p>
                            <div className=" md:mt-8 text-left"><a className="cursor-pointer hover:underline text-blue-500 hover:text-blue-700">Learn more about Bitbucket</a></div>

                        </div>
                        <div className="lg:w-1/3 px-8 mb-8 lg:mb-0">
                            <img
                                className="mx-auto h-24"
                                src={process.env.PUBLIC_URL + '/images/int3.svg'}
                                alt="image"
                            />
                            <h3 className="text-2xl mt-6 text-left mb-3 font-bold">
                                Continuous integration and deployment
                            </h3>
                            <p className="text-gray-800 leading-relaxed text-md text-left font-medium">
                                Supercharge your CI/CD with Pipelines and monitor build status from within Jira Software.
                            </p>
                            <div className="md:mt-8 text-left"><a className="cursor-pointer hover:underline text-blue-500 hover:text-blue-700">Learn more about Pipelines</a></div>

                        </div>
                    </div>
                    <div className="mx-auto max-w-2xl border-b-2"></div>
                </div>


            </div>
        )
    }
}

export default Integrations
