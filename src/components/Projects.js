import React, { Component } from 'react';
import Portfolioproj from "./json/images/projectportfolio.JPG"

export default class Projects extends Component {
    render() {
        return (
            <div>
                {/* // <!-- Page Content --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className=" h-100">
                                <a href="https://gwestberg.github.io/portfolio/"><img class="card-img-top" src={Portfolioproj} alt="project thumbnail"/></a>
                                <div className="card-body">
                                <h4 className="card-title">My Portfolio</h4>
                                <h6>- 19 aug 2020</h6>
                                    <p className="card-text">
                                        This is the first "real" project I've done so far. 
                                        The first one that I will be using after I've done with my studies. 
                                        It's a basic app made with React.
                                    </p>
                                    <h6>tags:</h6>
                                    <span>react, javascript, html, css, bootstrap</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className=" h-100">
                                <a href="https://gwestberg.github.io/portfolio/"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                                <div className="card-body">
                                <h4 className="card-title">Project two</h4>
                                <h6>- date</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className=" h-100">
                                <a href="https://gwestberg.github.io/portfolio/"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                                <div className="card-body">
                                <h4 className="card-title">Project three</h4>
                                <h6>- date</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /.row --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </div>
            </div>
        )
    }
}
