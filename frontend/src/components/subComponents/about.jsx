import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Emoji from '../helpers/emoji';

function calculateAge() {
	var birthday = new Date(1998, 5, 15);
	var currentDate = new Date();

	var years = currentDate.getFullYear() - birthday.getFullYear();
	var months = (years * 12) + (currentDate.getMonth() - birthday.getMonth());

	var age = months/12;
	return Math.trunc(age);
}

class About extends Component {
	render() {
        return (
            <div>
                <h3 className="sectionTitle">
                    About
                </h3>
                <div className="sectionContainer">
                    <Typography variant="body1" className="contentBlockThick">
                        Hi! I'm Jan.
                    </Typography>
                    <Typography variant="body1" className="contentBlock">
                        A {calculateAge()} year old Computer Science student from Munich, Germany. 
                    </Typography>
                    <Typography variant="body1" className="contentBlock">
                        Welcome to my Website! <Emoji symbol="✌" label="victoryHand"/>
                    </Typography>
                    <Typography variant="body1" className="contentBlock contentBlockTab">
                        <strong>Current Focus:</strong> Java // Backend Development
                    </Typography>
                </div>
            </div>
        )
    }
}

export default About;