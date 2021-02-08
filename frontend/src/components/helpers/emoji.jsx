import React from 'react';
import PropTypes from 'prop-types';

function Emoji(props) {
  const { label, symbol } = props;

  return (
    <span
      className='emoji'
      role='img'
      aria-label={label || ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </span>
  );
}

Emoji.propTypes = {
  label: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Emoji;
