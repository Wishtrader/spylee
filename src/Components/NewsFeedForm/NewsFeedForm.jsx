import React from 'react';
import classes from './Newsfeedform.module.css';

const NewsFeedForm = () => {
  return (
    <div className={classes.feedformwrapper} id="feedformwrapper">
      <img className={classes.avatar} src="./img/avatar.png" alt="avatar"></img>
      <input className={classes.tab} type="radio" name="tab" id="tab-1" defaultChecked/>
      <label className={classes.labeltab} htmlFor="tab-1">
      <img className={classes.tabIcon} src="./img/post.png" alt="status"></img>
      Status</label>
      <input className={classes.tab} type="radio" name="tab" id="tab-2" />
      <label className={classes.labeltab} htmlFor="tab-2">
      <img className={classes.tabIcon} src="./img/multimedia.png" alt="multimedia"></img>
      Multimedia</label>
      <input className={classes.tab} type="radio" name="tab" id="tab-3" />
      <label className={classes.labeltab} htmlFor="tab-3">
      <img className={classes.tabIcon} src="./img/blog.png" alt="blogpost"></img>
      Blog Post</label>
      <div className={classes.tabForm}>
        <textarea className={classes.feedtextarea1} placeholder="Share what you are thinking here… 1"></textarea>
        <textarea className={classes.feedtextarea2} placeholder="Share what you are thinking here… 2"></textarea>
        <textarea className={classes.feedtextarea3} placeholder="Share what you are thinking here… 3"></textarea>
      </div>
      <div className={classes.buttonWrapper}>
        <button className={`${classes.btn} ${classes.preview}`}>Preview</button>
        <button className={`${classes.btn} ${classes.status}`}>Post Status</button>
      </div>
    </div>
  );
}

export default NewsFeedForm;
