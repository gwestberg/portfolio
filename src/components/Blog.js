import React, { Component } from 'react';
import Blogposts from './json/blogposts.json'

export default class Blog extends Component {
    render() {
        return (
            <div>
                {/* // <!-- Page Content --> */}
                <div className="container">
                    <div className="column">
                    {
                        Object.keys(Blogposts).map(key => (
                            <div className="" key={key}>
                                <div className=" h-100">
                                    {/* <a href={Blogposts[key].link}></a> */}
                                    <div className="card-body" >
                                        <h4 className="card-title">{Blogposts[key].title}</h4>
                                        <h6>- {Blogposts[key].date}</h6>
                                        <p className="card-text">{Blogposts[key].text}</p>
                                        <h6>tags:</h6>
                                        <span>{Blogposts[key].tags}</span>
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
