import './App.css';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';



function App() {
 return (
  <>
  <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="login" element={ <LoginForm /> } />
    <Route path="register" element={ <RegisterForm /> } />
  </Routes>
  </>
)
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

export default App
