/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from 'sweetalert';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)

    const [showLogInError, setShowLogInError] = useState("")

    const location = useLocation()
    const navigate = useNavigate()

    const handleLoginForm = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        signIn(email, password)
            .then((result) => {

                if(result.user){
                    return (
                        swal("Good job!", "Login Successful!", "success"
                        ) && navigate(location?.state ? location.state : "/")
                    )
                }
            })
            .catch(() => {
                setShowLogInError("Invalid Email or Password")
            })

        event.target.reset()
    }
    const handleGoogle = e => {
        e.preventDefault()

        googleSignIn()
            .then(() => {
                swal("Good job!", "Google login Successful!!", "success");
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/X4CVCRZ/fashion1.webp)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <div className="lg:mt-32 md:mt-32 flex justify-center">

                            <div className="w-full max-w-sm bg-transparent border border-gray-200 rounded-lg shadow sm:p-6 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                                <form onSubmit={handleLoginForm} className="space-y-6">
                                    <h5 className="text-2xl font-bold text-center bg-pink-600 rounded-lg py-2 md:py-4 lg:py-4 w-full text-white dark:text-white">SignIn</h5>

                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email" required />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
                                        <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border input border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>

                                    <button type="submit" className="w-full text-white bg-pink-700 hover:bg-pink-900 focus:ring-4 focus:outline-none rounded-lg py-2">Login</button>
                                    <div className="text-sm text-white font-bold dark:text-gray-300 ">
                                        New here?  Please <Link to="/register" className="text-pink-700 text-lg hover:underline dark:text-blue-500 ">Register</Link>

                                    </div>
                                    <Link> <p className="text-center mt-5"><button onClick={handleGoogle} className="btn border-blue-500 font-bold text-pink-500"><FaGoogle className="text-blue-500"></FaGoogle> Login with Google</button></p></Link>

                                </form>
                                {
                                    showLogInError && <p className="text-white font-bold">{showLogInError}</p>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default Login;