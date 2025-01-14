import React, { useState } from 'react';
import './styles.css'


function App() {

  const [isOpen, setIsOpen] = useState(true); // State to toggle navbar
  const [isShown, setisShown] = useState(true);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const showProjects = () => {
    setisShown(!isShown);
  }

  return (
    <div>
      <button className={`sideNav-abs ${!isOpen ? 'openBtn' : ''}`} onClick={toggleNavbar}><i className='material-icons-outlined'>view_sidebar</i></button>
      <div className={`sideNav ${isOpen ? 'open' : ''}`}>
        <div className='sideNavTop'>
          <button className='profileBtn'><p>A</p>Ariunaa<i className="material-icons">expand_more</i></button>
          <i className="material-icons-outlined bell">notifications</i>
        </div>
        <div className="sideNavMenu">
          <li>
            <ul className='red'><i className="red material-icons">add_circle</i>Add task</ul>
            <ul><i className="material-icons">search</i>Search</ul>
            <ul className='active'><i className="material-icons">inbox</i>Inbox</ul>
            <ul><i className="material-icons">today</i>Today</ul>
            <ul><i className="material-icons">calendar_month</i>Upcoming</ul>
            <ul><i className="material-icons">grid_view</i>Filters & Labels</ul>
            <button className='projectsBtn'>My Projects<span><button><i className="material-icons">add</i></button><button onClick={showProjects}><i className="material-icons">{isShown ? 'chevron_right' : 'expand_more'}</i></button></span></button>
            {!isShown && (<li>
              <ul><i className="material-icons">tag</i>Home</ul>
            </li>)}
          </li>
        </div>
        <div className="sideNavBottom">
          <li>
            <ul><i className="material-icons">add</i>Add a team</ul>
            <ul><i className="material-icons">web</i>Browse templates</ul>
          </li>
        </div>
      </div>
    </div>
  )
}

export default App
