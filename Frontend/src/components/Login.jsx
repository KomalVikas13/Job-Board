import axios from "axios"
import { useState } from "react"

const Login = () => {
    const [formData, setFormData] = useState({
        username : "",
        password : ""
    })
    const [errors, setErrors] = useState({
        username : "",
        password : ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name] : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        // if(formData.username === ""){
        //     setErrors(prevError => ({
        //         ...prevError,
        //         username : "Username required"
        //     })) 
        // }
        // if(formData.password === ""){
        //     setErrors(prevError => ({
        //         ...prevError,
        //         password : "Password required"
        //     })) 
        // }
        try {
            const response = await axios.post('http://localhost:8096/auth/login', formData, {
                withCredentials: true,
            });

            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center mx-auto w-[50%] h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-10 text-white">
                <p className="text-4xl font-bold">Job Board</p>
                <p className="italic mt-2">"Your Partner in Building Great Teams"</p>
                <p className="mt-1">Log in to post jobs and discover talent that aligns with your vision.</p>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto w-[50%] h-screen">
                <p className="text-2xl mb-3 font-bold">Login</p>
                <div className="w-[60%]">
                    <form className="">
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex flex-col w-[80%]">
                                <label className="font-semibold">Username:</label>
                                <input name="username" value={formData.username} onChange={handleChange} className="border rounded-lg p-2 mt-1" type="text" placeholder="Eg: ADM12"></input>
                            </div>
                            <div className="flex flex-col w-[80%]">
                                <label className="font-semibold">Password:</label>
                                <input name="password" value={formData.password} onChange={handleChange} className="border rounded-lg p-2 mt-1" type="password" placeholder="Eg: user@145"></input>
                            </div>
                            <p className="w-[80%] text-end text-blue-800"><a href="">Forgot password?</a></p>
                            <button onClick={handleSubmit} className="outline-none hover:scale-110 transition duration-300 ease-in-out border rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-10 text-white py-1 mt-2 w-[80%] font-semibold">Login</button>
                        </div>
                    </form>

                    <div className="text-center mt-3">    
                        <span>Don't have an account? <a href="" className="text-blue-800">Create account</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login