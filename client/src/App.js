import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RegistForm from './components/RegistForm';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import LoginForm from './components/LoginForm';
import RegLog from './components/RegLog';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegLog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound/>} />  {/* // Make sure this is the last route */}
      </Routes>
    </div>
  );
}

export default App;
