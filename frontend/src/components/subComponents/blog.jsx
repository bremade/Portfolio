import React, { Component } from 'react';
import ShareIcon from '@material-ui/icons/Share';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
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
} from '@material-ui/core';
import Git from '../../images/git.png';
import { getRandomPosts, beautifyDate } from '../../scripts/blogUtils';
import { v4 as uuidv4 } from 'uuid';

/**
 * TODOS
 * 1. Get Posts and extract information
 * 2. Build card correctly
 * 3. Render card appropiatly
 */

function createCard(
  keyId,
  projectImg,
  userpic,
  username,
  title,
  date,
  body,
  link,
) {
  if (projectImg === null) {
    projectImg = Git;
  }

  return (
    <Card key={keyId} className='blogCardRoot'>
      <CardHeader
        avatar={
          <Avatar src={userpic} aria-label='avatar' className='blogCardAvatar'>
            {username}
          </Avatar>
        }
        title={title}
        subheader={date}
      />
      <CardMedia className='blogCardMedia' image={projectImg} title={title} />
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
        <IconButton aria-label='settings' href={link}>
          <ExitToAppIcon />
        </IconButton>
        <IconButton
          aria-label='share'
          href={`mailto:?subject=${title}&body=${link}`}
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
      const URL = 'https://blog.bremauer.cc/ghost/api/v3/content/posts';
      const key = process.env.GHOST_KEY;
      var URI = `${URL}?key=${key}&include=authors`;

      var posts = await fetch(URI)
        .then((resp) => resp.json())
        .then((data) => {
          let posts = [];
          data['posts'].forEach((post) => {
            posts.push(post);
          });
          return posts;
        })
        .catch('getPostIds: error while retrieving blog posts.');

      var randomPosts = getRandomPosts(posts, 4);
      console.log(randomPosts);
      this.setState({ posts: randomPosts });
    };

    getPostIds();
  }

  renderProjectContent() {
    var projectContent = [];

    var posts = this.state.posts;
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

    if (posts.length !== 0) {
      return projectContent;
      //return createCard(Git, posts[0].id, 'Title', '15.05.1998', 'Test');
    }
    return <div />;
    //return projectContent;
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
          <Button className='blogReadMore'>Read more ...</Button>
        </div>
      </div>
    );
  }
}

export default Blog;
