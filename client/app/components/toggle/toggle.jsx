import React from 'react';
import styles from './toggle.scss';

const Toggle = (props) => {
  const {
    type, onMouseUp, onMouseDown, right, left,
  } = props;

  const handleMouseDown = () => {
    onMouseDown(type);
  };

  const handleMouseUp = () => {
    onMouseUp();
  };

  const toggleLeftAndRightStyles = {
    left: `${left}px`,
    right: `${right}px`,
  };

  return (
    <div
      type={type}
      className={styles.toggle}
      style={toggleLeftAndRightStyles}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  );
};

export default Toggle;
