import React from 'react';
import clsx from 'clsx';
import Git from '../../images/git.png'
import Java from '../../images/java.png'
import JavaScript from '../../images/javascript.png'
import Python from '../../images/python.png'
import Cpp from '../../images/c++.png'
import Bash from '../../images/bash.png'
import ReactJS from '../../images/reactjs.png'
import NodeJS from '../../images/nodejs.png'
import Android from '../../images/android.png'
import Windows from '../../images/windows.png'
import Fedora from '../../images/fedora.png'
import Ubuntu from '../../images/ubuntu.png'
import PostgreSQL from '../../images/postgresql.png'
import Oracle from '../../images/oracle.png'
import Docker from '../../images/docker.png'
import Grafana from '../../images/grafana.png'
import IntelliJ from '../../images/intellij.png'
import Arduino from '../../images/arduino.png'
import Emoji from '../subComponents/emoji';
import Sidebar from '../staticComponents/sidebar';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Card, CardContent, CardHeader, CardMedia, CardActions, CardActionArea, Collapse, Divider, Grid } from '@material-ui/core';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const useSliderStyles = makeStyles(() => ({
	root: {
	  height: 4,
	},
	rail: {
	  borderRadius: 0,
	  height: 6,
	  backgroundColor: 'rgb(202,211,216)',
	},
	track: {
	  borderRadius: 0,
	  height: 6,
	  backgroundColor: '#912c31',
	},
	thumb: {
	  display: 'none',
	}
}));

const useStyles = makeStyles(theme => ({
	root: {
	  display: 'flex',
	  backgroundColor: '#e3e3e3',
	},
	main: {
		width: '100%',
	},
	margin: {
		margin: theme.spacing(1),
	},
	sectionTitle: {
		backgroundColor: '#912c31',
		color: 'white',
		marginBottom: '30px',
		padding: '20px 40px',
		textTransform: 'uppercase',
		fontWeight: 200,
	},
	sectionContainer: {
		width: '90%',
		padding: '0 1.5rem',
		margin: '0 auto',
		maxWidth: '1280px',
	},
	contentBlock: {
		flexGrow: 1,
		lineHeight: '2.4rem',
		fontSize: '1.68rem',
		fontWeight: 200,
		color: '#333333de',
	},
	contentBlockTab: {
		marginTop: '30px',
		marginBottom: '30px',
	},
	contentBlockThick: {
		flexGrow: 1,
		marginBottom: '5px',
		lineHeight: '1.5rem',
		fontSize: '2rem',
		fontWeight: 600,
		color: '#333333e3',
	},
	cardRoot: {
		minWidth: 275,
		marginBottom: '40px',
	},
	cardContent: {
		display: 'flex',
		flexDirection: 'row',
	}
	,
	cardContentItem: {
		display: 'flex',
		flexDirection: 'column',
		marginRight: '25px',
		alignItems: 'center',
        textAlign: 'center',
	},
	cardHeader: {
		color: '#912c31',
	},
	expand: {
	  transform: 'rotate(0deg)',
	  marginLeft: 'auto',
	  transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	  }),
	},
	expandOpen: {
	  transform: 'rotate(180deg)',
	},
	sliderValue: {
		marginRight: 8,
		marginLeft: 8,
		fontSize: 14,
		color: 'grey',
	},
	projectsRoot: {
		width: 380,
		height: 380,
		marginBottom: '25px',
	},
	projectsMedia: {
		height: 220,
	},
	projectsButtons: {
		marginTop: 'auto',
		height: '10%',
	}
}));

function calculateAge() {
	var birthday = new Date(1998, 5, 15);
	var currentDate = new Date();

	var years = currentDate.getFullYear() - birthday.getFullYear();
	var months = (years * 12) + (currentDate.getMonth() - birthday.getMonth());

	var age = months/12;
	return Math.trunc(age);
}

function checkMobile() {
	return window.innerWidth <= 700;
}

function checkCentering() {
	if (checkMobile()) {
		return "center";
	} else {
		return "flex-start";
	}
}

function checkPictureHeight() {
	if (checkMobile()) {
		return "80";
	} else {
		return "120";
	}
}

function Homepage(props) {
	const classes = useStyles();
	const sliderClasses = useSliderStyles();

	const [currentAge, setCurrentAge] = React.useState(21);
	const [raised, setRaised] = React.useState(false);
	const [devExpanded, setDevExpanded] = React.useState(false);
	const [fwExpanded, setFwExpanded] = React.useState(false);
	const [osExpanded, setOsExpanded] = React.useState(false);
	const [dbExpanded, setDbExpanded] = React.useState(false);
	const [opsExpanded, setOpsExpanded] = React.useState(false);

	React.useEffect(() => {
		setCurrentAge(calculateAge())
	}, []);

	const handleDevExpandClick = () => {
		setDevExpanded(!devExpanded);
	};
	const handleFwExpandClick = () => {
		setFwExpanded(!fwExpanded);
	};
	const handleOsExpandClick = () => {
		setOsExpanded(!osExpanded);
	};
	const handleDbExpandClick = () => {
		setDbExpanded(!dbExpanded);
	};
	const handleOpsExpandClick = () => {
		setOpsExpanded(!opsExpanded);
	};
	const toggleRaised = () => {
		setRaised(!raised);
	};

	function renderCardContent(skillName, skillIcon, linuxFlag) {
		if (linuxFlag) {
			skillName = "Linux " + skillName;
		}
		return (
			<CardContent className={classes.cardContentItem}>
				<CardMedia
				component="img"
				alt={skillName}
				height={checkPictureHeight()}
				src={skillIcon}
				title={skillName}
				/>
				<Typography variant="body2" color="textSecondary" component="p">
					{skillName}
				</Typography>
			</CardContent>
		)
	}

	function renderSliderContent(skillName, sliderValue) {
		return ( 
			<CardContent>
				<Box display={'flex'} alignItems={'center'}>
					<span className={classes.sliderValue}>{skillName}</span>
					<Slider disabled classes={sliderClasses} defaultValue={sliderValue} />
					<span className={classes.sliderValue}>{sliderValue}%</span>
				</Box>
			</CardContent>
		)
	}

	function renderProjectContent(projectImg, title, h2, body) {
		return (
			<Card 
			className={classes.projectsRoot}
			onMouseOver={toggleRaised} 
			onMouseOut={toggleRaised} 
			raised={raised}>
				<CardActionArea>
					<CardMedia
					component="img"
					className={classes.projectsMedia}
					src={projectImg}
					title={title}
					/>
					<CardContent className={classes.projectsContent}>
						<Typography gutterBottom variant="h5" component="h2" style={{color: '#912c31'}}>
							{h2}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{body}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions className={classes.projectsButtons}>
					<Button size="small" color="primary">
					Share
					</Button>
					<Button size="small" color="primary">
					Learn More
					</Button>
				</CardActions>
			</Card>
		)
	}

	return (
		<div className={classes.root} id="page-top">
			<Sidebar/>
			<main className={classes.main}>
				<section id="about">
					<h3 className={classes.sectionTitle}>
						About
					</h3>
					<div className={classes.sectionContainer}>
						<Typography variant="body1" className={classes.contentBlockThick}>
							Hi! I'm Jan.
						</Typography>
						<Typography variant="body1" className={classes.contentBlock}>
							A {currentAge} year old Computer Science student from Munich, Germany. 
						</Typography>
						<Typography variant="body1" className={classes.contentBlock}>
							Welcome to my Website! <Emoji symbol="✌" label="victoryHand"/>
						</Typography>
						<Typography variant="body1" className={`${classes.contentBlock} ${classes.contentBlockTab}`}>
							<strong>Current Focus:</strong> Java // Backend Development
						</Typography>
					</div>
				</section>
				<section id="skills">
					<h3 className={classes.sectionTitle}>
						Skills
					</h3>
					<div className={classes.sectionContainer}>
						<Card className={classes.cardRoot}>
							<CardHeader
								className={classes.cardHeader}
								title="Programming Laguages"
								action={
									<IconButton
									className={clsx(classes.expand, {
										[classes.expandOpen]: devExpanded,
									})}
									onClick={handleDevExpandClick}
									aria-expanded={devExpanded}
									aria-label="show more"
									>
										<ExpandMoreIcon />
									</IconButton>
								}
							/>
							<Divider variant="middle"/>
							<Grid
							container
							direction="row"
							justify={checkCentering()}
							alignItems="flex-start"
							>
								{renderCardContent("Java", Java)}
								{renderCardContent("Python", Python)}
								{renderCardContent("JavaScript", JavaScript)}
								{renderCardContent("Bash", Bash)}
								{renderCardContent("C++", Cpp)}
							</Grid>
							<Collapse in={devExpanded} timeout="auto" unmountOnExit>
								<Divider variant="middle"/>
								{renderSliderContent("Java", 70)}
								{renderSliderContent("Python", 30)}
								{renderSliderContent("JavaScript", 20)}
								{renderSliderContent("Bash", 10)}
								{renderSliderContent("C++", 10)}
							</Collapse>
						</Card>
						<Card className={classes.cardRoot}>
							<CardHeader
								className={classes.cardHeader}
								title="Frameworks"
								action={
									<IconButton
									className={clsx(classes.expand, {
										[classes.expandOpen]: fwExpanded,
									})}
									onClick={handleFwExpandClick}
									aria-expanded={fwExpanded}
									aria-label="show more"
									>
										<ExpandMoreIcon />
									</IconButton>
								}
							/>
							<Divider variant="middle"/>
							<Grid
							container
							direction="row"
							justify={checkCentering()}
							alignItems="flex-start"
							>
								{renderCardContent("ReactJS", ReactJS)}
								{renderCardContent("NodeJS", NodeJS)}
								{renderCardContent("Android", Android)}
							</Grid>
							<Collapse in={fwExpanded} timeout="auto" unmountOnExit>
								<Divider variant="middle"/>
								{renderSliderContent("ReactJS", 30)}
								{renderSliderContent("NodeJS", 10)}
								{renderSliderContent("Android", 10)}
							</Collapse>
						</Card>
						<Card className={classes.cardRoot}>
							<CardHeader
								className={classes.cardHeader}
								title="Operating Systems"
								action={
									<IconButton
									className={clsx(classes.expand, {
										[classes.expandOpen]: osExpanded,
									})}
									onClick={handleOsExpandClick}
									aria-expanded={osExpanded}
									aria-label="show more"
									>
										<ExpandMoreIcon />
									</IconButton>
								}
							/>
							<Divider variant="middle"/>
							<Grid
							container
							direction="row"
							justify={checkCentering()}
							alignItems="flex-start"
							>
								{renderCardContent("Windows", Windows)}
								{renderCardContent("Ubuntu", Ubuntu, true)}
								{renderCardContent("Fedora", Fedora, true)}
							</Grid>
							<Collapse in={osExpanded} timeout="auto" unmountOnExit>
								<Divider variant="middle"/>
								{renderSliderContent("Windows", 70)}
								{renderSliderContent("Ubuntu", 50)}
								{renderSliderContent("Fedora", 40)}
							</Collapse>
						</Card>
						<Card className={classes.cardRoot}>
							<CardHeader
								className={classes.cardHeader}
								title="Databases"
								action={
									<IconButton
									className={clsx(classes.expand, {
										[classes.expandOpen]: dbExpanded,
									})}
									onClick={handleDbExpandClick}
									aria-expanded={dbExpanded}
									aria-label="show more"
									>
										<ExpandMoreIcon />
									</IconButton>
								}
							/>
							<Divider variant="middle"/>
							<Grid
							container
							direction="row"
							justify={checkCentering()}
							alignItems="flex-start"
							>
								{renderCardContent("PostgreSQL", PostgreSQL)}
								{renderCardContent("Oracle", Oracle)}
							</Grid>
							<Collapse in={dbExpanded} timeout="auto" unmountOnExit>
								<Divider variant="middle"/>
								{renderSliderContent("PostgreSQL", 50)}
								{renderSliderContent("Oracle", 10)}
							</Collapse>
						</Card>
						<Card className={classes.cardRoot}>
							<CardHeader
								className={classes.cardHeader}
								title="Ops | Versioncontrol | Others"
								action={
									<IconButton
									className={clsx(classes.expand, {
										[classes.expandOpen]: opsExpanded,
									})}
									onClick={handleOpsExpandClick}
									aria-expanded={opsExpanded}
									aria-label="show more"
									>
										<ExpandMoreIcon />
									</IconButton>
								}
							/>
							<Divider variant="middle"/>
							<Grid
							container
							direction="row"
							justify={checkCentering()}
							alignItems="flex-start"
							>
								{renderCardContent("Docker", Docker)}
								{renderCardContent("Git", Git)}
								{renderCardContent("IntelliJ", IntelliJ)}
								{renderCardContent("Arduino", Arduino)}
								{renderCardContent("Grafana", Grafana)}
							</Grid>
							<Collapse in={opsExpanded} timeout="auto" unmountOnExit>
								<Divider variant="middle"/>
								{renderSliderContent("Docker", 50)}
								{renderSliderContent("Git", 50)}
								{renderSliderContent("IntelliJ", 50)}
								{renderSliderContent("Arduino", 20)}
								{renderSliderContent("Grafana", 10)}
							</Collapse>
						</Card>
					</div>
				</section>
				<section id="experience">
					<h3 className={classes.sectionTitle}>
						Experience & Education
					</h3>
					<div className={classes.sectionContainer}>
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
				</section>
				<section id="projects">
					<h3 className={classes.sectionTitle}>
						Projects
					</h3>
					<div className={classes.sectionContainer}>
						<Typography paragraph className={classes.contentBlock}>
							Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
							facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
							tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
							consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
							vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
							hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
							tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
							nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
							accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
						</Typography>
					</div>
				</section>
				<section id="blog">
					<h3 className={classes.sectionTitle}>
						Blog
					</h3>
					<div className={classes.sectionContainer}>
						<Typography paragraph className={classes.contentBlock}>
							Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
							facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
							tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
							consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
							vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
							hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
							tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
							nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
							accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
						</Typography>
					</div>
				</section>
				<section id="contact">
					<h3 className={classes.sectionTitle}>
						Contact
					</h3>
					<div className={classes.sectionContainer}>
						<Typography paragraph className={classes.contentBlock}>
							Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
							facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
							tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
							consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
							vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
							hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
							tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
							nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
							accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
						</Typography>
					</div>
				</section>
			</main>
		</div>
	)
  }

export default Homepage;
