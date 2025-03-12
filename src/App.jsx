import './index.css';
import Signup from './components/signup';
import Login from './components/login';
import Home from './pages/Home';
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Teachers from './components/Teachers';
import Students from './components/Students';
import Dashboard_home from './components/Dashboard_home';
import Billing from './components/Billing';
import Settings from './components/Settings';
import Exams from './components/Exams';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element ={<Dashboard/>}>

        <Route path='dashboard_home' element={<Dashboard_home/>}/>
        <Route path='teachers' element={<Teachers/>}/>
        <Route path='students' element={<Students/>}/>
        <Route path='billing' element={<Billing/>}/>
        <Route path='settings' element={<Settings/>}/>
        <Route path='exams' element={<Exams/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
