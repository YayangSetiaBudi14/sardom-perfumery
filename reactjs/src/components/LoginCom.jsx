import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';


function LoginCom() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new URLSearchParams();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const response = await axios.post('http://localhost:8082/login', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      if (response.data !== '' && response.data.constructor === Object) {
        const Role = checkRole(response.data.role);
      
        //Redirect sesuai Role
        if(Role === '/customer'){
        return history.push(`/home/${response.data.username}`);
        }else if(Role === '/admin'){
          return history.push(`/admin/${response.data.username}`);
        }else{
          return history.push(`/home`);
        }
      }
      else {
        console.log("Invalid Username or Password")
      }
    } catch (error) {
      // Tangani error, misalnya tampilkan pesan kesalahan
      console.error('Terjadi kesalahan saat login:', error);
    }
  };

  return (
    <section>
      <div className="container" style={{ border: '1px solid rgba(0, 0, 0, 0.8)'}}>
        <div className="login-content">
          <div className="login-text text-center sans-serif" style={{ color: '#5c5c5c'}}>
            <p style={{ fontSize: 22}}>Sign In</p>
            <p style={{ fontSize: 14}}>Please enter your username and password</p>
          </div>

          <form action="" id="login" method="post" onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <input type="username" id="username" className="form-control sans-serif rounded-0" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="password" className="form-control sans-serif rounded-0" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <button className="login-button btn btn-primary rounded-0" type="submit"><b>Login</b></button>
          </form>
        </div>
        
      </div>
    </section>
  )
}

function checkRole(role){
  if(role === 'Customer'){
    return '/customer';
  }else if( role === 'Admin'){
    return '/admin';
  }else{
    return '/home';
  }
}

export default LoginCom;