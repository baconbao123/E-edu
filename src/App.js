
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
import {Router,Route} from 'react-router-dom';
import {student} from './json/student'
function App() {
  return (
   <>
    <h1>{student[0].name}</h1>
    <img src={student[0].img} alt=""/>
    {/* <Router>
      <Route />
    </Router> */}

   </>
  );
}

export default App;
