import React, { useState } from "react";
import {  Link, NavLink } from "react-router-dom";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../utils/firebase";
import { useUser } from "./context";

const Login = () => {
  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const { formFields, setFormFields, setUser } = useUser();
  const { displayName, email, password, confirmPassword } = formFields;

  const submitHandler = async (e) => {
    // e.preventDefault();
    console.log("hit");
    if (email && password) {
      console.log(email," ==", password)
      try {
        const formFields = await signInAuthUserWithEmailAndPassword(
          email,
          password
        );
        console.log( formFields );
        // setFormFields({ email: "", password: "", confirmPassword: "" });

        // if (user) {
        //   setUser(user.email, user.displayName);
        //   console.log(user.email);
        //   console.log(user.displayName);
        // }
      } catch (err) {
        console.log("Error Occurd while Login", err.message);
        console.log(err.code);
        if (err.code === "auth/invalid-credential") {
          alert("Invalid Credentials");
        }
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(e.target.name);
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen image">
      <div className="w-full max-w-md p-8 rounded-md shadow-lg bg-zinc-400">
        <h2 className="mb-6 text-2xl font-semibold">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-bl">Username</label>
          <input
            type="email"
            id="username"
            name="email"
            onChange={changeHandler}
            className="w-full p-2 mt-1 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-bl">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={changeHandler}
            className="w-full p-2 mt-1 border rounded-md"
          />
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={submitHandler}
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            <NavLink to='/Login-btn'>Login</NavLink>
          </button>
          <button
            type="submit"
            onClick={SignInWithGoogle}
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Google Sign In
          </button>
        </div>
        <div className="flex items-center mt-4 justify-evenly">
          <p>New user?</p>
          <button className="w-32 py-2 text-white bg-black rounded-md w focus:outline-none">
            <Link to="/Register">Register Here</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
