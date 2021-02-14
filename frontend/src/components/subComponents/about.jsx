import React from 'react';
import Typography from '@material-ui/core/Typography';

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
        <Typography variant='body1' className='aboutTextThick'>
          Hello, my name is Jan.
        </Typography>
        <Typography variant='body1' className='aboutText'>
          Im a {calculateAge()} year old Backend Developer and Computer Science
          student from Munich, Germany. <br />
          I&apos;m currently working as a Java Backend developer and finishing
          my bachelor&apos;s degree in parallel.
        </Typography>
        <Typography variant='body1' className='aboutText'></Typography>
        <Typography
          component={'span'}
          variant='body1'
          className='aboutText aboutTextTab'
        >
          <strong>Current Focus:</strong>
          <ul>
            <li>Professional: Java // Backend Development</li>
            <li>Private: Golang // React</li>
          </ul>
        </Typography>
      </div>
    </div>
  );
}

export default About;
