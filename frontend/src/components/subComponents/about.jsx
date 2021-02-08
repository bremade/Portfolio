import React from 'react';
import Typography from '@material-ui/core/Typography';
import Emoji from '../helpers/emoji.jsx';

function calculateAge() {
  const birthday = new Date(1998, 5, 15);
  const currentDate = new Date();

  const years = currentDate.getFullYear() - birthday.getFullYear();
  const months = years * 12 + (currentDate.getMonth() - birthday.getMonth());

  const age = months / 12;
  return Math.trunc(age);
}

function About() {
  return (
    <div>
      <h3 className='sectionTitle'>About</h3>
      <div className='sectionContainer'>
        <Typography variant='body1' className='contentBlockThick'>
          Hi! I&apos;m Jan.
        </Typography>
        <Typography variant='body1' className='contentBlock'>
          A {calculateAge()} year old Computer Science student from Munich,
          Germany.
        </Typography>
        <Typography variant='body1' className='contentBlock'>
          Welcome to my Website! <Emoji symbol='✌' label='victoryHand' />
        </Typography>
        <Typography variant='body1' className='contentBlock contentBlockTab'>
          <strong>Current Focus:</strong> Java // Backend Development
        </Typography>
      </div>
    </div>
  );
}

export default About;
