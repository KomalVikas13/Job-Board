const Login = () => {

    return(
        <div className="flex flex-row">
            <div className="w-[50%] h-screen">
                <p>Job Board</p>
                <p>Login form</p>
            </div>
            <div className="flex justify-center items-center mx-auto border w-[50%] h-screen">
                <div className="">
                    <form className="">
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col">
                                <label>Username</label>
                                <input type="text" placeholder="Eg: ADM12"></input>
                            </div>
                            <div className="flex flex-col">
                                <label>Password</label>
                                <input type="password" placeholder="Eg: user@145"></input>
                            </div>
                            <button>Login</button>
                        </div>
                    </form>

                    <div>
                        <span><a href="">Forgot password?</a></span>
                        <span>or</span>
                        <span><a href="">Create account</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login