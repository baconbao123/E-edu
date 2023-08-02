import './App.scss';
import { menuItemStudents } from './initialData/dataMenu';
import { students, notifications } from './initialData/student';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navigation } from './common/Navigation';
import { SidebarMain } from './common/SidebarMain';



function App() {
  const menuItems = menuItemStudents;

  return (
    <>
      <Navigation students={students} notifications={notifications}/>
      <Router>
        <SidebarMain menuItems={menuItems}/>
      </Router>
    </>
  );
}

export default App;
