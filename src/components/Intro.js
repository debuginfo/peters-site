import React from "react";
import { Link } from "gatsby";

export default class Intro extends React.Component {
    render() {
        return (
            <div className="intro__container">
                <div className="intro">
                    <p>Hello 👋  I'm Peter. I'm a Developer based in England, UK. I love all things live on the internet, be it websites, back-end services, or anything inbetween. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
                    <p>I currently work at <a 
                         className="intro__link-highlight"
                         href="https://tui.co.uk"
                        >
                        TUI
                        </a> ✈️ where we are building travel websites to help thousands of people book dreamy holidays in the sun 🌞.</p>
                </div>
            </div>
        )
    }
}