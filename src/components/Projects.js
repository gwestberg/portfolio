import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import {Fade} from 'react-awesome-reveal';
import './css/Projects.css';
import Projectfiles from './json/projects.json';


export default class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {    
        };
    }
    render() {
        return (
            <div className="col-sm-10" id="Projects">
            <Fade direction ="left" duration="2200" triggerOnce="true" cascade>
            <h1>Project Gallery</h1>
                <p>These are some of the projects I have worked on </p>
                </Fade>
                <Fade delay = "290">
                <div className="container">
                    <div className="row d-flex row-wrap">
                    {
                        Object.keys(Projectfiles).map(key => (
                            <div className="col-lg-6 col-sm-6 mb-4" key={key}>
                                <div className="w-100 h-100">
                                    <Collapsible 
                                        triggerStyle={{ cursor: "pointer", padding: 1 + "%" + 0 + "%" + 0 + "%" + 0 + "%" }} 
                                        trigger={<img className="card-img-top" src= {require("../assets/"+Projectfiles[key].image)} alt="project thumbnail" />}
                                    >
                                    <div className="card-body" >
                                    <h4 className="card-title">{Projectfiles[key].projectTitle}</h4>
                                        <p className="card-text">{Projectfiles[key].description}</p>
                                        <a target="_blank" rel="noopener noreferrer" href={Projectfiles[key].link}>
                                        <button>Source Code</button>
                                        </a>
                                    </div>
                                    </Collapsible>
                                </div>
                        </div>
                        ))
                    }
                    </div>
                </div>
                    </Fade>
            
            </div>
        )
    }
}
