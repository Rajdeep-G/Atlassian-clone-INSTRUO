import React, { Component } from 'react'
import $ from 'jquery'
import { Link as ScrollLink } from 'react-scroll'

export default class Navbar extends Component {

    componentDidMount() {
        $('.nav-icon').click(() => {
            const isOpen = $('.nav-icon').hasClass('open');
            if(isOpen){
                $('.nav-icon').addClass('nav-down');
                $('.nav-icon').removeClass('nav-up open');
            }else{
                $('.nav-icon').addClass('nav-up open');
                $('.nav-icon').removeClass('nav-down');
            }
            $('.dropdown').slideToggle("fast", "swing");
            // $('.nav-drop').hide("slow");
            // $('.nav-up').show("slow");
        });
        $('.nav-up').click(() => {
            $('.dropdown').slideToggle("fast", "swing");
            $('.nav-drop').show("slow");
            $('.nav-up').hide("slow");
        });

        

        $(window).scroll(function () {
            if ($(window).scrollTop() > 15) {
                $('.navbar').addClass('shadow-md');
                $('.get-button').addClass('bg-blue-700');
                $('.get-button').removeClass('text-blue-700');
                $('.get-button').addClass('text-white');
            } else {
                $('.navbar').removeClass('shadow-md');
                $('.get-button').removeClass('bg-blue-700');
                $('.get-button').addClass('text-blue-700');
                $('.get-button').removeClass('text-white');
            }
        });
    }

    render() {
        return (
            <div className='navbar w-full sticky h-16 top-0 flex text-3x bg-white z-40 transition duration-300'>
                <div className='w-full flex mx-2  xl:mx-24'>
                    <div className='flex w-3/5'>
                        <div className='font-sans text-gray-800 font-normal pt-4 flex'>
                            <ScrollLink to='Hero' spy={true} smooth={true} duration={500}>
                                <img
                                    // src="https://wac-cdn.atlassian.com/dam/jcr:e348b562-4152-4cdc-8a55-3d297e509cc8/Jira%20Software-blue.svg?cdnVersion=1280"
                                    src={process.env.PUBLIC_URL + '/images/navbar.svg'}
                                    alt="image"
                                    className="mt-4 h-5 cursor-pointer"
                                />
                            </ScrollLink>
                            <span className='nav-icon nav-down h-5 w-5 lg:hidden cursor-pointer mt-4 ml-2 text-3xl text-blue-700'>
                                <img className="object-contain" src={process.env.PUBLIC_URL+'/images/up-arrow.svg'} alt="up arrow"></img>
                            </span>
                        </div>
                        <div className='dropdown z-0 hidden w-full absolute -ml-2 lg:ml-0 bg-white shadow-md lg:shadow-none mt-16 lg:mt-0 lg:relative lg:w-auto lg:flex'>
                            <div className='xl:ml-4 flex cursor-pointer transition duration-300  border-b-4 border-white hover:border-gray-400 font-sans text-lg items-end text-blue-800 font-medium px-3 py-1'>
                                <ScrollLink to="Features" spy={true} smooth={true} duration={500}>Features</ScrollLink>
                            </div>
                            <div className='flex transition cursor-pointer duration-300  border-b-4 border-white hover:border-gray-400 font-sans text-lg items-end text-blue-800 font-medium px-3 py-1'>
                                Product Guide
                            </div>
                            <div className='flex transition cursor-pointer duration-300  border-b-4 border-white hover:border-gray-400 font-sans text-lg items-end text-blue-800 font-medium px-3 py-1'>
                                <ScrollLink to="Pricing" spy={true} smooth={true} duration={500}>Pricing</ScrollLink>
                            </div>
                            <div className='flex transition cursor-pointer duration-300  border-b-4 border-white hover:border-gray-400 font-sans text-lg items-end text-blue-800 font-medium px-3 py-1'>
                                Enterprise
                            </div>
                        </div>
                    </div>
                    <div className='flex w-2/5 items-center justify-end'>
                        <button className="get-button flex transition duration-300 justify-center h-8 items-center bg-transparent hover:bg-blue-700 text-sm text-blue-700 font-semibold hover:text-white py-1 px-3 border border-blue-700 hover:border-transparent rounded">
                            Get it free
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}