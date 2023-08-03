import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/StudentLayout/Home/HomePage' 
import {SideBarItem} from './SideBarItem'
import { Navigation } from './Navigation';
import { students, notifications } from '../initialData/student';
import './style.scss'
export const SideNavPanel = ({ menuItems }) => {
  return (
    <Row>
        <div className="edu-master" >
        <Col lg={2}>
            <SideBarItem className="sidebar" menuItems={menuItems} />
        </Col>
        <Col lg={10}>
            <div className='content' style={{left: '1080px'}}>
          <Row>
          <Navigation students={students} notifications={notifications}/>
          </Row>
            <Row>
                <Col lg={12} className='body'>
                  {menuItems.map((menuItem, index)=> (
                    <Routes key={index}>
                        <Route path={menuItem.link} element={menuItem.component} />
                    </Routes>
                  ))}
                </Col>
            </Row>
            </div>
        </Col>
        </div>
    </Row>
  );
};