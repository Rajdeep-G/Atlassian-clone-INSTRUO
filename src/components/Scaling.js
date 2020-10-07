import React, { Component } from "react";

export default class Pricing extends Component {
  render() {
    return (
      <div>
        <div class="text-blue-900 px-8 md:px-16 lg:px-64 py-8 lg:py-16">
          <div class="text-center justify-center py-5">
            <div class="text-4xl font-medium">
              Designed for security and scale
            </div>
            <div class="text-xl md:mt-8 md:mx-32">
              Gain peace of mind with enterprise-grade solutions tailor-made to
              secure and scale Jira Software across your entire organization.
            </div>
          </div>
          <div class="md:mt-12 flex flex-wrap text-center">
            <div class="md:w-2/5 py-4 md:px-4 mb-4 md:mb-0 md:mx-auto">
              <img
                class="mb-3"
                src={process.env.PUBLIC_URL + '/images/scaling1.svg'}
                alt="image"
              ></img>
              <h3 class="text-4xl mb-3 text-justify font-medium">Atlassian Access</h3>
              <p class="leading-relaxed text-left">
                Sleep soundly with enhanced administration and security backed by SAML SSO, enforced 2-step verification, automated user provisioning, and more.
              </p>
              <div className="text-left md:mt-8 "><a className="cursor-pointer hover:underline text-blue-500 hover:text-blue-700">Learn More</a></div>
            </div>
            <div class="md:w-2/5 py-4 md:px-4 mb-4 md:mb-0 md:mx-auto">
              <img
                class="mb-3"
                src={process.env.PUBLIC_URL + '/images/scaling2.svg'}
                alt="image"
              ></img>
              <h3 class="text-4xl mb-3 text-left font-medium">Jira Software Premium</h3>
              <p class="leading-relaxed text-justify">
                Ensure your team and organization are ready to scale with 99.9% uptime SLAs, unlimited storage, 24x7 Premium Support, and more.
              </p>
              <div className="text-left md:mt-8 "><a className="cursor-pointer hover:underline text-blue-500 hover:text-blue-700">Learn More</a></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
