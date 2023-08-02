import './App.scss';
import { menuItemStudents } from './initialData/dataMenu';
import { student } from './initialData/student';
import { notifications } from './initialData/fetchnoti';
import { BrowserRouter as Router } from 'react-router-dom';

import { SideBarItem } from './common/SideBarItem';
import { Navigation } from './common/Navigation';

function App() {
  const menuItems = menuItemStudents;
  const students = student;
  const notifs = notifications

  return (
    <>
      <Navigation students={students}/>
      <Router>
        <div className="edu-master">
          <SideBarItem className="sidebar" menuItems={menuItems} notifs={notifs}/>
        </div>
      </Router>
    </>
  );
}

export default App;
