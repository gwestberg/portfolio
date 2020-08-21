import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import Fade from 'react-reveal/Fade';
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
            <Fade left cascade>
            <div>
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
            </div>
            </Fade>
        )
    }
}
