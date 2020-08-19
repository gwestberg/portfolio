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
                                <h3 className="card-title">Project one</h3>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className=" h-100">
                                <a href="https://gwestberg.github.io/portfolio/"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                                <div className="card-body">
                                <h3 className="card-title">Project two</h3>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className=" h-100">
                                <a href="https://gwestberg.github.io/portfolio/"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                                <div className="card-body">
                                <h3 className="card-title">Project three</h3>
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
