import React, { Component } from 'react';
// import Collapsible from 'react-collapsible';
import './css/About.css'
import profilePic from '../assets/realprofilepic.jpg'


export default class About extends Component {
    render() {
        return (
            <div className="column">
                <div className="row row-wrap justify-content-evenly" id="About">
                    <div className="col-lg-5 mb-8" id="profileImage">
                        <img src={profilePic} alt="Profile"></img>
                    </div>
                    <div id="profileText" className=" col-lg-6 mb-2">
                <h2 className="text-center about-title">About Me</h2>
                        <p>
                            A tad late in the game, wanted to be a Chef first.
                            The interest began when I got my first computer at 10 years old and I meddled with basic HTML and CSS when the blog-era began,
                            I even managed to earn a few bucks designing a couple of blogs but my love for cooking won the first battle.
                        </p>
                        <p>
                            The jump from food to code is not as far as one might think,
                            we still follow recipies and experiment with ingredients and flavours to present a product that brings joy to our clients.
                        </p>
                        <p>
                            And that is what I am after, that same creative energy that drives you to create awesome content for people.
                        </p>
                    </div>
                    <div className="tech-list">
                            <h4 className="list-header">Techskills</h4>
                            <ul className="horizontal">
                                <li>C#</li>
                                <li>SQL</li>
                                <li>ASP.NET</li>
                                <li>Entity FrameWork</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Express</li>
                                <li>Node</li>
                            </ul>
                        </div>
                    <section>
                        {/* <div>
                            <h3 className="list-header">Techskills</h3>
                            <ul class="horizontal">
                                <li>C#</li>
                                <li>SQL</li>
                                <li>ASP.NET</li>
                                <li>Entity FrameWork</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Express</li>
                                <li>Node</li>
                            </ul>
                        </div> */}
                                        
                    {/* <div className="row">
                    <div className="col-lg-6 col-sm-6 mb-8">
                            <Collapsible triggerStyle={{ cursor: "pointer", padding: 1 + "%" + 0 + "%" + 0 + "%" + 0 + "%" }} trigger={<h3 className="card-title collapse-title">Experiences</h3>}>
                                <p className="card-text boxText">Some of my experiences...</p>
                            </Collapsible>
                        </div>
                        <div className="col-lg-6 col-sm-6 mb-8">
                            <Collapsible triggerStyle={{ cursor: "pointer", padding: 1 + "%" + 0 + "%" + 0 + "%" + 0 + "%" }} trigger={<h3 className="card-title collapse-title">Education</h3>}>
                                <p className="card-text boxText">Relevant education...</p>
                            </Collapsible>
                        </div>
                    </div> */}
                    </section>
                    <hr className="d-sm-none" />
                </div>
            </div>
        )
    }
}