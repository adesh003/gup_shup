import { useRef, useState } from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlinePassword } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Signup() {
  const [signUpData, setSignUpData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userConfirmPassword: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target.name);
    setSignUpData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(signUpData);

  return (
    <form>
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className=" p-8 rounded-lg shadow-md w-2xl max-w-sm">
          <h1 className=" text-2xl font-semibold mb-8">Sign Up..</h1>

          {/* // user name */}

          <fieldset className="fieldset">
            <legend className="fieldset-legend">What is your name?</legend>
            <label className="input validator">
              <CiUser />
              <input
                onChange={handleInputChange}
                name="userName"
                type="text"
                className="input"
                placeholder="Full Name"
                required
              />
            </label>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">What's your email</legend>
            <label className="input validator">
              <MdEmail />
              <input
                name="userEmail"
                onChange={handleInputChange}
                type="email"
                placeholder="example@gmail.com"
                required
              />
            </label>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter Password</legend>
            <label className="input validator">
              <MdOutlinePassword />

              <input
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
            {/* <p className="label">Optional</p> */}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Confirm Password</legend>
            <label className="input validator">
              <MdOutlinePassword />

              <input
                onChange={handleInputChange}
                type="password"
                name="userConfirmPassword"
                required
                placeholder="Password"
                minlength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            {/* <p className="label">Optional</p> */}
          </fieldset>

          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>

          <div className="flex justify-center items-center">
            <button className="btn btn-active btn-primary mt-8">Sign up</button>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link
              to="/Login"
              className="font-medium text-indigo-400 hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Signup;
