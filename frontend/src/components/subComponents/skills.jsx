import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  Grid,
} from '@material-ui/core';
import Git from '../../images/git.png';
import Java from '../../images/java.png';
import JavaScript from '../../images/javascript.png';
import Python from '../../images/python.png';
import Go from '../../images/go.png';
import Cpp from '../../images/c++.png';
import Bash from '../../images/bash.png';
import ReactJS from '../../images/reactjs.png';
import NodeJS from '../../images/nodejs.png';
import Android from '../../images/android.png';
import Windows from '../../images/windows.png';
import Fedora from '../../images/fedora.png';
import Ubuntu from '../../images/ubuntu.png';
import PostgreSQL from '../../images/postgresql.png';
import Oracle from '../../images/oracle.png';
import Docker from '../../images/docker.png';
import Grafana from '../../images/grafana.png';
import IntelliJ from '../../images/intellij.png';
import Arduino from '../../images/arduino.png';

// Needed for slider
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
  },
}));

const useStyles = makeStyles((theme) => ({
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
  margin: {
    margin: theme.spacing(1),
  },
}));

function Skills() {
  const classes = useStyles();
  const sliderClasses = useSliderStyles();
  const [devExpanded, setDevExpanded] = React.useState(false);
  const [fwExpanded, setFwExpanded] = React.useState(false);
  const [osExpanded, setOsExpanded] = React.useState(false);
  const [dbExpanded, setDbExpanded] = React.useState(false);
  const [opsExpanded, setOpsExpanded] = React.useState(false);

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

  function renderSliderContent(skillName, sliderValue) {
    return (
      <CardContent>
        <Box display='flex' alignItems='center'>
          <span className='sliderValue'>{skillName}</span>
          <Slider disabled classes={sliderClasses} defaultValue={sliderValue} />
          <span className='sliderValue'>{sliderValue}%</span>
        </Box>
      </CardContent>
    );
  }

  function renderCardContent(skillName, skillIcon, linuxFlag) {
    if (linuxFlag) {
      skillName = `Linux ${skillName}`;
    }
    return (
      <CardContent className='cardContentItem'>
        <img
          src={skillIcon}
          alt={skillName}
          width={checkPictureDimension()}
          height={checkPictureDimension()}
        />
        <Typography variant='body2' color='textSecondary' component='p'>
          {skillName}
        </Typography>
      </CardContent>
    );
  }

  return (
    <div>
      <h3 className='sectionTitle'>Skills</h3>
      <div className='sectionContainer'>
        <Card className='cardRoot'>
          <CardHeader
            className='cardHeader'
            title='Programming Laguages'
            action={
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: devExpanded,
                })}
                onClick={handleDevExpandClick}
                aria-expanded={devExpanded}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </IconButton>
            }
          />
          <Divider variant='middle' />
          <Grid
            container
            direction='row'
            justify={checkCentering()}
            alignItems='flex-start'
          >
            {renderCardContent('Java', Java)}
            {renderCardContent('Go', Go)}
            {renderCardContent('JavaScript', JavaScript)}
            {renderCardContent('Python', Python)}
            {renderCardContent('Bash', Bash)}
            {renderCardContent('C++', Cpp)}
          </Grid>
          <Collapse in={devExpanded} timeout='auto' unmountOnExit>
            <Divider variant='middle' />
            {renderSliderContent('Java', 70)}
            {renderSliderContent('Go', 30)}
            {renderSliderContent('JavaScript', 20)}
            {renderSliderContent('Python', 20)}
            {renderSliderContent('Bash', 10)}
            {renderSliderContent('C++', 10)}
          </Collapse>
        </Card>
        <Card className='cardRoot'>
          <CardHeader
            className='cardHeader'
            title='Frameworks'
            action={
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: fwExpanded,
                })}
                onClick={handleFwExpandClick}
                aria-expanded={fwExpanded}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </IconButton>
            }
          />
          <Divider variant='middle' />
          <Grid
            container
            direction='row'
            justify={checkCentering()}
            alignItems='flex-start'
          >
            {renderCardContent('ReactJS', ReactJS)}
            {renderCardContent('NodeJS', NodeJS)}
            {renderCardContent('Android', Android)}
          </Grid>
          <Collapse in={fwExpanded} timeout='auto' unmountOnExit>
            <Divider variant='middle' />
            {renderSliderContent('ReactJS', 30)}
            {renderSliderContent('NodeJS', 10)}
            {renderSliderContent('Android', 10)}
          </Collapse>
        </Card>
        <Card className='cardRoot'>
          <CardHeader
            className='cardHeader'
            title='Operating Systems'
            action={
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: osExpanded,
                })}
                onClick={handleOsExpandClick}
                aria-expanded={osExpanded}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </IconButton>
            }
          />
          <Divider variant='middle' />
          <Grid
            container
            direction='row'
            justify={checkCentering()}
            alignItems='flex-start'
          >
            {renderCardContent('Windows', Windows)}
            {renderCardContent('Ubuntu', Ubuntu, true)}
            {renderCardContent('Fedora', Fedora, true)}
          </Grid>
          <Collapse in={osExpanded} timeout='auto' unmountOnExit>
            <Divider variant='middle' />
            {renderSliderContent('Windows', 60)}
            {renderSliderContent('Ubuntu', 50)}
            {renderSliderContent('Fedora', 30)}
          </Collapse>
        </Card>
        <Card className='cardRoot'>
          <CardHeader
            className='cardHeader'
            title='Databases'
            action={
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: dbExpanded,
                })}
                onClick={handleDbExpandClick}
                aria-expanded={dbExpanded}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </IconButton>
            }
          />
          <Divider variant='middle' />
          <Grid
            container
            direction='row'
            justify={checkCentering()}
            alignItems='flex-start'
          >
            {renderCardContent('PostgreSQL', PostgreSQL)}
            {renderCardContent('Oracle', Oracle)}
          </Grid>
          <Collapse in={dbExpanded} timeout='auto' unmountOnExit>
            <Divider variant='middle' />
            {renderSliderContent('PostgreSQL', 40)}
            {renderSliderContent('Oracle', 10)}
          </Collapse>
        </Card>
        <Card className='cardRoot'>
          <CardHeader
            className='cardHeader'
            title='Ops | Versioncontrol | Others'
            action={
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: opsExpanded,
                })}
                onClick={handleOpsExpandClick}
                aria-expanded={opsExpanded}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </IconButton>
            }
          />
          <Divider variant='middle' />
          <Grid
            container
            direction='row'
            justify={checkCentering()}
            alignItems='flex-start'
          >
            {renderCardContent('Docker', Docker)}
            {renderCardContent('Git', Git)}
            {renderCardContent('IntelliJ', IntelliJ)}
            {renderCardContent('Arduino', Arduino)}
            {renderCardContent('Grafana', Grafana)}
          </Grid>
          <Collapse in={opsExpanded} timeout='auto' unmountOnExit>
            <Divider variant='middle' />
            {renderSliderContent('Docker', 50)}
            {renderSliderContent('Git', 50)}
            {renderSliderContent('IntelliJ', 50)}
            {renderSliderContent('Arduino', 20)}
            {renderSliderContent('Grafana', 10)}
          </Collapse>
        </Card>
      </div>
    </div>
  );
}

export default Skills;
