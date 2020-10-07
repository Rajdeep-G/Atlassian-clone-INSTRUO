import React, { Component } from 'react'

export class Security extends Component {
    render() {
        return (
            <div>
                <div className="text-blue-800">
                    <div class="py-12 px-8 lg:px-32 text-center">
                        <div class="flex flex-wrap items-center justify-center -mx-8 mb-12">
                            <div class="lg:w-1/3 px-8 mb-8 lg:mb-0">
                                <img
                                    class="mx-auto"
                                    src={process.env.PUBLIC_URL + '/images/sec1.png'}
                                    alt="image"
                                />
                                <h3 class="text-2xl mt-6 mb-3 font-bold">Privacy</h3>
                                <p class="text-gray-800 leading-relaxed text-lg">
                                    Jira Software invested in <a className="hover:underline text-blue-600 cursor-pointer">GDPR and Privacy Shield</a> to ensure all data is handled with care.
                                </p>
                            </div>
                            <div class="lg:w-1/3 px-8 mb-8 lg:mb-0">
                                <img
                                    class="mx-auto"
                                    src={process.env.PUBLIC_URL + '/images/sec2.png'}
                                    alt="image"
                                />
                                <h3 class="text-2xl mt-6 mb-3 font-bold">Data Encryption</h3>
                                <p class="text-gray-800 leading-relaxed text-lg">
                                    Jira Software leverages <a className="hover:underline text-blue-600 cursor-pointer">encryption in transit and at rest</a> to
                                    safeguard your organization's data.
                                </p>
                            </div>
                            <div class="lg:w-1/3 px-8 mb-8 lg:mb-0">
                                <img
                                    class="mx-auto"
                                    src={process.env.PUBLIC_URL + '/images/sec3.png'}
                                    alt="image"
                                />
                                <h3 class="text-2xl mt-6 mb-3 font-bold">Compliance</h3>
                                <p class="text-gray-800 leading-relaxed text-lg">
                                    Verify Jira Software's security with <a className="hover:underline text-blue-600 cursor-pointer">SOC2, SOC3, ISO 27001, ISO
                                    27018, PCI DSS, and more.</a>
                                </p>
                            </div>
                        </div>
                        <div class="border-b-2"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Security
