import React, { Component } from 'react';
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
            <div>
                <div className="container">
                    <div className="row row-wrap">
                    {
                        Object.keys(Projectfiles).map(key => (
                            <div className="col-lg-4 col-sm-6 mb-4" key={key}>
                                <div className=" h-100">
                                    <a href={Projectfiles[key].link}>
                                    <img className="card-img-top" src= {require("../assets/"+Projectfiles[key].image)} alt="project thumbnail" />
                                    </a>
                                    <div className="card-body" >
                                        <h4 className="card-title">{Projectfiles[key].name}</h4>
                                        <h6>- {Projectfiles[key].date}</h6>
                                        <p className="card-text">{Projectfiles[key].description}</p>
                                    </div>
                                </div>
                        </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        )
    }
}
