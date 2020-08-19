import React, { Component } from 'react';
import './css/Projects.css'
import Projectfiles from './json/projects.json'
import Portfolioproj from '../assets/projectimg/projectportfolio.JPG'

export default class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {    
        };
    }
    componentDidMount() {
        console.log(Projectfiles)
    }
    render() {
        return (
            
            <div>
            <div>
                    <ol>
                    
                    </ol>
                </div>
                {/* // <!-- Page Content --> */}
                <div className="container">
                    <div className="row">
                    {
                        Projectfiles.map(post => (
                            <div className="col-lg-4 col-sm-6 mb-4" key={post.id}>
                            <div className=" h-100">
                                <a href={post.link}><img class="card-img-top" src={Portfolioproj} alt="project thumbnail" /></a>
                                <div className="card-body" >
                                    <h4 className="card-title">{post.name}</h4>
                                    <h6>- {post.date}</h6>
                                    <p className="card-text">{post.description}</p>
                                    <h6>tags:</h6>
                                    <span>{post.tags}</span>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                        {/* <!-- /.row --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </div>
            </div>
        )
    }
}
