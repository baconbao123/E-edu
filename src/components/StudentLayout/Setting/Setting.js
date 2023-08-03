import React,{useContext, useState} from 'react'
import {Row,Col,Container,Button} from  'react-bootstrap'
import { LoginContext } from '../../Authentication/LoginContext'
import { AiOutlineBell,AiOutlineUserAdd} from "react-icons/ai";
import './Setting.scss'
export default function Setting() {
    const {loginValue}=useContext(LoginContext)
    const [option,setOption]=useState();
    const [editFullName,setEditFullName]=useState(false)
    const [fullName,setFullName]=useState(loginValue.email)
  return (
   <Container>
    <Row>
        <Col xs={3}>
            <div className='fs-2 fw-bold'>
             
                Setting
            </div>
            <section onClick={()=> setOption('infor')} className={`${option==='infor'?'setting-options-check':''} setting-options mt-3`}>
            <AiOutlineUserAdd className='setting-icon fs-4 me-3 ms-3'/>
                
                Setting Infor
            </section>
            <section  onClick={()=> setOption('noti')} className={`${option==='noti'?'setting-options-check':''} setting-options mt-3`}>
            <AiOutlineBell className='setting-icon fs-4 me-3 ms-3'/>
                Setting notifications
            </section>
        </Col>
        <Col xs={9}>
        <div className='fs-4 fw-bold item-title'>
             
             Student information
         </div>
         <section className='mt-4 pb-4 setting-item'>
            <div className='fw-bold'>
                Full Name
            </div>
            <div className='mt-2'>
                <div  className={`${editFullName?'d-inline-block ':'d-none'} `}>
                    
                <input type="" name="" value={fullName} onChange={e=>setFullName(e.target.value)} />
                <span className='p-2 fs-5 text-danger' onClick={()=>setEditFullName(false)}>X</span>
                </div>
              <div className={`${editFullName?' d-none':'d-inline-block'}`}>
              {fullName} 
              </div>  
                
                <Button className='setting-button' onClick={()=>setEditFullName(true)}>Edit</Button>
            </div>
         </section>


        </Col>
    </Row>
   </Container>
  )
}
