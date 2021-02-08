import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function NotFound() {
  return (
    <div id='notfound'>
      <div className='notfound'>
        <div className='error404'>
          <h3 className='notfoundh3'>Oops! Page not found</h3>
          <h1 className='notfoundh1'>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2 className='notfoundh2'>
          im sorry, but the page you requested was not found
        </h2>
        <Link className='notfoundbutton' to='/#'>
          Home Page
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
