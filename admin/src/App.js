import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './component/Header';
import Sidebar from './component/Sidebar';
function App() {
  return (

    <BrowserRouter>
    <Header /> 
    <div className="d-flex main">
      <div className="sideWrapper">
      <Sidebar />
      </div>
   <div className='content'>
        <Routes>
          <Route path='/' exact={true} element={<Dashboard />} />
          <Route path='/dashboard' exact={true} element={<Dashboard />} />
        </Routes>
    </div>
   </div>
    </BrowserRouter>
  );
}

export default App; 

