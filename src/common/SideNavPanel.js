import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/StudentLayout/Home/HomePage'
import { SideBarItem } from './SideBarItem'
import { Topbar } from './Topbar';
import { Navigation } from './Topbar';
import { students, notifications } from '../initialData/student';
import './style.scss'
export const SideNavPanel = ({ menuItems }) => {
  return (

    <div className="edu-master " >
      <Topbar />
      <SideBarItem menuItems={menuItems} />
      {menuItems.map((menuItem, index) => (
        <Routes key={index}>
          <Route path={menuItem.link} element={menuItem.component} />
        </Routes>
      ))}
    </div>

  );
};