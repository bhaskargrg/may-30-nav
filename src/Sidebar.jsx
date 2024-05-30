import React from 'react'
import { links, social } from './data'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'

function Sidebar() {
  const{isSidebarOpen,closeSidebar}=useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"} `}>
      <div className="sidebar-header">
        <img src={logo} alt="" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((e) => {
          const { id, url, text, icon } = e;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icon">
        {social.map((e) => {
          const { id, url, icon } = e;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar