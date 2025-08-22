import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credientials, setCredientials] = useState({
    email: "",
    password: "",
  });

  const nevigate =useNavigate();

  const inputHandler = (e) => {
    const {name,value}=e.target;
    setCredientials((old) =>({...old,[name]:value}))
  };

  const login = (e) =>{
    e.preventDefault();
    //const cred=JSON.stringify(credientials);
    axios.post('http://localhost:8080/login',{email:credientials.email,password:credientials.password})
    .then((res) => {
      if(res.data===''){
        console.log(res);
        alert("Invalid Credentials")
      }else{
       // nevigate to dashboard
        nevigate('/dashboard')
      }
    })

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form onSubmit={login}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              name="email"
              value={credientials.email}
              onChange={inputHandler}
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={credientials.password}
              onChange={inputHandler}
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <a href="/register" className="text-blue-600 hover:underline">
              Don't have an account? Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
