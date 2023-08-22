import './login.css';
import { useState } from 'react';
import { signError } from './error/loginError';
// import {onNav}
function LoginSign() {
  const [loginTransform, setLoginTransform] = useState('');
  const [error, setError] = useState({ isError: false, message: 'Nothing' });
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
    fName: '',
    lName: '',
    phoneNumber: '',
  });
  const onSignUp = (e) => {
    e.preventDefault();
    const [hasError, errorMessages] = signError({ ...loginDetails });
    console.log('error = ', hasError, errorMessages);
    setError({ isError: error, message: errorMessages });
    if (loginDetails.isError) return console.log('--ERROR==');
    let responses =''
    fetch('http://localhost:9000/api/loginSign', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginDetails),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        responses = res.json();
        if (responses.status === 'success'){
          window.setTimeout(()=>{
            // location.assign('/')
          })
        }
        return responses
      })
      .then((data) => data)
      .catch((error) => console.error('Fetch error:', error));

  };
  return (
    <div className='myLogin'>
    <div className='loginSign'>
      <div
        className='loginAndSign'
        onClick={(e) => e.target.className === 'login' || setLoginTransform('')}
      >
        <div className='sign'>
          <h1 className='signHeading'>Sign up</h1>
          <div className='names'>
            <input
              type='text'
              id='fname'
              name='fname'
              required
              minLength='3'
              placeholder='First Name'
              onChange={(e) =>
                setLoginDetails({
                  ...loginDetails,
                  fName: e.target.value.trim(),
                })
              }
            />
            <input
              type='text'
              id='lname'
              name='lname'
              required
              minLength='3'
              maxLength='10'
              placeholder='Last Name'
              onChange={(e) =>
                setLoginDetails({
                  ...loginDetails,
                  lName: e.target.value.trim(),
                })
              }
            />
          </div>
          <input
            type='phone number'
            id='phno'
            name='name'
            required
            maxLength='10'
            placeholder='Phone Number'
            onChange={(e) =>
              setLoginDetails({
                ...loginDetails,
                phoneNumber: e.target.value.trim(),
              })
            }
          />
          <br />
          <input
            type='email'
            id='email'
            name='name'
            required
            maxLength='20'
            placeholder='Email'
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, email: e.target.value.trim() })
            }
          />
          <br />
          <input
            type='password'
            id='pwd'
            name='name'
            required
            minLength='4'
            maxLength='20'
            placeholder='Password'
            onChange={(e) =>
              setLoginDetails({
                ...loginDetails,
                password: e.target.value.trim(),
              })
            }
          />
          {error.isError && <p className='errorSign'>**{error.message}**</p>}
          <div className='submit' onClick={onSignUp}>
            Sign up
          </div>
          <br />
        </div>
        <div
          className='login'
          onClick={() => setLoginTransform('translateY(-500px)')}
          style={{
            transform: `${
              loginTransform === 'translateY(-500px)'
                ? 'translateY(-500px)'
                : ''
            }`,
          }}
        >
          <h1 className='loginHeading'>Login </h1>
          <input
            type='email'
            id='lgemail'
            name='name'
            required
            minLength='4'
            maxLength='8'
            placeholder='Email'
          />
          <br />
          <input
            type='password'
            id='lgpwd'
            name='name'
            required
            minLength='4'
            maxLength='8'
            placeholder='Password'
          />
          <div className='lgsubmit'>Login</div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default LoginSign;
