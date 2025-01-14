import React, { useState } from 'react';
import SideNav from './components/SideNav';
import SideNavBottom from './components/SideNavBottom';
import SideNavMenu from './components/SideNavMenu';

import './global.css'


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
      <button className={`sideNav-abs ${!isOpen ? 'openBtn' : ''}`} onClick={toggleNavbar}>
        <i className='material-icons-outlined'>view_sidebar</i>
      </button>
      <SideNav isOpen={isOpen}>
        <div className='sideNavTop'>
        <button className="profileBtn">
    <p>A</p>Ariunaa<i className="material-icons">expand_more</i>
  </button>
            <i className="material-icons-outlined bell">notifications</i>
        </div>
        <SideNavMenu showProjects={showProjects} isShown={isShown} />
        <SideNavBottom />
      </SideNav>
    </div>
  )
}

export default App
