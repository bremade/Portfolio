import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import Logo from '../../images/logo.svg';
import Github from '../../images/github.svg';
import Twitter from '../../images/twitter.svg';
import Instagram from '../../images/insta.svg';
import LinkedIn from '../../images/linkedin.svg';

const Kontakt = () => {
    return (
        <div className="responsive">
            <div>
                <img src={Logo} width="30" height="30" className="d-inline-block align-middle" alt="Logo" />
                Bremauer
            </div>
            <div className="navbar-text">
                <div>
                    Bei Fragen können sie mich jederzeit per Kontaktformular oder E-Mail kontaktieren.
                </div>
                <div>
                    E-Mail: jan@bremauer.cc
                </div>
            </div>
        </div>
    );
};

const Social = () => {
    return (
        <div className="responsive">
            <div>
                Social Media
            </div>
            <div className="navbar-text">
                    <div className="linebreak">
                        <img src={Github} width="20" height="20" className="d-inline-block align-top" alt="Github" />
                        <a href="https://github.com/sirarzelot" style={{textDecoration: 'none', color: '#7C7C7D'}}>Github</a>
                    </div>
                    <div>
                        <img src={Instagram} width="20" height="20" className="d-inline-block align-top" alt="Instagram" />
                        <a href="https://www.instagram.com/janb_98/" style={{textDecoration: 'none', color: '#7C7C7D'}}>Instagram</a>
                    </div>
                    <div>
                        <img src={Twitter} width="20" height="20" className="d-inline-block align-top" alt="Twitter" />
                        <a href="https://twitter.com/BremauerJan" style={{textDecoration: 'none', color: '#7C7C7D'}}>Twitter</a>
                    </div>
                    <div>
                        <img src={LinkedIn} width="20" height="20" className="d-inline-block align-top" alt="LinkedIn" />
                        <a href="https://linkedin.com/in/jan-bremauer-2a603611b" style={{textDecoration: 'none', color: '#7C7C7D'}}>LinkedIn</a>
                    </div>
            </div>
        </div>
    );
};

const Links = () => {
    return (
        <div className="row row-centered">
            <div className="col">
                <Link className="nav-link"
                to="/#top"
                scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                    <span className="font-coustom home-color">Home</span>
		        </Link>
            </div>
            <div className="col">
                <Link className="nav-link"
                to="/#about"
                scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                    <span className="font-coustom link-color">About</span>
		        </Link>
            </div>
            <div className="col">
                <Link className="nav-link"
                to="/#projects"
                scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                    <span className="font-coustom link-color">Projects</span>
		        </Link>
            </div>
            <div className="col">
                <Link className="nav-link"
                to="/#blog"
                scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                    <span className="font-coustom link-color">Blog</span>
		        </Link>
            </div>
            <div className="col">
                <Link className="nav-link"
                to="/#contact"
                scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                    <span className="font-coustom link-color">Contact</span>
		        </Link>
            </div>
            <div className="col">
                <Link className="nav-link"
                to="/imprint#imptop"
                scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                    <span className="font-coustom link-color">Impressum</span>
		        </Link>
            </div>
        </div>
    );
};

const Copyright = () => {
    return (
        <div>
            <span className="navbar-text">
                Copyright @ 2019
                <a className="link-color" href="https://bremauer.cc">bremauer.cc</a>
            </span>
        </div>
    );
};

export default () => {
    return (
        <nav className="navbar navbar-light footer" style={{ 'backgroundColor': '#EEEEEE' }}>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-lg-4 col-xs-2 responsiveAlign">
                        <Kontakt />
                    </div>
                    <div className="col-lg-2 col-xs-0">
                    </div>
                    <div className="col-lg-4 col-xs-4 responsiveAlign">
                        <Social />
                    </div>
                    <div className="w-100"></div>
                    <div className="col responsiveAlign">
                        <Links />
                    </div>
                    <div className="w-100"></div>
                    <div className="col text-center responsiveAlign" >
                        <Copyright />
                    </div>
                </div>
            </div>
        </nav>
    );
};