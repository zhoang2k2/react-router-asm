import { useNavigate } from "react-router-dom";
import Button from "./Button/Button";
import Input from "./Input/Input";
import { useEffect, useState } from "react";

function Login() {
  const [inputVal, setInputVal] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const listAccount = JSON.parse(localStorage.getItem("accounts"));

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedIn = listAccount.find(
      (account) =>
        account.email === inputVal.email &&
        account.password === inputVal.password
    );
    if (loggedIn) {
      alert("Login successfully");
      let userLogin = {
        Email: inputVal.email,
        Password: inputVal.password,
      };
      localStorage.setItem("user_login", JSON.stringify(userLogin));
      navigate("/account");
    } else {
      alert("Invalid email or password!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };

  useEffect(() => {
    let userLogin = JSON.parse(localStorage.getItem("user_login"));
    if (userLogin) {
      return navigate("/account");
    }
  }, []);

  return (
    <>
      <form>
        <h2>Login</h2>
        <Input
          title="email"
          type="email"
          onChange={handleChange}
          value={inputVal.email}
        />
        <Input
          title="password"
          type="password"
          onChange={handleChange}
          value={inputVal.password}
        />
        <Button
          title="login"
          style={{ backgroundColor: "#5BC0DE" }}
          onClick={handleLogin}
        />
      </form>
    </>
  );
}

export default Login;
