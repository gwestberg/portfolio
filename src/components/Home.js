import React, { Component } from 'react';
import './css/Home.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import About from '../components/About';
// import Contact from '../components/Contact';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="Wrapper">
                {/* NAVBAR */}
                <div className="sticky-top headnav">
                    <nav className="navbar navbar-expand-sm navbar-dark" >
                        <a className="navbar-brand" href="#">Home</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link scroll-link" href="#Projects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll-link" href="#Blog">Blog</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                {/* ------------ */}

                {/* HEADER */}
                <section id="Header">
                    <div id="headerContent">
                        <h1>Code-magician in training</h1>
                        <p>this is my book of spells</p>
                        <ul className="nav nav-pills flex-row">
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/gwestberg" target="_blank" rel="noopener noreferrer"><FaGithub size={50} /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.linkedin.com/in/gabriella-w-54975ba7/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={50} /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="mailto:g.westberg@hotmail.se" target="_blank" rel="noopener noreferrer"><AiOutlineMail size={50} /></a>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* ------------ */}

                {/* CONTENT */}
                <div className="container content">
                    <div className="column">
                        {/* ABOUT */}
                        <section >
                            <About></About>
                        </section>
                        {/* ------------ */}

                        {/* PROJECTS */}
                        <section>
                            <div className="col-sm-10" id="Projects">
                                <h2>Project Gallery</h2>
                                <p>These are the projects I have worked on </p>
                                <Projects></Projects>
                                <br />
                            </div>
                        </section>
                        {/* ------------ */}

                        {/* BLOG */}
                        <section>
                            <div className="col-sm-10" id="Blog">
                                <h2>Blog</h2>
                                <Blog></Blog>
                                <br />
                            </div>
                        </section>
                        {/* ------------ */}
                    </div>
                </div>
                {/* ------------ */}

                {/* FOOTER */}
                <footer className="page-footer font-small bg-dark ">

                    {/* <!-- Copyright --> */}
                    <div className="footer-copyright text-center text-light py-3">© 2020 Copyright:
                        <a href="http://localhost:3000/#"> Pistorella</a>
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>
                {/* ------------ */}

            </div>
        )
    }
}
