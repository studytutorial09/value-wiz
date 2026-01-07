import React, { useState } from "react";
import Header from "../../navbar/Header";
import "./login.css";

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password)
        console.log("email:", email)
        console.log("password:", password)

        setEmail("")
        setPassword("")
        // Handle login logic here
    }



    return (
        <>
            <Header />
            <div className='p-8 m-5 py-12 w-full h-full flex items-center justify-center bg-transparent-900'>
                <div className=" m-auto px-12 py-20 rounded-2xl bg-white/30 backdrop-blur-none ...">
                    <h4 className="text-2xl items-center mb-6 px-20"> Login / Sign in</h4>
                    <form onSubmit={(e) => { handleSubmit(e) }} className="flex flex-col items-center justify-center">
                        <div className="mb-6 w-full items-start flex flex-col">
                            <label for="email" className="mb-2.5 text-sm font-medium text-heading">Email</label>
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" id="email" className="outline-none rounded-full bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-6 w-full items-start flex flex-col">
                            <label for="first_name" className="outline-none block mb-2.5 text-sm font-medium text-heading">password</label>
                            <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="text" id="first_name" className="rounded-full outline-none bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="John" required />
                        </div>
                        <div className="text-right items-center">
                            <a class="text-blue-600" href="#">Forgot Password</a>
                        </div>
                        {/* <input  required className="text-white outline-none border-2 border-white-600 px-5 py-3 text-xl bg-transparent rounded-full " type="email" placeholder="enter your email" /> */}
                        {/* <input  required className="text-white outline-none bg-transparent border-2 border-white-600 py-3 px-5 text-xl rounded-full mt-3" type="password" placeholder="enter your password" /> */}
                        <button className="btn-primary mt-7 text-white outline-none border-2 text-xl py-3 px-5 rounded-full w-full">Login</button>

                        <p className="text-gray-500 text-sm mt-3 mb-11">"Don't have an account?<a href="#" className="text-indigo-500 hover:underline">click here</a></p>
                    </form>
                </div>
            </div>


        </>
    )
}

export default Login