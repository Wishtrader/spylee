import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
      	<a className={classes.brand} href="index.html"><img src='./img/bug.png' alt='logo'></img></a>
      	<p>Newsfeed</p>
        <div className={classes.searchWrapper}>
        <input type="text" placeholder="Search here people or pages…"></input>
        <img className={classes.searchImg} src='./img/find.png' alt='find'></img>
      </div>
      </div>
      <div className={classes.notifyWrapper}>
        <div className={classes.notify}>
          <img className={classes.notifyIcon} src='./img/friends.png' alt='friends'></img>
          <div className={`${classes.counter} ${classes.friendsCounter}`}>6</div>
        </div>
        <div className={classes.notify}>
          <img className={classes.notifyIcon} src='./img/chat.png' alt='friends'></img>
          <div className={`${classes.counter} ${classes.chatCounter}`}>8</div>
        </div>
        <div className={classes.notify}>
          <img className={classes.notifyIcon} src='./img/notification.png' alt='notification'></img>
          <div className={`${classes.counter} ${classes.notificationCounter}`}>2</div>
        </div>
      </div>
      <div className={classes.userWrapper}>  
        <img src="./img/avatar.png" alt="avatar"></img>
        <div className={classes.status}></div>
        <div className={classes.profileWrapper}>
          <div className={classes.profileRow}>
            <p className={classes.name}>John Dow</p>
            <div className={classes.triangle}></div>
          </div>
          <p className={classes.pseudonym}>Old Pioneer</p>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
