import React, { Component } from 'react';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Experience extends Component {
	render() {
        return (
            <div>
                <h3 className="sectionTitle">
                    Experience & Education
                </h3>
                <div className="sectionContainer">
                    <VerticalTimeline className="timelineBox" layout="1-column">
                        <VerticalTimelineElement
                            contentStyle={{ background: 'rgb(255, 255, 255)', color: '#0' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                            date="2021 - present"
                            iconStyle={{ background: '#912c31', color: '#fff' }}
                            icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title timelineText">Bachelor Thesis @doubleSlash Net-Business GmbH</h3>
                            <h4 className="vertical-timeline-element-subtitle timelineText">Munich, Germany</h4>
                            <p>Serverless Functions auf Kubernetes - Evaluation und Vergleich aktueller Lösungen</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            contentStyle={{ background: 'rgb(255, 255, 255)', color: '#0' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                            date="2020 - 2021"
                            iconStyle={{ background: '#912c31', color: '#fff' }}
                            icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title timelineText">Workstudent @doubleSlash Net-Business GmbH</h3>
                            <h4 className="vertical-timeline-element-subtitle timelineText">Munich, Germany</h4>
                            <p>Java Backend Development <br/> Java // Python // Docker // PostgreSQL</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(255, 255, 255)', color: '#0' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                            date="2019 - 2020"
                            iconStyle={{ background: '#912c31', color: '#fff' }}
                            icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title timelineText">Internship @doubleSlash Net-Business GmbH</h3>
                            <h4 className="vertical-timeline-element-subtitle timelineText">Munich, Germany</h4>
                            <p>Java Backend Development <br/> Java // Python // Docker // PostgreSQL</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(255, 255, 255)', color: '#0' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                            date="2017 - present"
                            iconStyle={{ background: '#912c31', color: '#fff' }}
                            icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title timelineText">Computer Science Bachelor @Hochschule Munich</h3>
                            <h4 className="vertical-timeline-element-subtitle timelineText">Munich, Germany</h4>
                            <p>
                            Programming // Mathematics
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        )
    }
}

export default Experience;