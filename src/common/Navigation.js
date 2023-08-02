import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import {BsBell} from 'react-icons/bs'
import './style.scss'

export const Navigation = ({students, notifications}) => {
    const currentTime = new Date().toLocaleTimeString()
    const currentDate = new Date().toLocaleDateString()

    return (
        <div className="nav_main">
            <div className="logo_nav">
                <img className="logo_item" src="https://edunet.mylms.com.my/pluginfile.php/1/theme_archaius/logo/1655449568/logo_edunet_2.png"/>
            </div>
            <div className="search_nav">
                <input className="search_item" type="text" placeholder="Courses, Documents,..." />
            </div>
            <div className="timenow_nav">
                {currentTime} <br/>
                {currentDate}
            </div>
            <div className="dropdown_noti">
                <Dropdown>
                    <Dropdown.Toggle className="noti_nav">
                        <BsBell/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown_list_noti">
                        {notifications && notifications.map((notification) => (
                            <Dropdown.Item key={notification.id} className="dropdown_menu_item" href="#/action-1">
                                {notification.message}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>


            <div className="info_nav">
                <Dropdown>
                    <Dropdown.Toggle className="dropdown_toggle">
                        <div className="info_avatar"></div>
                        <div className="info_name">{students[0].name} &nbsp;</div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown_menu">
                        <Dropdown.Item className="dropdown_menu_item" href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item className="dropdown_menu_item" href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item className="dropdown_menu_item" href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}