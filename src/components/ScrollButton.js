import React, { Component } from 'react';
import $ from 'jquery';
import { Link as ScrollLink } from 'react-scroll'

export default class ScrollButton extends Component {

    componentDidMount() {
        $(window).scroll(() => {
            if ($(window).scrollTop() > 40) {
                $(".arrow-div").show("fast", "swing");
            }
            else {
                $(".arrow-div").hide("fast", "swing");
            }
        });

    }

    render() {
        return (
            <div className='arrow-div hidden'>
                <div className='fixed p-5 bottom-0 right-0'>
                    <ScrollLink to='Top' spy={true} smooth={true} duration={700}>
                        <div className='arrow bg-blue-700 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer hover:shadow-md'>
                            <div className='flex text-white'>&#8593;</div>
                        </div>
                    </ScrollLink>
                </div>
            </div>
        )
    }
}