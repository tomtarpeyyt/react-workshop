import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';



function App() {
 return (
  <>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/login" element={ <LoginForm /> } />
    <Route path="/register" element={ <RegisterForm /> } />
  </Routes>
  </>
)
}

export default App