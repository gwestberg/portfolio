import React, { Component } from 'react';
import './css/About.css'
import profilePic from '../assets/realprofilepic.jpg'


export default class About extends Component {
    render() {
        return (
            <div className="column">
                        <h2 className="text-center about-title">About Me</h2>
                <div className="row row-wrap justify-content-evenly" id="About">
                    <div className="col-lg-4 mb-8" id="profileImage">
                        <img src={profilePic} alt="Profile"></img>
                    </div>
                    <div id="profileText" className=" col-lg-6 mb-2">

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
                    <hr className="d-sm-none" />
                </div>
                <section className="row justify-content-around">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="h-100">
                                <div className="card-body">
                                    <h3 className="card-title">Techskills</h3>
                                    <ul className="skill-cards">
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
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 mb-8">
                            <div className="h-100">
                                <div className="card-body">
                                    <h3 className="card-title">box of randomness</h3>
                                    <p className="card-text boxText">I have no idea what I want in this box... Do you have any idea? 
                                    I might want to be a somewhat long text or something like it so that it fills the whole avaliable box-space... otherwise the techskill-box moves and 
                                    I'm not in the right-headspace to deal with that right now...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}