import React, { useRef, useState } from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlinePassword } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    userEmail: "",
    userPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name);
    setLoginData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className=" p-8 rounded-lg shadow-md w-2xl max-w-sm">
        <h1 className=" text-2xl font-semibold mb-8">Login Here..</h1>
        <label className="input validator mb-8">
          <MdEmail />
          <input
            // ref={userEmail}
            onChange={handleInputChange}
            type="email"
            name="userEmail"
            placeholder="mail@site.com"
            required
          />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>

        <label className="input validator">
          <MdOutlinePassword />

          <input
            //  ref={userPassword}
            onChange={handleInputChange}
            type="password"
            required
            name="userPassword"
            placeholder="Password"
            minlength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
          />
        </label>
        <p className="validator-hint hidden">
          Must be more than 8 characters, including
          <br />
          At least one number <br />
          At least one lowercase letter <br />
          At least one uppercase letter
        </p>

        <div className="flex justify-center items-center">
          <button
            // onClick={handleLoginBtn}
            className="btn btn-active btn-primary mt-8"
          >
            Login
          </button>
        </div>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-indigo-400 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
