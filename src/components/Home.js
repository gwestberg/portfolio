import React, { Component } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from "react-scroll";
import './css/Home.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Projects from '../components/Projects';
// import Blog from '../components/Blog';
import About from '../components/About';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });

    }

    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <div className="Wrapper">
                {/* NAVBAR */}
                <div className="sticky-top headnav">
                    <nav className="navbar navbar-expand-sm navbar-dark transparent-nav">
                        <div className="container">
                            <a className="navbar-brand" href="/portfolio">Home</a>
                            <button onClick={this.toggleNavbar}
                                className={`${classTwo}`} type="button"
                                data-toggle="collapse"
                                data-target="#navbarResponsive"
                                aria-controls="navbarResponsive"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className={`${classOne}`} id="navbarResponsive">
                                <ul className="navbar-nav ">
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            activeClass="active"
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}>
                                            About
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            activeClass="active"
                                            to="projects"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}>
                                            Projects
                                        </Link>
                                    </li>
                                    {/* <li className="nav-item">
                                        <a className="nav-link" href="#Blog">Blog</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* ------------ */}

                {/* HEADER */}
                <div className="header">
                    <div id="headerContent">
                        <Fade direction="left" duration="2000" triggerOnce="true" cascade>
                            <h1 className="header-title">Hi, my name is Gabriella!</h1>
                            <p>I'm a software developer student @<a className="header-link" href="https://www.boras.se/utbildningochforskola/borasyrkeshogskola/utbildningar/systemutvecklarenet.4.3fde8c191684442015123edf.html" target="_blank" rel="noopener noreferrer">YHBORÅS</a></p>
                        </Fade>
                        <Fade delay="255">
                            <div>
                                <ul className="nav nav-pills flex-row">
                                    <li className="nav-item">
                                        <a className="nav-link"
                                            href="https://github.com/gwestberg"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <FaGithub size={50} />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"
                                            href="https://www.linkedin.com/in/gabriella-w-54975ba7/"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <FaLinkedin size={50} />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"
                                            href="mailto:g.westberg@hotmail.se"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <AiOutlineMail size={50} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Fade>
                    </div>
                </div>
                {/* ------------ */}

                {/* CONTENT */}
                <div className="container content">
                    {/* ABOUT */}
                    <div className="about column sm-4">
                        <About></About>
                    </div>
                    <br />
                    {/* ------------ */}

                    {/* PROJECTS */}
                    <div className="projects column sm-4">
                        <Projects></Projects>
                        <br />
                    </div>
                    {/* ------------ */}

                    {/* BLOG */}
                    {/* <section>
                            <div className="col-sm-10" id="Blog">
                                <h2>Blog</h2>
                                <Blog></Blog>
                                <br />
                            </div>
                        </section> */}
                    {/* ------------ */}
                </div>
                {/* ------------ */}

                {/* FOOTER */}
                <footer className="page-footer font-small ">
                    <h3 className="footer-title">Find Me Here:</h3>
                    <ul className="nav nav-pills flex-row justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link"
                                href="https://github.com/gwestberg"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaGithub size={40} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                                href="https://www.linkedin.com/in/gabriella-w-54975ba7/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaLinkedin size={40} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                                href="mailto:g.westberg@hotmail.se"
                                target="_blank"
                                rel="noopener noreferrer">
                                <AiOutlineMail size={40} />
                            </a>
                        </li>
                    </ul>
                    {/* <!-- Copyright --> */}
                    <div className="footer-copyright text-center text-light py-3">
                        © 2020 Copyright:
                        <a className="footer-link" href="/portfolio"> Pistorella</a>
                        <p className="footer-text-small">Built with <a className="footer-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">react.js</a> </p>
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>
                {/* ------------ */}

            </div>
        )
    }
}
