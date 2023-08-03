import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem} from 'cdbreact';
import {IoLogOutOutline} from 'react-icons/io5'
import {PiStudentDuotone} from 'react-icons/pi'
import {LiaChalkboardTeacherSolid} from 'react-icons/lia'
import {BsPeople} from 'react-icons/bs'
import './style.scss'

export const SideBarItem = ({menuItems, }) => {
  const [activeItem, setActiveItem] = useState(null)

  const handleClickActive = (itemId) => {
    setActiveItem(itemId)
  }

    return (
        <div className="sidebar_div" style={{ display: 'flex', height: '120vh'}}>
          <CDBSidebar className="sidebar_main">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a
                href="/"
                className="text-decoration-none"
                style={{ color: 'inherit' }}
              >
                Sidebar
              </a>
            </CDBSidebarHeader>

            <CDBSidebarContent>
              <CDBSidebarMenu prefix={<i className="fa fa-bars fa-large"></i>}>
                {menuItems && menuItems.map((item,index) => (
                  <Link
                    key={index}
                    to={item.link}
                  >

                   <CDBSidebarMenuItem 
                      className={`item_sidebar ${activeItem === index ? 'active': ''}`}
                      onClick = {() => handleClickActive(index)}
                    >
                      <span className="item_icon_sidebar">{item.icon}</span> &nbsp;
                      <span className="item_content_sidebar">{item.content}</span>
                    </CDBSidebarMenuItem>
                  </Link>
                ))}
                
                <CDBSidebarMenuItem className="signout_sidebar">
                    <IoLogOutOutline className="signout_icon_sidebar"/> &nbsp;
                    <span className="signout_item_sidebar">Sign out</span>
                </CDBSidebarMenuItem>
              </CDBSidebarMenu>

              <CDBSidebarContent className="access_sidebar">
                <CDBSidebarMenuItem className="access_sidebar_header">
                    <div className="title_accesss_sidebar">Statistical Access</div>
                </CDBSidebarMenuItem>
                <CDBSidebarMenuItem className="access_sidebar_body">
                  <div className="access_sidebar_item">
                    <div className="accesssing_sidebar">
                      <div className="item_access">
                        <BsPeople className="icon_access"/>&nbsp;
                        <span className="content_access">Accessing</span>
                      </div>
                      <span className="count_access">15</span>
                    </div>
                    <div className="accesssing_sidebar">
                      <div className="item_access">
                        <PiStudentDuotone className="icon_access"/>&nbsp;
                        <span className="content_access">Student Login</span>
                      </div>
                      <span className="count_access">2</span>
                    </div>
                    <div className="accesssing_sidebar">
                      <div className="item_access">
                        <LiaChalkboardTeacherSolid className="icon_access"/>&nbsp;
                        <span className="content_access">Teacher Login</span>
                      </div>
                      <span className="count_access">15</span>
                    </div>
                  </div>
                </CDBSidebarMenuItem>
              </CDBSidebarContent>
            </CDBSidebarContent>
            <CDBSidebarFooter>
            </CDBSidebarFooter>
          </CDBSidebar>
        </div>
    )
}