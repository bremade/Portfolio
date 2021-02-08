import React, { Component } from 'react';

class Login extends Component {
  handleSubmit(event) {
    event.preventDefault();
    if (event.target.length > 1) {
      const username = event.target[0].value;
      const password = event.target[1].value;
      fetch('/api/auth', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }).then((response) => {
        if (response.status !== 200) {
          window.alert('Bad username or password!');
        } else {
          window.setTimeout(() => {
            window.location.href = 'http://www.bremauer.cc';
          }, 2000);
        }
      });
    } else {
      window.alert('Please enter both username and password!');
    }
  }

  render() {
    return (
      <div>
        <div className='container-fluid section'>
          <div
            id='contact'
            style={{ position: 'absolute', top: '2000px', left: 0 }}
          />
          <div className='container'>
            <h1 className='text-center'>Login</h1>
            <p className='text'>
              Falls keine Logindaten vorhanden sind, können diese beim
              Seitenadmin angefragt werden.
            </p>
            <form className='row' onSubmit={this.handleSubmit}>
              <div className='col'>
                <div className='inputWrapper'>
                  <label className='coustomlabel'>
                    <span className='labelText'>Username</span>
                    <span className='labelRequired'> (required)</span>
                  </label>
                  <input
                    type='text'
                    name='username'
                    className='coustomForm'
                    id='nameInput'
                    placeholder='Enter username'
                  />
                </div>
                <div className='inputWrapper'>
                  <label className='coustomlabel'>
                    <span className='labelText'>Password</span>
                    <span className='labelRequired'> (required)</span>
                  </label>
                  <input
                    type='password'
                    name='password'
                    className='coustomForm'
                    id='emailInput'
                    placeholder='Enter password'
                  />
                </div>
                <div className='buttonRow'>
                  <button className='coustomButton'>Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
