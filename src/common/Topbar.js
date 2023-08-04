import React, { useState,useContext } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { BsBell } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { IoIosArrowDown } from 'react-icons/io'
import { AiOutlineMenuFold } from 'react-icons/ai'
import './style.scss'
import logo from '../assets/img/logo.png'
import { Link } from "react-router-dom";
import { TbTextDirectionLtr } from "react-icons/tb";
import { LoginContext } from "../components/Authentication/LoginContext";
export const Topbar = ({ students, notifications }) => {
    const currentTime = new Date().toLocaleTimeString()
    const currentDate = new Date().toLocaleDateString()
    const {loginValue}=useContext(LoginContext);
    const value=useContext(LoginContext);


    return (
        <div className="top-bar ">
            <div className="d-none d-sm-block d-md-none">
                <AiOutlineMenuFold />
            </div>
            <div className="top-bar-item ">

                <div className="row  ">

                    <Link to='/' className="top-bar-logo col-lg-2 d-lg-flex d-md-none" >
                        <img src={logo} alt="" width={50} />
                        <div className="text-logo"> eStudiez</div>
                    </Link>
                    <div className="top-bar-search col-lg-5 col-md-6 ">
                        <div className="input-group">
                            <span className="input-group-text input-group-icon-search"><CiSearch className="icon-search" /></span>
                            <input type="text" placeholder="Search Courses, Documents, Activities... " className="form-control top-bar-search-input" />
                        </div>

                    </div>
                    <div className="top-bar-time col-lg-2  " >
                        {currentTime} <br />
                        {currentDate}
                    </div>

                    <div className="top-bar-icon-notification col-lg-1 d-flex align-items-center justify-content-end">
                        <BsBell />
                    </div>
                    <div className="top-bar-info col-lg-2 ">
                        <div>
                            <img src={require(`../assets/img/img-todolist.jpg`)} alt="avatar" className="avatar" width={40} />
                            <span className="info_name"> {loginValue.email}<span></span></span>
                        </div>
                        <span><IoIosArrowDown /></span>

                    </div>
                </div>


            </div>
        </div>
    )
}