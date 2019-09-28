import React from 'react';
import classes from'./Birthday.module.css';

const Birthday = (props) => {
  return (
    <div className={classes.birthdayWrapper} id="birthday">
      <img src='./img/birthday.png' alt='birthday'></img>
    </div>
  );
}

export default Birthday;