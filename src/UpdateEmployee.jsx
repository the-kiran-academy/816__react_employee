import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateEmployee() {
  const [employee, setEmployee] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
  });

  const nevigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEmployee((old) => ({ ...old, [name]: value }));
  };

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getById?id=${id}`)
      .then((res) => setEmployee(res.data))
      .catch((error) => console.log(error));
  }, []);

  const updateEmp = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:8080/update", {
        id: employee.id,
        name: employee.name,
        email: employee.email,
        password: employee.password,
      })
      .then((res) => {
        if (res.data) {
          alert("Updated !");
          nevigate("/dashboard");
        } else {
          alert("Not Exist");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Update Employee
        </h2>
        <form onSubmit={updateEmp}>
          <div className="mb-4">
            <label htmlFor="id" className="block text-gray-700 mb-2">
              ID
            </label>
            <input
              name="id"
              value={employee.id}
              onChange={inputHandler}
              type="number"
              id="id"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter employee ID"
              required
              readOnly
            />
          </div>
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
              placeholder="Enter employee name"
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
              placeholder="Enter employee email"
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
              placeholder="Enter employee password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateEmployee;
