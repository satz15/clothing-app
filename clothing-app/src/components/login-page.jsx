import React, { useState } from 'react';
import { Route,Routes,Link } from 'react-router-dom'


import {signInWithGooglePopup, createUserDocumentFromAuth} from'../utils/firebase' 

const Login = () => {
  const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const SignInWithGoogle = async () =>  { 
    const {user} = await signInWithGooglePopup();
   const userDocRef = await createUserDocumentFromAuth(user);
   
  //  console.log(userDocRef.firestore._firestoreClient.user.uid);

  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const {user} = signInAuthUserWithEmailandPassword
        (email, password);
        console.log(user);
        
        setFormFields(defaultFormFields);
      } catch(err) {
        console.log(`Error occured while sign in`);
      }
    }
  };

    const handleLoginClick = () => {
      console.log('Username:', username);
      console.log('Password:', password);
    };

    return (
      <div className="min-h-screen flex items-center justify-center image">
        <div className="max-w-md w-full p-8 bg-zinc-400 shadow-lg rounded-md">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
            <div className="mb-4">
              <label className="block text-bl text-sm font-medium">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-bl text-sm font-medium">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleLoginClick}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Login
              </button>
              <button
                type="submit"
                onClick={SignInWithGoogle}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Google Sign In
              </button>
            </div>
            <div className='flex justify-evenly items-center mt-4'>
          <p>
            New user?
            </p>
            <button className="w bg-black w-32 text-white py-2 rounded-md  focus:outline-none">
             <Link to ='/Register'>Register Here</Link> 
            </button>
    
        </div>
        </div>
      </div>
    );
  };

  return <LoginPage />;
};

export default Login;
