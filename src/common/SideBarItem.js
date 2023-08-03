import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { IoLogOutOutline } from 'react-icons/io5'
import { PiStudentDuotone } from 'react-icons/pi'
import { LiaChalkboardTeacherSolid } from 'react-icons/lia'
import { BsPeople } from 'react-icons/bs'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { TbDeviceImacSearch } from 'react-icons/tb'
import './style.scss'

export const SideBarItem = ({ menuItems }) => {
  const [activeItem, setActiveItem] = useState(null);

  // const handleClickActive = (itemId) => {
  //   setActiveItem(itemId);
  // };

  // path active
  const [activeLink, setActiveLink] = useState('');

  const location = useLocation();
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <aside className={`left-bar-main ${collapsed ? "collapsed" : ""} 	d-none d-sm-block`}>
      <div className="left-bar-list-menu">
        <label onClick={toggleCollapse} ><AiOutlineMenuFold className="left-bar-icon-list"></AiOutlineMenuFold></label>
        <ul>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}

            >
              <li
                key={index}
                className={` ${activeLink === `${item.link}` ? 'left-bar-active-item' : ''}`}

                {...(collapsed ? { title: item.content } : {})}
              >
                <div className="left-bar-item">
                  <span
                    className="item_icon_sidebar"

                  >
                    {item.icon}
                  </span> &nbsp;
                  <span className="item_content_sidebar">{item.content}</span>
                </div>


              </li>
            </Link>
          ))}
        </ul>
        <div className="left-bar-logout hide-title"  {...(collapsed ? { title: 'Logout' } : {})} >
          <IoLogOutOutline className="left-bar-icon-logout" /> <span>Logout</span>
        </div>
        <hr />
        <div className="hide-title" >
          <TbDeviceImacSearch className="left-bar-icon-access d-none " style={{ fontSize: '24px', margin: '20px 0 0 20px', cursor: 'pointer' }} />
        </div>

        <div className="left-bar-access">

          <h5 className="left-bar-text-access" >Statistical Access</h5>
          <div className=" left-bar-subtext-access">
            <p><BsPeople /> Accessing  </p><p>15</p>
          </div>
          <div className=" left-bar-subtext-access">
            <p><LiaChalkboardTeacherSolid />Teacher Login </p><p>15</p>
          </div>
          <div className=" left-bar-subtext-access">
            <p><PiStudentDuotone />Student Login </p><p>15</p>
          </div>

        </div>

      </div>
    </aside>
  );
};
