import "./App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import Home from "./Components/Home";
import About from "./Components/About";
import DepartmentManagement from "./Components/DepartmentManagement";
import AccountManagement from "./Components/AccountManagement";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Error from "./Components/Error";

function App() {
  return (
    <>
      <div className="container">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/department" element={<DepartmentManagement />} />
          <Route path="/account" element={<AccountManagement />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
