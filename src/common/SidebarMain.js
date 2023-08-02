import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/StudentLayout/Home/Home'
import {SideBarItem} from './SideBarItem'
import { Navigation } from '../common/Navigation';
import { students, notifications } from '../initialData/student';
export const SidebarMain = ({ menuItems }) => {
  return (
    <Row>
        <div className="edu-master" >
        <Col lg={2}>
            <SideBarItem className="sidebar" menuItems={menuItems} />
        </Col>
        <Col lg={10}>
            <div className='content'>
          <Row>
          <Navigation students={students} notifications={notifications}/>
          </Row>
          <Row>
              <Col lg={12}>
                <Routes>
                <Route path="/" element={<Home />} />
                </Routes>
              </Col>
          </Row>
            </div>
        </Col>
        </div>
    </Row>
  );
};