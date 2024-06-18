import './App.css';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import SignIn from './components/SignIn/SignIn'
import Registration from './components/Registration/Registration';
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path = '/registration' element = {<Registration />} />
        <Route path = '/dashboard' element = {<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
