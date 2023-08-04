import './App.scss';
import { menuItemStudents } from './initialData/dataMenu';
import { useEffect, useState } from 'react';

import { LoginContext } from './components/Authentication/LoginContext';
import { useNavigate } from 'react-router-dom';
import Login from './components/Authentication/login';
import Cookies from 'js-cookie';

import { BrowserRouter as Router} from 'react-router-dom';

import { SideNavPanel } from './common/SideNavPanel';



function App() {
  const navigate = useNavigate();
  const menuItems = menuItemStudents;
  const [isLogin,setIslogin]=useState(false);
  const [loginValue,setLoginValue]=useState()
  
 useEffect( ()=> {
  if(Cookies.get('isLogin')) {

    setLoginValue(JSON.parse( Cookies.get('isLogin')))
  }
  if(Cookies.get('isLogin')) {
    console.log(loginValue);
    setIslogin(true)
    

  }

 },[])
  return (
    <>
    
      
        <LoginContext.Provider value={{isLogin,loginValue}}>
          
          {isLogin? <SideNavPanel menuItems={menuItems}/> : <Login/>}
         
        </LoginContext.Provider>
     
     
        
      
    </>
  );
}

export default App;
