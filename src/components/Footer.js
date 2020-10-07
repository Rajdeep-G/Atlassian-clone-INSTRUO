import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="bg-gray-200">
          <footer className="px-8 md:px-16 text-gray-700 body-font ">

            <div className=" px-5 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
              <div className="w-64 flex-shrink-0 lg:mx-8 md:mx-0 mx-auto text-center md:text-left">
                <a className="flex title-font font-bold uppercase items-center md:justify-start justify-center text-gray-900">
                  <img
                    src={process.env.PUBLIC_URL + '/images/footer.svg'}
                    alt="image"
                    className="w-32"
                  ></img>
                </a>
              </div>
              <div className="flex-grow flex flex-wrap  md:pl-0 md:mt-0 mt-10 md:text-left text-center md:mr-16">
                <div className="lg:w-1/4 md:w-1/2 w-full">
                  <h2 className="title-font font-bold uppercase text-gray-900 tracking-widest text-sm mb-3">
                    Products
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">
                        Jira Software
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">
                        Jira Align
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">
                        Jira Service Desk
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">
                        Confluence
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">Trello</a>
                    </li>
                    <li><a className="text-gray-600 hover:text-grey-800 hover:underline cursor-pointer">Bitbucket</a>
                    </li>

                    <li className="mt-5"><a className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer">View all products</a>
                    </li>

                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-bold uppercase text-gray-900 tracking-widest text-sm mb-3">
                    Resources
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">
                        Technical Support
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">
                        Purchasing and Licensing
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">
                        Atlassian Community
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">
                        Knowledge Base
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">
                        Marketplace
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">
                        My Account
                      </a>
                    </li>
                    <li className="mt-5"><a className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer">Create support ticket</a>
                    </li>
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-bold uppercase text-gray-900 tracking-widest text-sm mb-3">
                    Expand & Learn
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">Partners</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">Training & Certification</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">
                        Devloper Resources
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">Purchasing FAQ</a>
                    </li>
                    <li><a className="text-grey-600 hover:text-grey-800 hover:underline cursor-pointer">Enterprise Services</a>
                    </li>

                    <li className="mt-5"><a className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer" >View all products</a>
                    </li>
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-bold uppercase text-gray-900 tracking-widest text-sm mb-3">
                    About Atlassian
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">Company</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">Careers</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">Events</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">Blogs</a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">Investor Relations</a>
                    </li>
                    <li><a className="text-grey-600 hover:text-grey-800 hover:underline cursor-pointer">trust & Security</a>
                    </li>

                    <li className="mt-5"><a className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer">View all products</a>
                    </li>
                  </nav>
                </div>
              </div>
            </div>
            <div className="border-b-2 border-gray-400"></div>
            <div className="bg-gray-200">
              <div className="mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="ml-5 text-gray-500 text-sm text-center sm:text-left">
                  Languages
                </p>
                <div className="md:ml-20 flex flex-row">
                  <p className="ml-10 text-gray-500 text-sm text-center sm:text-left">Privacy policy</p>

                  <p className="ml-10 text-gray-500 text-sm text-center sm:text-left">Terms</p>
                  <p className="ml-10 text-gray-500 text-sm text-center sm:text-left">Copyright © 2020 Atlassian</p>
                </div>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                  <a className="text-gray-500" href="www.facebook.com">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500" href="www.twitter.com">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500" href="www.instagram.com">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500" href="www.linkedin.com">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="0"
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
