import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import Layout from './components/Layout';



function App() {
 return (

  <Routes>
    <Route path="/" element={<Layout />} />
    <Route index element={<HomePage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/login" element={ <LoginForm /> } />
    <Route path="/register" element={ <RegisterForm /> } />
  </Routes>

)
}

export default App;
