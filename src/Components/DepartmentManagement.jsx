import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DepartmentManagement() {
  const navigate = useNavigate();
  useEffect(() => {
    let userLogin = JSON.parse(localStorage.getItem("user_login"));
    if (!userLogin) {
      return navigate("/login");
    }
  }, []);
  return <>This is department Management</>;
}

export default DepartmentManagement;
