import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea,
} from '@material-ui/core';

/* eslint-disable */
function renderProjectContent(projectImg, title, h2, body) {
  return (
    <Card
      className='cardRoot'
      onMouseOver={this.toggleRaised()}
      onMouseOut={this.toggleRaised()}
      raised={this.state.raised}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          className='cardMedia'
          src={projectImg}
          title={title}
        />
        <CardContent className='cardContent'>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            style={{ color: '#912c31' }}
          >
            {h2}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='cardButtons'>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      raised: false,
    };
    this.toogleRaised = this.toogleRaised.bind(this);
  }

  toogleRaised() {
    this.setState({ raised: !raised });
  }

  render() {
    return (
      <div>
        <h3 className='sectionTitle'>Projects</h3>
        <div className='sectionContainer'>
          <Typography paragraph className='contentBlock'>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </div>
      </div>
    );
  }
}

export default Projects;
