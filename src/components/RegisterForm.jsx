import { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      axios.post(baseUrl, {
        "username": username, "password": password
      })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        setUsername('');
        setPassword('');
      });
  
    }
  
    const baseUrl = "https://workshop-backend-vah6.onrender.com/register";
  
    return (
      <div className="flex justify-center items-center h-screen bg-blue-100">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-center">Register Form</h2>
         <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
          <input className="border rounded w-full px-3 py-2 text-gray-700" type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
         </div>
  
         <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Password</label>
          <input  className="border rounded w-full px-3 py-2 text-gray-700" type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-2 rounded" type="submit">Register</button>
  
        </form>
      </div>
    )
}

export default RegisterForm;