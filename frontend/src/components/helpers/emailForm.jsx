import React from 'react';
import axios from 'axios';
import Toast from 'light-toast';
import { useForm } from 'react-hook-form';
import { checkCaptchaAnswer } from '../../scripts/captchaUtils';

function onSubmit(data) {
  if (checkCaptchaAnswer(data.captcha)) {
    axios({
      method: 'POST',
      url: '/api/v1/mail/send',
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    })
      .then(() => {
        Toast.success('Message was sent successfully.');
      })
      .catch(() => {
        Toast.fail('Message could not be sent.');
      });
  } else {
    Toast.fail('Request was declined to prevent spam. Please add a correct answer.');
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
                  message: 'Please provide a valid email address.',
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
        <div>
          <div className='inputWrapper'>
            <input
                className='customForm'
                type='text'
                {...register('captcha', {
                  required: 'This field is required.',
                  pattern: {
                    value: /^(mon|tues|wednes|thurs|fri|satur|sun)day$/i,
                    message: 'Please provide a valid day of the week.',
                  },
                })}
                rows='5'
                placeholder='Tomorrows weekday'
            />
            {errors.captcha && (
                <p className='inputError'>{errors.captcha.message}</p>
            )}
          </div>
        </div>
        <div className='buttonRow'>
          <button type='submit' className='submitButton'>
            Submit
          </button>
        </div>
      </form>

    </div>
  );
}

export default EmailForm;
