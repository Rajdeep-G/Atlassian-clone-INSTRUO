import React, { Component } from 'react'

export class Blog extends Component {
    render() {
        return (
            <div className="motion-safe:animate-fadeIn text-blue-900 mx-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="my-auto">
                        <img className="shadow-2xl rounded-md" src={process.env.PUBLIC_URL + '/images/blog.png'}></img>
                    </div>
                    <div className="my-auto">
                        <div className="py-2">
                            <div className="text-2xl font-bold">
                                Plan
                            </div>
                            <div className="text-xl">
                                Create user stories and issues, plan sprints, and distribute tasks across your software team.
                            </div>
                        </div>
                        <div className="py-2">
                            <div className="text-2xl font-bold">
                                Track
                            </div>
                            <div className="text-xl">
                                Prioritize and discuss your team’s work in full context with complete visibility.
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Blog
