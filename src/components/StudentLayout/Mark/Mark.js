import React from "react"
import {Row,Col} from 'react-bootstrap'
import './Mark.scss'


const Mark = () => {
    return (
        <div className="Mark_student">
            <div className="Mark_div">
                <Row>
                    <Col lg={8} className="col_left">
                        <div className="banner_welcome">
                            
                        </div>
                        {/* <Row>
                            <Col lg={8}></Col>
                            <Col lg={4}></Col>
                        </Row> */}
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

export default Mark

