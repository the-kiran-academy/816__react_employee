import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";
import Footer from './Footer';
import Login from "./Login";
import Register from "./Register";
import UpdateEmployee from "./UpdateEmployee";
import Welcome from './Welcome';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome></Welcome>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/show/:id" element={<UpdateEmployee></UpdateEmployee>}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
