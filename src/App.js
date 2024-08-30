import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
     <Router>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>

  </Routes>
     </Router>
    </div>
  );
}

export default App;
