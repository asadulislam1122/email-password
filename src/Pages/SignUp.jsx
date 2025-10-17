import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../Fairbase.init";
import { toast } from "react-toastify";
import { FiEyeOff } from "react-icons/fi";
import { BsEye } from "react-icons/bs";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "পাসওয়ার্ডে কমপক্ষে 6 অক্ষর, একটি বড় হাতের অক্ষর, একটি ছোট হাতের অক্ষর, একটি সংখ্যা ও একটি বিশেষ চিহ্ন থাকতে হবে!"
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        toast.success("signUp Sucesfully");
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/email-already-in-use") {
          toast.error("এই ইমেইল দিয়ে ইতিমধ্যেই একটি একাউন্ট আছে!");
        } else {
          console.log(error.message);
        }
      });
  };
  return (
    <div className=" mx-auto bg-gradient-to-r from-slate-500 via-green-500 to-slate-950 hero min-h-screen">
      <div className="card bg-gradient-to-r from-pink-400 via-green-500 to-orange-500 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          Sign Up !
        </h1>
        <div className="card-body">
          <form onSubmit={handleSignUp}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <div className="relative">
                {/* password */}
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                {/* button eay */}
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="btn absolute right-6 mt-2 btn-xs"
                >
                  {show ? <FiEyeOff size={17} /> : <BsEye size={20} />}
                </button>
              </div>

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              {/* devaider */}
              <div className="flex items-center gap-4 justify-center">
                <div className="h-[1px]  w-16 bg-gray-600"></div>
                <div className="text-xl text-gray-600">or</div>
                <div className="h-[1px]  w-16 bg-gray-600"></div>
              </div>
              <button className="btn bg-gradient-to-r from-orange-600 via-red-500 to-blue-500 mt-4">
                sign Up
              </button>
            </fieldset>
          </form>
          <p>
            Alredy have a Acount{" "}
            <Link to={"/signin"} className="text-blue-700 ml-4 underline">
              SignIn
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
