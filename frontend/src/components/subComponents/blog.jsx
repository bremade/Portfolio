import React, { Component } from 'react';
import axios from 'axios';
import ShareIcon from '@mui/icons-material/Share';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Typography from '@mui/material/Typography';
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardHeader,
  Avatar,
  Button,
  IconButton,
  Grid,
} from '@mui/material';
import Git from '../../images/git.png';
import Profile from '../../images/profil.png';
import BaPreview from '../../images/bachelorarbeit.png';
import Inno332Preview from '../../images/inno332.png';
import { beautifyDate } from '../../scripts/blogUtils';
import { v4 as uuidv4 } from 'uuid';

function createCard(
  keyId,
  blogImg,
  userpic,
  username,
  title,
  date,
  body,
  link,
) {
  if (!blogImg) {
    blogImg = Git;
  }

  return (
    <Card key={keyId} className='blogCardRoot'>
      <CardHeader
        className='blogCardHeader'
        avatar={
          <Avatar src={userpic} aria-label='avatar' className='blogCardAvatar'>
            {username}
          </Avatar>
        }
        title={title}
        subheader={date}
      />
      <CardMedia className='blogCardMedia' image={blogImg} title={title} />
      <CardContent>
        <Typography
          variant='body2'
          noWrap={true}
          color='textSecondary'
          component='p'
        >
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='settings' href={link} size='large'>
          <ExitToAppIcon />
        </IconButton>
        <IconButton
          aria-label='share'
          href={`mailto:?subject=${title}&body=${link}`}
          size='large'
        >
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const getPostIds = async () => {
      var randomPosts = await axios
        .get('/api/v1/blog/retrieve')
        .then((resp) => resp.data)
        .then((data) => {
          let posts = [];
          data['posts'].forEach((post) => {
            posts.push(post);
          });
          return posts;
        })
        .catch('getPostIds: error while retrieving blog posts.');

      this.setState({ posts: randomPosts });
    };

    getPostIds();
  }

  renderProjectContent() {
    var projectContent = [];
    // Bachelorarbeit
    projectContent.push(
      createCard(
        uuidv4(),
        BaPreview,
        Profile,
        'Jan Bremauer',
        'Serverless Functions auf Kubernetes',
        beautifyDate('2022-03-03'),
        'Serverless ist ein aufstrebendes Paradigma des Cloud-Computings und der am schnellsten wachsende Cloud-Trend in den letzten Jahren',
        'https://blog.doubleslash.de/serverless-functions-auf-kubernetes-welche-open-source-loesung-ist-die-richtige/',
      ),
    );
    // INNO-334
    projectContent.push(
      createCard(
        uuidv4(),
        Inno332Preview,
        Profile,
        'Jan Bremauer',
        'Prozessverbesserungen durch IoT-Buttons',
        beautifyDate('2023-05-05'),
        'Eingefahrene Prozesse in der eigenen Unternehmensstruktur? IoT-Buttons können helfen, diese zu optimieren.',
        'https://blog.doubleslash.de/prozessverbesserungen-durch-iot-buttons/',
      ),
    );

    var posts = this.state.posts;
    if (posts.length === 0) {
      return projectContent;
    }
    if (!checkMobile()) {
      posts.forEach((post) => {
        projectContent.push(
          createCard(
            uuidv4(),
            post.feature_image,
            post.primary_author.profile_image,
            post.primary_author.name.substring(0, 2),
            post.title,
            beautifyDate(post.published_at.substring(0, 10)),
            post.excerpt,
            post.url,
          ),
        );
      });
    }
    return projectContent;
  }

  render() {
    return (
      <div>
        <h3 className='sectionTitle'>Blog</h3>
        <div className='sectionContainer'>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            alignContent='center'
            className='sectionGrid'
          >
            {this.renderProjectContent()}
          </Grid>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            alignContent='center'
            className='sectionGrid'
          >
            <Button
              className='blogReadMore'
              target='_blank'
              href='https://blog.bremauer.cc/'
            >
              Read more ...
            </Button>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Blog;
