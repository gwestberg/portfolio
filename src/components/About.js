import React, { Component } from 'react';
import './css/About.css'
import profilePic from '../images/realprofilepic.jpg'


export default class About extends Component {
    render() {
        return (
            <div className="row row-wrap justify-content-evenly">
                <div className="col-md-4" id="profileImage">
                    <img src={profilePic} alt="Profile"></img>
                </div>
                <div id="profileText" className=" col-md-6 text-center">
                <h5>Hi, my name is Gabriella!</h5>
                    <p>I'm a software developer student @<a className="link" href="https://www.boras.se/utbildningochforskola/borasyrkeshogskola/utbildningar/systemutvecklarenet.4.3fde8c191684442015123edf.html" target="_blank" rel="noopener noreferrer">YHBORÅS</a></p>
                    <p>A tad late in the game, wanted to be a kitchen-magician first.
                    The interest has been there since i got my first computer in -95 and I wondered what made it tick.
                    The gaming interest never left me though and i have spent far to many hours trying to perfect railways in various city-building games, 
                    aswell as trying to coordinate a people in various raids in a couple of MMO's.
                    </p>
                    <p>
                    The jump from food to code is not as far as one might think, 
                    we still follow recipies and experiment with ingredients and flavours to present a product that satisfies our customers.
                    </p>
                    <p>The magic that happens in the kitchen also happens when building applications and is the reason why I chose this path, 
                    to be a part of the magic, another side of it but still the same magic.</p>
                </div>
                <hr class="d-sm-none" />
            </div>
        )
    }
}