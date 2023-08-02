import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/StudentLayout/Home/Home'
import {SideBarItem} from './SideBarItem'

export const SidebarMain = ({ menuItems }) => {
  return (
    <Row>
        <div className="edu-master" >
        <Col lg={2}>
            <SideBarItem className="sidebar" menuItems={menuItems} />
        </Col>
        <Col lg={10}>
            <div className='content'>
                <Routes>
                <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Col>
        </div>
    </Row>
  );
};