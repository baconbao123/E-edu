import './App.scss';
import { menuItemStudents, AllRoutes, menuItemTeachers } from './initialData/dataMenu';
import { useEffect, useState } from 'react';

import { LoginContext } from './components/Authentication/LoginContext';
import { useNavigate } from 'react-router-dom';
import Login from './components/Authentication/login';
import Cookies from 'js-cookie';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import { SideNavPanel } from './common/SideNavPanel';
import Profile from './common/Profile/Profile';


function App() {
    const navigate = useNavigate();
    const menuItems = menuItemStudents;
    const allRoutes=AllRoutes;
    const menuItemsTeachers = menuItemTeachers
    const [isLogin, setIslogin] = useState(false);
    const [loginValue, setLoginValue] = useState()
    const pathname = window.location.pathname;
    const filename = pathname.substring(pathname.lastIndexOf('/') + 1);
    useEffect(() => {
        if (Cookies.get('isLogin')) {

            setLoginValue(JSON.parse(Cookies.get('isLogin')))
        }
        if (Cookies.get('isLogin')) {
            console.log(loginValue);
            setIslogin(true)


        }

    }, [])
    
    return (
        <>
            <Routes>
                {!isLogin?<Route path='/login' element={<Login />} /> :''}
              
            </Routes>

            <LoginContext.Provider value={{ isLogin, loginValue }}>

                {/* {isLogin ? <SideNavPanel menuItems={menuItems} allRoutes={allRoutes}/> : filename !== 'login' ? <Login /> : ''} */}
                
                {isLogin ? <SideNavPanel menuItems={menuItemStudents}/> : filename !== 'login' ? <Login /> : ''}

            </LoginContext.Provider>




        </>
    );
}

export default App;
