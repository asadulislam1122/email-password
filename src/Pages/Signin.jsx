import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { BsEye } from "react-icons/bs";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router";
import { auth } from "../Fairbase.init";
import { toast } from "react-toastify";
const provider = new GoogleAuthProvider();

const Signin = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const handleSubmiteSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "পাসওয়ার্ডে কমপক্ষে 6 অক্ষর, একটি বড় হাতের অক্ষর, একটি ছোট হাতের অক্ষর, একটি সংখ্যা ও একটি বিশেষ চিহ্ন থাকতে হবে!"
      );
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setUser(result.user);
        toast.success("SignIn Sucessfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  console.log(user);
  const signOutButton = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign Out Successfully", {
          position: "top-center",
        });
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  // google ()
  const handleGoogleAccount = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        toast.success("Continue with Google Sign In");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className=" mx-auto bg-gradient-to-r from-pink-400 via-green-500 to-orange-500 hero min-h-screen">
      <div className="md:flex  gap-20 items-center m-8 ">
        <div className="md:mb-0 mb-4">
          <h1 className="font-bold text-3xl text-blue-700">Wellcome back</h1>
          <p className="text-gray-600 font-semibold">
            Sign in to continue your journey.Manage Your account.Axplore new
            frutre and more....
          </p>
        </div>
        {user ? (
          <div className="text-center space-y-3 rounded-2xl shadow-2xl w-[400px] h-[180px] bg-gradient-to-r from-pink-400 via-green-500 to-orange-500 ">
            <img
              className="w-20 h-20 rounded-full mx-auto"
              src={user?.photoURL || "http/vaiya.placeholder.com"}
              alt=""
            />
            <p className="font-semibold text-xl text-gray-600">
              Email: {user.email}
            </p>
            <button
              onClick={signOutButton}
              className="btn bg-gradient-to-r from-orange-600 via-red-500 to-blue-500"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="card bg-gradient-to-r from-pink-400 via-green-500 to-orange-500 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-4xl font-bold text-center text-blue-600">
              Sign In !
            </h1>
            <div className="card-body">
              <form onSubmit={handleSubmiteSignIn}>
                {" "}
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  {/* password */}
                  <div>
                    <label className="label">Password</label>
                    <input
                      type={show ? "text" : "password"}
                      name="password"
                      className="input"
                      placeholder="Password"
                    />
                    {/* button */}
                    <button
                      type="button"
                      onClick={() => setShow(!show)}
                      className="btn absolute bg-gray-300 right-12 mt-2 btn-xs"
                    >
                      {show ? <FiEyeOff size={17} /> : <BsEye size={17} />}
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
                  {/* google */}
                  <div onClick={handleGoogleAccount} className="flex">
                    <button
                      type="button"
                      className="btn bg-gradient-to-r from-blue-500 to-orange-500 mx-auto text-center justify-center items-center m-auto"
                    >
                      {" "}
                      <img
                        className="w-8"
                        src="https://img.icons8.com/fluency/48/google-logo.png"
                        alt=""
                      />
                      Continue with Google
                    </button>
                  </div>
                  <button className="btn bg-gradient-to-r from-orange-600 via-red-500 to-blue-500 mt-4">
                    Login
                  </button>
                </fieldset>
              </form>
              <p>
                Dont have an Account !!{" "}
                <Link to={"/signup"} className="text-blue-700 ml-4 underline">
                  SignUp
                </Link>{" "}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signin;
