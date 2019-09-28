import React from 'react';
import NewsFeedForm from './../NewsFeedForm/NewsFeedForm';
import Weather from './../WeatherWidget/Weather';
import Birthday from './../BirthdayWidget/Birthday';

const NewsFeed = () => {
  return (
    <div className='pageWrapper'>
      <div className='leftColumn'>
        <Weather />
      </div>
      <div className='content'>
        <NewsFeedForm />
      </div>
      <div className='rightColumn'>
        <Birthday />
      </div>

    </div>
  );
}

export default NewsFeed;
