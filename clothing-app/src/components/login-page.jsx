const Login = () => {
    return ( 
        
            <div className="image bg-teal-600  h-screen gap-5 text-white w-100 flex flex-col items-center justify-center " >
            <h1>LOGIN</h1>
            <span>Enter Your Account Details</span>
            <div className="flex gap-2 outline-none">
                <span>Username</span>
                <input className="text-black" type="text" />
            </div>
            <div className="flex gap-2 outline-none">
                <span>Password</span>
                <input className="text-black" type="password" />
                </div>
            
            <button className="bg-black text-white h-10 w-40 rounded-2xl">Login</button>
        </div>


     );
}
 
export default Login;