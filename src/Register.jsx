import axios from "axios";
import { useState } from "react";

function Register() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEmployee((old) => ({ ...old, [name]: value }));
  };

  const register = (e) => {
    e.preventDefault();

    // http://localhost:8080/register
    
    axios
      .post("http://localhost:8080/register", {name:employee.name,email:employee.email,password:employee.password})
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("Registered !!");
        } else {
          alert("Already Exists");
        }
      })
      .catch((error) => alert("Something went wrong"));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register
        </h2>
        <form onSubmit={register}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              name="name"
              value={employee.name}
              onChange={inputHandler}
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              name="email"
              value={employee.email}
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
              name="password"
              value={employee.password}
              onChange={inputHandler}
              type="password"
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
            Register
          </button>

          <div className="mt-4 text-center">
            <a href="/login" className="text-blue-600 hover:underline">
              Already have an account? Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
