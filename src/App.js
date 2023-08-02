import './App.scss';
import { menuItemStudents } from './initialData/dataMenu';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { SidebarMain } from './common/SidebarMain';



function App() {
  const menuItems = menuItemStudents;

  return (
    <>
    
      <Router>
        <SidebarMain menuItems={menuItems}/>
      </Router>
    </>
  );
}

export default App;
