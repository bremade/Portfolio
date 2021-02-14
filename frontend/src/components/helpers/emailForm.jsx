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
        this.resetForm();
      })
      .catch(() => {
        Toast.fail('Message could not be sent.');
      });
  }
}

function EmailForm() {
  const { register, errors, handleSubmit } = useForm();

  return (
    <div>
      <form className='needs-validation' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className='inputWrapper'>
            <input
              className='customForm'
              type='text'
              name='name'
              placeholder='Your name'
              ref={register({
                required: 'This field is required.',
                maxLength: {
                  value: 51,
                  message: 'The name must be between 1 and 51 characters long.',
                },
              })}
            />
            <ErrorMessage
              className='inputError'
              errors={errors}
              name='name'
              render={({ message }) => <p className='inputError'>{message}</p>}
            />
          </div>
          <div className='inputWrapper'>
            <input
              className='customForm'
              type='text'
              name='email'
              placeholder='Your email'
              ref={register({
                required: 'This field is required.',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Bitte gebe eine gültige E-Mail Adresse an.',
                },
              })}
            />
            <ErrorMessage
              className='inputError'
              errors={errors}
              name='email'
              render={({ message }) => <p className='inputError'>{message}</p>}
            />
          </div>
        </div>
        <div>
          <div id='textArea' className='inputWrapper'>
            <textarea
              className='customForm customArea'
              type='text'
              name='message'
              rows='5'
              placeholder='Your message'
              ref={register({
                required: 'This field is required.',
                maxLength: {
                  value: 5001,
                  message:
                    'The message must be between 1 and 5001 characters long.',
                },
              })}
            />
            <ErrorMessage
              className='inputError'
              errors={errors}
              name='message'
              render={({ message }) => <p className='inputError'>{message}</p>}
            />
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
