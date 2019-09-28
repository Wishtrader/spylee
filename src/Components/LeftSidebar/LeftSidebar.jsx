import React from 'react';
import classes from'./LeftSidebar.module.css';

const LeftSidebar = () => {
  return (
    <div className={classes.leftSidebar}>
      <img className={classes.menuItem} src="./img/menu.png" alt="menu"></img>
      <img className={classes.menuItem} src="./img/rss-symbol.png" alt="newsfeed"></img>
      <img className={classes.menuItem} src="./img/rate-star-button.png" alt="star"></img>
      <img className={classes.menuItem} src="./img/high-five.png" alt="friends"></img>
      <img className={classes.menuItem} src="./img/headphones.png" alt="music"></img>
      <img className={classes.menuItem} src="./img/calendar-with-a-clock-time-tools.png" alt="calendar"></img>
      <img className={classes.menuItem} src="./img/meeting.png" alt="community"></img>
      <img className={classes.menuItem} src="./img/gift.png" alt="birthday"></img>
      <img className={classes.menuItem} src="./img/statistics.png" alt="statistics"></img>
      <img className={classes.menuItem} src="./img/sun.png" alt="weather"></img>
      <img className={classes.menuItem} src="./img/show-apps-button.png" alt="widgets"></img>
    </div>
  );
}

export default LeftSidebar;