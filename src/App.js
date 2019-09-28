import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LeftSidebar from './Components/LeftSidebar/LeftSidebar';
import RightSidebar from './Components/RightSidebar/RightSidebar';
import NewsFeed from './Components/NewsFeed/NewsFeed';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <LeftSidebar />
      <RightSidebar />
      <div>
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;