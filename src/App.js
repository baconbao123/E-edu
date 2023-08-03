import './App.scss';
import { menuItemStudents } from './initialData/dataMenu';

import { BrowserRouter as Router} from 'react-router-dom';

import { SideNavPanel } from './common/SideNavPanel';



function App() {
  const menuItems = menuItemStudents;

  return (
    <>
      <Router>
        <SideNavPanel menuItems={menuItems}/>
      </Router>
    </>
  );
}

export default App;
