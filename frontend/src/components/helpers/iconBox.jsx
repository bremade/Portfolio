import React from 'react';
import PropTypes from 'prop-types';

function IconBox(props) {
  const Icon = props.icon;

  const { radius } = props;

  return (
    <div className='iconBox' style={{ borderRadius: radius + '%' }}>
      <Icon />
    </div>
  );
}

IconBox.propTypes = {
  icon: PropTypes.object.isRequired,
  radius: PropTypes.number,
};

IconBox.defaultProps = {
  radius: 25,
};

export default IconBox;
