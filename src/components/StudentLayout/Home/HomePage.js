import React from "react"
import {Row,Col, ProgressBar } from 'react-bootstrap'
import './Home.scss'

import {students} from '../../../initialData/student'
import {teachers} from '../../../initialData/teacher'

import {PiHandWavingFill} from 'react-icons/pi'

import imgstudent from '../../../assets/img/schoolchildren.png'

const HomePage = () => {
    return (
        <div className="homepage_student">
            <div className="homepage_div">
                <Row>
                    <Col lg={8} className="col_left">
                        <div className="banner_welcome">
                            <Col lg={8}>
                                <div className="banner_content">
                                    <span className="content_wel">Welcom student, {students[0].name} <PiHandWavingFill className="icon_hand"/> </span>
                                    <br/>
                                    <div className="content_small">
                                        <span>You're learn <strong>70%</strong> of your goal this week</span>
                                        <br/>
                                        <span>Keep it up and improve your progress</span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="img_pos">
                                    <img alt="" src={imgstudent} className="img_children"/>
                                </div>
                            </Col>
                        </div>
                        <div className="prepare_progress">
                            <Row>
                                <Col lg={8}>
                                    <div className="content_prepare_div">
                                        <div className="content_prepare">
                                            <div className="label_header">
                                                <label className="label_content">Tasks</label>
                                                <a className="label_view"><strong>View all</strong></a>
                                            </div>
                                            <div className="content_task_div">
                                                <Row>
                                                    <Col lg={3}>
                                                        <img className='avatar_task' src={teachers[0].avatar} alt />

                                                    </Col>
                                                    <Col lg={9}>
                                                        <ul className="ul_task">
                                                            <strong className="name_teacher">{teachers[0].name}</strong>
                                                            <li className="task_name">Please download this file to do the exercise</li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg={3}>
                                                        <img className='avatar_task' src={teachers[0].avatar} alt />

                                                    </Col>
                                                    <Col lg={9}>
                                                        <ul className="ul_task">
                                                            <strong className="name_teacher">{teachers[0].name}</strong>
                                                            <li className="task_name">Please download this file to do the exercise</li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="content_progress">
                                        <Row>
                                            <span className="content_label">The learning process.</span>
                                        </Row>
                                        <div className="content_progress_div">
                                            <Row>
                                                <Col lg={7} className="title_subject">
                                                    <div className="title_subject_div">
                                                        <label>Mathematics</label><br/>
                                                        <span>Unit 3</span>
                                                    </div>
                                                </Col>
                                                <Col lg={5} className="progress_subject">
                                                    <div className="circular-progress">
                                                        <ProgressBar className="progress_posi" animated now={45}/>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={7} className="title_subject">
                                                    <div className="title_subject_div">
                                                        <label>Mathematics</label><br/>
                                                        <span>Unit 3</span>
                                                    </div>
                                                </Col>
                                                <Col lg={5} className="progress_subject">
                                                    <div className="circular-progress">
                                                        <ProgressBar className="progress_posi" animated now={45}/>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={4} className="col_right">
                        <div className="noti_event">

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default HomePage

