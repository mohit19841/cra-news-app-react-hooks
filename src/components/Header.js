import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div>
        <h2>
          <Link to='./'>React Hooks News App for UK</Link>
        </h2>
      </div>

      <div>
        <div id='filters' className='filters'>
          <Link to='./'>Headlines</Link>
          <Link to='./politics'>Politics</Link>
          <Link to='./business'>Business</Link>
          <Link to='./sports'>Sports</Link>
          <Link to='./cryptos'>Cryptos</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
