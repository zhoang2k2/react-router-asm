import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button/Button";
import Input from "./Input/Input";

function SignUp() {
  const accountList = JSON.parse(localStorage.getItem("accounts")) || [];
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputVal, setInputVal] = useState({
    fullname: "",
    email: "",
    password: "",
    birthday: "",
  });

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (confirmPassword === inputVal.password) {
      navigate("/login");
      const updateAccountList = [...accountList, inputVal];
      localStorage.setItem("accounts", JSON.stringify(updateAccountList));
      alert("Register Sucessfully");
    } else {
      return console.log("Check your password again");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      <form className="signup">
        <h2>Register System</h2>
        <Input
          title="fullname"
          type="text"
          value={inputVal.fullname}
          onChange={handleChange}
        />
        <Input
          title="email"
          type="email"
          value={inputVal.email}
          onChange={handleChange}
        />
        <Input
          title="password"
          type="password"
          value={inputVal.password}
          onChange={handleChange}
        />
        <Input
          title="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
        <Input
          title="birthday"
          type="date"
          value={inputVal.birthday}
          onChange={handleChange}
        />
        <Button
          title="register"
          style={{ backgroundColor: "#5CB85C" }}
          onClick={handleRegister}
        />
      </form>
    </>
  );
}

export default SignUp;
