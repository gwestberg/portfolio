import React, { Component } from 'react';
import './css/About.css'
import profilePic from '../assets/realprofilepic.jpg'


export default class About extends Component {
    render() {
        return (
            <div className="column">
                <div className="row row-wrap justify-content-evenly" id="About">
                    <div className="col-lg-4 mb-8" id="profileImage">
                        <img src={profilePic} alt="Profile"></img>
                    </div>
                    <div id="profileText" className=" col-lg-6 mb-2 text-center">
                        <h5>Hi, my name is Gabriella!</h5>
                        <p>I'm a software developer student @<a className="link" href="https://www.boras.se/utbildningochforskola/borasyrkeshogskola/utbildningar/systemutvecklarenet.4.3fde8c191684442015123edf.html" target="_blank" rel="noopener noreferrer">YHBORÅS</a></p>
                        <p>
                            A tad late in the game, wanted to be a kitchen-magician first.
                            The interest has been there since i got my first computer in -95 and I wondered what made it tick.
                            The gaming interest never left me though and i have spent far to many hours trying to perfect railways in various city-building games,
                            aswell as trying to coordinate people in more than one raid in a couple of MMO's.
                        </p>
                        <p>
                            The jump from food to code is not as far as one might think,
                            we still follow recipies and experiment with ingredients and flavours to present a product that satisfies our customers.
                        </p>
                        <p>
                            The magic that happens in the kitchen also happens when building applications and is the reason why I chose this path,
                            to be a part of the magic, another side of it but still the same.<br/> *insert "it's a kind of magic" by Queen*
                        </p>
                    </div>
                    <hr className="d-sm-none" />
                </div>
                <section className="row justify-content-around">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="h-100">
                                <div className="card-body">
                                    <h3 className="card-title">Frontend</h3>
                                    <ul className="skill-cards">
                                        <li>CSS</li>
                                        <li>HTML</li>
                                        <li>JSON</li>
                                        <li>Vanilla JS</li>
                                        <li>Bootstrap</li>
                                        <li>React</li>
                                        <li>Express</li>
                                        <li>Node.js</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="h-100">
                                <div className="card-body">
                                    <h3 className="card-title">Middleend</h3>
                                    <p className="card-text boxText">Because sometimes you need a middleground, a place where all your awesome skills collide. 
                                    Where the oil and the eggs turn into glorious mayonnaise ... </p>
                                    <p>This is not it tho ... this is just a random textbox. ;)</p>
                                    {/* <ul className="skill-cards">
                                        <li>C#</li>
                                        <li>SQL</li>
                                        <li>ASP.NET</li>
                                        <li>Bootstrap</li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="h-100">
                                <div className="card-body">
                                    <h3 className="card-title">Backend</h3>

                                    <ul className="skill-cards">
                                        <li>C#</li>
                                        <li>SQL</li>
                                        <li>ASP.NET</li>
                                        <li>MongoDB</li>
                                        <li>Entity FrameWork</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </div>
        )
    }
}