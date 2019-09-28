import React from 'react';
import classes from'./RightSidebar.module.css';

const RightSidebar = () => {
  return (
    <div className={classes.rightSidebar}>
      <div className={classes.avatar}>
        <img className={classes.menuItem} src="./img/Ellipse 9.png" alt="avatar"></img>
        <div className={classes.status}></div>
      </div>
      <div className={classes.avatar}>
        <img className={classes.menuItem} src="./img/Ellipse 10.png" alt="avatar"></img>
        <div className={classes.status}></div>
      </div>
      <div className={classes.avatar}>
        <img className={classes.menuItem} src="./img/Ellipse 11.png" alt="avatar"></img>
        <div className={classes.status}></div>
      </div>
      <div className={classes.avatar}>
        <img className={classes.menuItem} src="./img/Ellipse 12.png" alt="avatar"></img>
        <div className={classes.status}></div>
      </div>
      <div className={classes.avatar}>
        <img className={classes.menuItem} src="./img/Ellipse 13.png" alt="avatar"></img>
        <div className={classes.status}></div>
      </div>
      <div className={classes.avatar}>
        <img className={classes.menuItem} src="./img/Ellipse 14.png" alt="avatar"></img>
        <div className={classes.status}></div>
      </div>
      <div className={classes.avatar}>
        <img className={classes.menuItem} src="./img/Ellipse 15.png" alt="avatar"></img>
        <div className={classes.status}></div>
      </div>
      <div className={classes.avatar}>
        <img className={classes.menuItem} src="./img/Ellipse 16.png" alt="avatar"></img>
        <div className={classes.status}></div>
      </div>
      
    </div>
  );
}

export default RightSidebar;