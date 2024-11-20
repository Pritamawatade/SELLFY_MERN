import { useContext, useEffect } from "react"
import { FaGoogle } from "react-icons/fa";

import { myContext } from "../../App";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"


const Login = () => {

    const context = useContext(myContext);

    useEffect(() => {
        context.setIsHeaderFooterShow(false);
    }, [])
    return (
        <section className="bg-gray-50 dark:bg-gray-900 w-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
           <Link to="/">
           <p  className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src="https://seeklogo.com/images/S/sellfy-logo-324618FAED-seeklogo.com.png" alt="logo" />
                Sellfy    
            </p>
           </Link>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div className="flex items-center justify-between">
                           

                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onHoverStart={() => console.log('hover started!')}
                            type="submit" 
                            className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Sign in
                        </motion.button>
                       
                        <motion.button   whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }} type="" className=" flex items-center justify-center w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><FaGoogle className="mr-2 text-lg"/>Sign in with Google</motion.button>
                       
                       
                        <p className="text-sm font-light text-black dark:text-gray-400">
                            Don’t have an account yet?

                            <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                            <p className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</p>

                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section>
    )
}
export default Login