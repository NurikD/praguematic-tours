import React from 'react';
import '../styles/Sidebar.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__item">Discover the Beauty</li>
        <li className="sidebar__item">Unwind and Relax</li>
        <li className="sidebar__item">Embrace Innovation</li>
        <li className="sidebar__item">Timeless Elegance</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
