import React, { Component } from 'react';
import Sidebar from '../staticComponents/sidebar';
import About from '../subComponents/about';
import Skills from '../subComponents/skills';
import Experience from '../subComponents/experience';
import Projects from '../subComponents/projects';
import Blog from '../subComponents/blog';
import Contact from '../subComponents/contact';


class Homepage extends Component {

	render() {
        return (
			<div className="baseRoot" id="page-top">
				<Sidebar/>
				<main className="baseMain mobileOffset">
					<section id="about">
						<About/>
					</section>
					<section id="skills">
						<Skills/>
					</section>
					<section id="experience">
						<Experience/>
					</section>
					<section id="projects">
						<Projects/>
					</section>
					<section id="blog">
						<Blog/>
					</section>
					<section id="contact">
						<Contact/>
					</section>
				</main>
			</div>
		)
	}
  }

export default Homepage;
