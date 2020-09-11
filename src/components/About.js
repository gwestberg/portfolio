import React, { Component } from 'react';
import {Fade} from 'react-awesome-reveal';
// import Collapsible from 'react-collapsible';
import './css/About.css'
import profilePic from '../assets/realprofilepic.jpg'


export default class About extends Component {
    render() {
        return (
            <div className="column">
                <Fade direction="left" duration="2000" triggerOnce="true" cascade>
                    <div className="row row-wrap" id="About">
                        <div className="col-lg-5 mb-4 sm-4" id="profileImage">
                            <img className="" src={profilePic} alt="Profile"></img>
                        </div>
                        <div id="profileText" className=" col-lg-6 col-mb-8 col-sm-12">
                            <h1 className="text-center about-title">About Me</h1>
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
                        <div className="tech-list" >
                            {/* <h4 className="list-header">Skills</h4> */}
                            <ul className="horizontal" >
                                <li title="Beginner/Intermediate">C#</li>
                                <li title="Beginner/Intermediate">MSSQL</li>
                                <li title="Beginner/Intermediate">ASP.Net</li>
                                <li title="Beginner">Entity Framework</li>
                                <li title="Beginner/Intermediate">VanillaJS</li>
                                <li title="Beginner/Intermediate">React</li>
                                <li title="Beginner">Express</li>
                                <li title="Beginner/Intermediate">Node</li>
                                <li title="Beginner">xUnit</li>
                                <li title="Just Started Learning">Angular</li>
                                <li title="On my TODO-list">( MongoDB <span>*</span> )</li>
                            </ul>
                            {/* <p className="small-text">hover over the skill to see my current status</p> */}
                        </div>
                        {/* <div className="row">
                            <div className="col-lg-6 col-sm-6 mb-8">
                                <Collapsible triggerStyle={{ cursor: "pointer", padding: 1 + "%" + + "%" + 0 + "%" + 0 + "%" }} trigger={<h3 className="card-title collapse-title ">Experiences</h3>}>
                                    <div className="collapsible-content">
                                        <h6 className="card-title">LIA - Centiro</h6>
                                        <p className="card-text boxText">My first experience in a real software company, 4 weeks during my education just to give us a taste of what's ahead</p>
                                    </div>
                                    <div className="collapsible-content">
                                        <h6 className="card-title">LIA - Centiro</h6>
                                        <p className="card-text boxText">My first experience in a real software company, 4 weeks during my education just to give us a taste of what's ahead</p>
                                    </div>
                                </Collapsible>
                            </div>
                            <div className="col-lg-6 col-sm-6 mb-8">
                                <Collapsible triggerStyle={{ cursor: "pointer", padding: 1 + "%" + 0 + "%" + 0 + "%" + 0 + "%" }} trigger={<h3 className="card-title collapse-title">Education</h3>}>
                                    <p className="card-text boxText">Relevant education...</p>
                                </Collapsible>
                            </div>
                        </div> */}
                        <hr className="d-sm-none" />
                    </div>
                </Fade>
            </div>
        )
    }
}