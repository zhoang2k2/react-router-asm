/*
em đang gặp bug trong bài này, anh check giúp em với ạ
*/

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button/Button";
import Input from "./Input/Input";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

function SignUp() {
  const accountList = JSON.parse(localStorage.getItem("accounts")) || [];
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [inputVal, setInputVal] = useState({
  //   fullname: "",
  //   email: "",
  //   username: "",
  //   password: "",
  //   phone: "",
  //   gender: "",
  //   skills: [],
  //   address: "",
  // });

  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [genders, setGenders] = useState([]);

  useEffect(() => {
    fetchSkillsOption();
    fetchGendersOption();
  }, []);

  const fetchSkillsOption = async () => {
    try {
      const res = await axios.get(
        "https://65abb8c2fcd1c9dcffc6e7f0.mockapi.io/skills"
      );
      setSkills(res.data);
    } catch (err) {
      console.error("error fetching skills:", err);
    }
  };

  const fetchGendersOption = async () => {
    try {
      const res = await axios.get(
        "https://65abb8c2fcd1c9dcffc6e7f0.mockapi.io/genders"
      );
      setGenders(res.data);
    } catch (err) {
      console.error("error fetching skills:", err);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // if (confirmPassword === inputVal.password) {
    //   navigate("/login");
    //   const updateAccountList = [...accountList, inputVal];
    //   localStorage.setItem("accounts", JSON.stringify(updateAccountList));
    //   alert("Register Sucessfully");
    // } else {
    //   return console.log("Check your password again");
    // }

    if (formik.isValid && formik.dirty) {
      navigate("/login");
      const updateAccountList = [...accountList, formik.values];
      localStorage.setItem("accounts", JSON.stringify(updateAccountList));
      alert("register sucessfully");
    } else {
      alert("Please fix all validation errors before registering.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setInputVal({ ...inputVal, [name]: value });
    formik.setFieldValue(name, value);
  };

  // const handleConfirmPassword = (e) => {
  //   formik.setConfirmPassword(e.target.value);
  // };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      username: "",
      password: "",
      phone: "",
      gender: "",
      skills: [],
      address: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string()
        .min(2, "at least 2 characters")
        .max(50, "less than 50 characters")
        .required("required"),
      email: Yup.string()
        .email("Invalid email address")
        .min(2, "at least 2 characters")
        .max(50, "less than 50 characters")
        .required("required"),
      username: Yup.string()
        .matches(/^[a-zA-Z0-9_]+$/, "invalid username")
        .min(2, "at least 2 characters")
        .max(20, "less than 20 characters")
        .required("required"),
      password: Yup.string()
        .matches(
          /^(?=.*[A-Z])(?=.*[0-9])/,
          "must contain at least 1 uppercase letter and 1 number"
        )
        .min(6, "at least 6 characters")
        .max(20, "less than 20 characters")
        .required("required"),
      phone: Yup.string()
        .min(10, "at least 10 characters")
        .max(11, "less than 11 characters")
        .required("required"),
      gender: Yup.string().required("Required"),
      skills: Yup.array()
        .min(1, "at least select 1 skill")
        .required("Required"),
      address: Yup.string().required("required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form className="signup" onSubmit={formik.handleSubmit}>
        <h2>Register System</h2>
        <Input
          title="fullname"
          type="text"
          value={formik.values.fullname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input
          title="email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input
          title="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input
          title="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input
          title="phone"
          type="text"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {/* <Input
          title="gender"
          type="text"
          value={formik.values.gender}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        /> */}
        <select
          name="genders"
          id="genders"
          value={formik.values.gender.length > 0 ? formik.values.gender[0] : ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          {genders.map((option) => (
            <option key={option.id} value={option.gender}>
              {option.gender}
            </option>
          ))}
        </select>
        {/* <Input
          title="skills"
          type=""
          value={formik.values.skills}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        /> */}
        <select
          name="skills"
          id="skills"
          value={formik.values.skills}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          multiple={true}
        >
          {skills.map((option) => (
            <option key={option.id} value={option.skill}>
              {option.skill}
            </option>
          ))}
        </select>
        <Input
          title="address"
          type="text"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
