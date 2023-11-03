import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  Grid,
} from '@mui/material';
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
import Ubuntu from '../../images/ubuntu.png';
import PostgreSQL from '../../images/postgresql.png';
import Oracle from '../../images/oracle.png';
import Aws from '../../images/aws.png';
import Docker from '../../images/docker.png';
import Kubernetes from '../../images/kubernetes.png';
import Openshift from '../../images/openshift.png';
import Jenkins from '../../images/jenkins.png';
import Grafana from '../../images/grafana.png';
import IntelliJ from '../../images/intellij.png';
import Arduino from '../../images/arduino.png';
import Apple from '../../images/apple.png';
import Flutter from '../../images/flutter.png';
import Spring from '../../images/spring.png';
import VSC from '../../images/vsc.png';
import Actions from '../../images/github-dark.png';

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

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Experience level:</DialogTitle>
      <div className='skillDialogWindow'>
        <p>
          <b>90%-100%</b>: Senior-level
        </p>
        <p>
          <b>70%-90%</b>: Years of experience
        </p>
        <p>
          <b>50%-70%</b>: I have worked with it for quite some time
        </p>
        <p>
          <b>30%-50%</b>: I have worked with it in projects
        </p>
        <p>
          <b>0%-30%</b>: I&apos;m currently learning this technology
        </p>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

function Skills() {
  const classes = useStyles();
  const sliderClasses = useSliderStyles();
  const [devExpanded, setDevExpanded] = React.useState(false);
  const [fwExpanded, setFwExpanded] = React.useState(false);
  const [osExpanded, setOsExpanded] = React.useState(false);
  const [dbExpanded, setDbExpanded] = React.useState(false);
  const [opsExpanded, setOpsExpanded] = React.useState(false);
  const [vcExpanded, setVCExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

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
  const handleVCExpandClick = () => {
    setVCExpanded(!vcExpanded);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function renderSliderContent(skillName, sliderValue) {
    return (
      <CardContent>
        <Box display='flex' alignItems='center'>
          <span className='sliderKey'>{skillName}</span>
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
      <CardContent className='skillCardContentItem'>
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
        <SimpleDialog open={open} onClose={handleClose} />
        <Card className='skillCardRoot'>
          <CardHeader
            className='skillCardHeader'
            title='Programming Laguages'
            action={
              <div>
                <IconButton
                  onClick={handleClickOpen}
                  aria-label='info'
                  size='large'
                >
                  <InfoIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: devExpanded,
                  })}
                  onClick={handleDevExpandClick}
                  aria-expanded={devExpanded}
                  aria-label='show more'
                  size='large'
                >
                  <ExpandMoreIcon />
                </IconButton>
              </div>
            }
          />
          <Divider variant='middle' />
          <Grid
            container
            direction='row'
            justifyContent={checkCentering()}
            alignItems='flex-start'
          >
            {renderCardContent('Java', Java)}
            {renderCardContent('Go', Go)}
            {renderCardContent('JavaScript', JavaScript)}
            {renderCardContent('Python', Python)}

            {renderCardContent('C/C++', Cpp)}
          </Grid>
          <Collapse in={devExpanded} timeout='auto' unmountOnExit>
            <Divider variant='middle' />
            {renderSliderContent('Java', 60)}
            {renderSliderContent('Go', 20)}
            {renderSliderContent('JavaScript', 20)}
            {renderSliderContent('Python', 10)}
            {renderSliderContent('Bash', 10)}
            {renderSliderContent('C/C++', 5)}
          </Collapse>
        </Card>
        <Card className='skillCardRoot'>
          <CardHeader
            className='skillCardHeader'
            title='Dev-Ops'
            action={
              <div>
                <IconButton
                  onClick={handleClickOpen}
                  aria-label='info'
                  size='large'
                >
                  <InfoIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: opsExpanded,
                  })}
                  onClick={handleOpsExpandClick}
                  aria-expanded={opsExpanded}
                  aria-label='show more'
                  size='large'
                >
                  <ExpandMoreIcon />
                </IconButton>
              </div>
            }
          />
          <Divider variant='middle' />
          <Grid
            container
            direction='row'
            justifyContent={checkCentering()}
            alignItems='flex-start'
          >
            {renderCardContent('AWS', Aws)}
            {renderCardContent('Docker', Docker)}
            {renderCardContent('Kubernetes', Kubernetes)}
            {renderCardContent('Openshift', Openshift)}
            {renderCardContent('Actions', Actions)}
            {renderCardContent('Jenkins', Jenkins)}
          </Grid>
          <Collapse in={opsExpanded} timeout='auto' unmountOnExit>
            <Divider variant='middle' />
            {renderSliderContent('AWS', 50)}
            {renderSliderContent('Docker', 50)}
            {renderSliderContent('Kubernetes', 30)}
            {renderSliderContent('Openshift', 5)}
            {renderSliderContent('Jenkins', 10)}
            {renderSliderContent('Actions', 10)}
          </Collapse>
        </Card>
        <Card className='skillCardRoot'>
          <CardHeader
            className='skillCardHeader'
            title='Databases'
            action={
              <div>
                <IconButton
                  onClick={handleClickOpen}
                  aria-label='info'
                  size='large'
                >
                  <InfoIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: dbExpanded,
                  })}
                  onClick={handleDbExpandClick}
                  aria-expanded={dbExpanded}
                  aria-label='show more'
                  size='large'
                >
                  <ExpandMoreIcon />
                </IconButton>
              </div>
            }
          />
          <Divider variant='middle' />
          <Grid
            container
            direction='row'
            justifyContent={checkCentering()}
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
        <Card className='skillCardRoot'>
          <CardHeader
            className='skillCardHeader'
            title='Versioncontrol | Others'
            action={
              <div>
                <IconButton
                  onClick={handleClickOpen}
                  aria-label='info'
                  size='large'
                >
                  <InfoIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: vcExpanded,
                  })}
                  onClick={handleVCExpandClick}
                  aria-expanded={vcExpanded}
                  aria-label='show more'
                  size='large'
                >
                  <ExpandMoreIcon />
                </IconButton>
              </div>
            }
          />
          <Divider variant='middle' />
          <Grid
            container
            direction='row'
            justifyContent={checkCentering()}
            alignItems='flex-start'
          >
            {renderCardContent('IntelliJ', IntelliJ)}
            {renderCardContent('VSC', VSC)}
            {renderCardContent('Git', Git)}
            {renderCardContent('Bash', Bash)}
            {renderCardContent('Arduino', Arduino)}
            {renderCardContent('Grafana', Grafana)}
          </Grid>
          <Collapse in={vcExpanded} timeout='auto' unmountOnExit>
            <Divider variant='middle' />
            {renderSliderContent('IntelliJ', 70)}
            {renderSliderContent('VSC', 50)}
            {renderSliderContent('Git', 50)}
            {renderSliderContent('Bash', 50)}
            {renderSliderContent('Arduino', 20)}
            {renderSliderContent('Grafana', 10)}
          </Collapse>
        </Card>
        <Card className='skillCardRoot'>
          <CardHeader
            className='skillCardHeader'
            title='Frameworks'
            action={
              <div>
                <IconButton
                  onClick={handleClickOpen}
                  aria-label='info'
                  size='large'
                >
                  <InfoIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: fwExpanded,
                  })}
                  onClick={handleFwExpandClick}
                  aria-expanded={fwExpanded}
                  aria-label='show more'
                  size='large'
                >
                  <ExpandMoreIcon />
                </IconButton>
              </div>
            }
          />
          <Divider variant='middle' />
          <Grid
            container
            direction='row'
            justifyContent={checkCentering()}
            alignItems='flex-start'
          >
            {renderCardContent('Spring-Boot', Spring)}
            {renderCardContent('Flutter', Flutter)}
            {renderCardContent('ReactJS', ReactJS)}
            {renderCardContent('NodeJS', NodeJS)}
            {renderCardContent('Android', Android)}
          </Grid>
          <Collapse in={fwExpanded} timeout='auto' unmountOnExit>
            <Divider variant='middle' />
            {renderSliderContent('Spring-Boot', 50)}
            {renderSliderContent('Flutter', 30)}
            {renderSliderContent('ReactJS', 30)}
            {renderSliderContent('NodeJS', 10)}
            {renderSliderContent('Android', 10)}
          </Collapse>
        </Card>
        <Card className='skillCardRoot'>
          <CardHeader
            className='skillCardHeader'
            title='Operating Systems'
            action={
              <div>
                <IconButton
                  onClick={handleClickOpen}
                  aria-label='info'
                  size='large'
                >
                  <InfoIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: osExpanded,
                  })}
                  onClick={handleOsExpandClick}
                  aria-expanded={osExpanded}
                  aria-label='show more'
                  size='large'
                >
                  <ExpandMoreIcon />
                </IconButton>
              </div>
            }
          />
          <Divider variant='middle' />
          <Grid
            container
            direction='row'
            justifyContent={checkCentering()}
            alignItems='flex-start'
          >
            {renderCardContent('Mac OS (Active)', Apple)}
            {renderCardContent('Windows', Windows)}
            {renderCardContent('Ubuntu', Ubuntu, true)}
          </Grid>
          <Collapse in={osExpanded} timeout='auto' unmountOnExit>
            <Divider variant='middle' />
            {renderSliderContent('Mac OS', 50)}
            {renderSliderContent('Windows', 50)}
            {renderSliderContent('Ubuntu', 50)}
          </Collapse>
        </Card>
      </div>
    </div>
  );
}

export default Skills;
