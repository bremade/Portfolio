import React from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import Toast from 'light-toast';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';

const SITE_KEY = '6LehhVYaAAAAAEnJ3ynfzXqdA9k4PtEh3x63---T';
const recaptchaRef = React.createRef();

async function onSubmit(data) {
  const token = await recaptchaRef.current.executeAsync();

  if (token != '') {
    axios({
      method: 'POST',
      url: '/api/v1/mail/send',
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
        token: token,
      },
    })
      .then(() => {
        Toast.success('Message was sent successfully.');
      })
      .catch(() => {
        Toast.fail('Message could not be sent.');
      });
  }
}

function EmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form className='needs-validation' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className='inputWrapper'>
            <input
              className='customForm'
              type='text'
              {...register('name', {
                required: 'This field is required.',
                maxLength: {
                  value: 51,
                  message: 'The name must be between 1 and 51 characters long.',
                },
              })}
              placeholder='Your name'
            />
            {errors.name && <p className='inputError'>{errors.name.message}</p>}
          </div>
          <div className='inputWrapper'>
            <input
              className='customForm'
              type='text'
              {...register('email', {
                required: 'This field is required.',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Please provide a valid email adress.',
                },
              })}
              placeholder='Your email'
            />
            {errors.email && (
              <p className='inputError'>{errors.email.message}</p>
            )}
          </div>
        </div>
        <div>
          <div id='textArea' className='inputWrapper'>
            <textarea
              className='customForm customArea'
              type='text'
              {...register('message', {
                required: 'This field is required.',
                maxLength: {
                  value: 5001,
                  message:
                    'The message must be between 1 and 5001 characters long.',
                },
              })}
              rows='5'
              placeholder='Your message'
            />
            {errors.message && (
              <p className='inputError'>{errors.message.message}</p>
            )}
          </div>
        </div>
        <div className='buttonRow'>
          <button type='submit' className='customButton'>
            Submit
          </button>
        </div>
        <small className='captchaPolicy'>
          This site is protected by reCAPTCHA and the Google
          <a href='https://policies.google.com/privacy'>Privacy Policy</a> and
          <a href='https://policies.google.com/terms'>Terms of Service</a>
          apply.
        </small>
      </form>
      <ReCAPTCHA ref={recaptchaRef} sitekey={SITE_KEY} size='invisible' />
    </div>
  );
}

export default EmailForm;
