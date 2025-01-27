import React, { useState } from 'react';
import SideNav from './components/SideNav';
import { menu, projects, bottom } from './config/navbar';
import './global.css'
import Inbox from './pages/Inbox';


function App() {

  const [isOpen, setIsOpen] = useState(true);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const [isShown, setisShown] = useState(true);
  const showProjects = () => {
    setisShown(!isShown);
  }

  return (
    <div>
      <button className={`sideNavBtn ${!isOpen ? 'openBtn' : ''}`} onClick={toggleNavbar}>
        <i className='material-icons-outlined'>view_sidebar</i>
      </button>
      <SideNav isShown={isShown}
        showProjects={showProjects}
        isOpen={isOpen}
        menu={menu}
        projects={projects}
        bottom={bottom} />
      <div className={`${isOpen ? 'open' : 'closed'} absolute top-0 flex border-b-2 justify-center`}>
        <p className="text-xl font-bold p-3">Inbox</p>
      </div>
      <div className="absolute flex right-0 mt-1 top-0">
        <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 m-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg></button>
        <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 m-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg></button>
        <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 m-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg></button>
      </div>
      <div className={`flex justify-center ease-in duration-200 ${isOpen ? 'ml-60' : ''}`}><Inbox /></div>
    </div>
  )
}

export default App
