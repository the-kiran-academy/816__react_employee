import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [employees, setEmployees] = useState([]);

  const nevigate=useNavigate();

  useEffect(() => {
    // http://localhost:8080/getAll

    axios
      .get("http://localhost:8080/getAll")
      .then((res) => {
        console.log(res.data);
        setEmployees(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteEmp = (id) => {
    // call delete api with input id
    axios
      .delete(`http://localhost:8080/delete?id=${id}`)
      .then((res) => {
        if (res.data) {
          alert("Deleted");

          let updated = employees.filter((emp) => id != emp.id);
          setEmployees(updated);
        } else {
          alert("Employee Not Exists");
        }
      })
      .catch((error) => console.log(error));
  };

  const showEmp = (id) =>{
   // nevigate to update employee component

   nevigate(`/show/${id}`)

  }

  return (
    <>
      <header className="bg-black text-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-wide">Employee Portal</div>
        <nav >
          <a href="/" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition">
            Logout
          </a>
        </nav>
      </header>

      <div className="overflow-x-auto mt-8 px-4">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Password</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr className="bg-gray-100">
                <td className="py-3 px-4 text-left">{emp.id}</td>
                <td className="py-3 px-4 text-left">{emp.name}</td>
                <td className="py-3 px-4 text-left">{emp.email}</td>
                <td className="py-3 px-4 text-left">{emp.password}</td>
                <td className="py-3 px-4 text-left">
                  <button
                    onClick={() => deleteEmp(emp.id)}
                    className="bg-red-400 mr-2 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => showEmp(emp.id)}
                    className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                  >
                    Show
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
