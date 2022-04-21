import React from 'react';
import EmailForm from '../helpers/emailForm.jsx';
import IconBox from '../helpers/iconBox.jsx';
import Hidden from '@mui/material/Hidden';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {
  return (
    <div>
      <h3 className='sectionTitle'>Contact</h3>
      <div className='sectionContainer mb-4'>
        <div className='container-fluid section'>
          <div
            id='contact'
            style={{ position: 'absolute', top: '2000px', left: 0 }}
          />
          <div className='container'>
            <div className='row mt-3 justify-content-center'>
              <div className='col-md-5'>
                <div className='row'>
                  <div className='col-md-12 contactBox'>
                    <div className='row'>
                      <div className='col-md-12 d-flex justify-content-center'>
                        <a href='mailto:jan@bremauer.cc'>
                          <IconBox icon={EmailIcon} />
                        </a>
                      </div>
                      <div className='col-md-12'>
                        <p className='mt-2 contactIconTitle'>Email</p>
                        <p className='contactIconText'>
                          jan@bremauer.cc
                          <br />
                          bremauer.jan2@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12 mt-5 contactBox'>
                    <div className='row justify-content-center mSocial'>
                      <div className='col-xs-4'>
                        <div className='row'>
                          <div className='col-md-12 d-flex justify-content-center text-center'>
                            <a href='https://www.linkedin.com/in/jan-bremauer-2a603611b/'>
                              <IconBox icon={LinkedInIcon} />
                            </a>
                          </div>
                          <Hidden lgDown>
                            <div className='col-md-12'>
                              <p className='mt-1 contactIconTitle'>LinkedIn</p>
                            </div>
                          </Hidden>
                        </div>
                      </div>
                      <div className='col-xs-4 mSocialResp'>
                        <div className='row'>
                          <div className='col-md-12 d-flex justify-content-center text-center'>
                            <a href='https://github.com/bremade'>
                              <IconBox icon={GitHubIcon} />
                            </a>
                          </div>
                          <Hidden lgDown>
                            <div className='col-md-12'>
                              <p className='mt-1 contactIconTitle'>Github</p>
                            </div>
                          </Hidden>
                        </div>
                      </div>
                      <div className='col-xs-4 mSocialResp'>
                        <div className='row'>
                          <div className='col-md-12 d-flex justify-content-center text-center'>
                            <a href='https://www.instagram.com/janb_98/'>
                              <IconBox icon={InstagramIcon} />
                            </a>
                          </div>
                          <Hidden lgDown>
                            <div className='col-md-12'>
                              <p className='mt-1 contactIconTitle'>Instagram</p>
                            </div>
                          </Hidden>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-5 colOffset contactBox'>
                <EmailForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
