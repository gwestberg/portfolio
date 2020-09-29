import React, { Component } from 'react';
import { Fade } from 'react-awesome-reveal';
import Collapsible from 'react-collapsible';
import './css/About.css'
import profilePic from '../assets/realprofilepic.jpg'


export default class About extends Component {
    render() {
        return (
            <div className="column">
                <Fade  duration="2500" triggerOnce="true" >
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
                                And that is what I am after, that same creative energy that drives you to create awesome content for people, whether it's a new webservice or a website ;) .
                            </p>
                            {/* Make this dynamic */}
                            <div className="row">
                                <div class="dropdown">
                                    <button class="dropbtn">C#</button>
                                    <div className="row">
                                    <div class="dropdown-content">
                                        <p>.Net</p>
                                        <p>ASP.Net</p>
                                        <p>Enitity FrameWork</p>
                                        <div className="dropdown-text">
                                            <p>
                                            This is the base of my skillset, building API:s and general infrastructure in C# is 
                                            what I started with and is my programming foundation. 
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button className="dropbtn">JavaScript</button>
                                    <div class="dropdown-content">
                                        <p>Node</p>
                                        <p>VanillaJS</p>
                                        <p>ReactJS</p>
                                        <p>ExpressJS</p>
                                        <p>Angular</p>
                                        <p>TypeScript</p>
                                        <div className="dropdown-text">
                                            <p>
                                                React is alot of fun working with, mainly because it's so easy. This is what I turn to when I want to relax my mind a little.
                                                <br/>
                                                I have just started messing around with Angular and TypeScript, I have basic knowledge about them.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button className="dropbtn">Database</button>
                                    <div class="dropdown-content">
                                        <p>MSSQL</p>
                                        <p>SQLite</p>
                                        <div className="dropdown-text">
                                            <p>
                                                Procedural programming is something I really enjoy but haven't had the opportunity to
                                                develop more than the basic commands atm.
                                                <br/>
                                                MongoDB and MySQL is on my "To-Do"-list.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button className="dropbtn">Mobile</button>
                                    <div class="dropdown-content">
                                        <p>Xamarin</p>
                                        <p>ReactNative</p>
                                        <div className="dropdown-text">
                                            <p>
                                                Xamarin is my newest skill and the one that I'm working with atm, I only have basic knowledge in ReactNative atm.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button className="dropbtn">Other</button>
                                    <div class="dropdown-content">
                                        <p>HTML</p>
                                        <p>CSS</p>
                                        <p>JSON</p>
                                        <p>XML</p>
                                        <p>xUnit</p>
                                        <p>Moq</p>
                                        <div className="dropdown-text">
                                            <p>
                                                This is the rest of the stuff I have worked with.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -------- */}
                </Fade>
            </div>
        )
    }
}