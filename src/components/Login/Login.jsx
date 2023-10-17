import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div>

<div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/X4CVCRZ/fashion1.webp)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <div className="lg:mt-32 md:mt-32 flex justify-center">

<div className="w-full max-w-sm bg-transparent border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form  className="space-y-6">
        <h5 className="text-2xl font-bold text-center bg-pink-600 rounded-lg py-2 md:py-4 lg:py-4 w-full text-white dark:text-white">LogIn</h5>

        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email" required />
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Your password</label>
            <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border input border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div className="flex items-start">

            <a href="#" className="text-sm text-white hover:underline dark:text-blue-500 ml-2">Forget Password?</a>
        </div>
        <button type="submit" className="w-full text-white bg-pink-700 hover:bg-green-900 focus:ring-4 focus:outline-none rounded-lg py-2">Login</button>
        <div className="text-sm text-white font-bold dark:text-gray-300 ">
            New here?  Please <Link to="/register" className="text-pink-700 text-lg hover:underline dark:text-blue-500 ">Register</Link>

        </div>
        <Link> <p className="text-center mt-5"><button  className="btn border-blue-500 font-bold text-blue-500"><FaGoogle className="text-blue-500"></FaGoogle> Login with Google</button></p></Link>

    </form>
    
</div>

</div> 
    </div>
  </div>
</div>





            
        </div>
    );
};

export default Login;