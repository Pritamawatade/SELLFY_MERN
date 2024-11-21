import { useContext, useEffect } from "react"
import { FaGoogle } from "react-icons/fa";
import { myContext } from "../../App";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const SignUp = () => {
    const context = useContext(myContext);

    useEffect(() => {
        context.setIsHeaderFooterShow(false);
    }, [])

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const formVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    const buttonVariants = {
        hover: { 
            scale: 1.02,
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.98 }
    };

    return(
        <>
        <section className="bg-gray-50 dark:bg-gray-900 w-screen">
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
            >
                <Link to="/">
                    <motion.p 
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                    >
                        <motion.img 
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="w-8 h-8 mr-2" 
                            src="https://seeklogo.com/images/S/sellfy-logo-324618FAED-seeklogo.com.png" 
                            alt="logo" 
                        />
                        Sellify
                    </motion.p>
                </Link>
                <motion.div 
                    variants={containerVariants}
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
                >
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <motion.h1 
                            variants={itemVariants}
                            className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
                        >
                            Create an account
                        </motion.h1>
                        <motion.form 
                            variants={formVariants}
                            initial="hidden"
                            animate="visible"
                            className="space-y-4 md:space-y-6" 
                            action="#"
                        >
                            <motion.div variants={itemVariants}>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <motion.input 
                                    whileFocus={{ scale: 1.01 }}
                                    whileHover={{ scale: 1.05 }}
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="name@company.com" 
                                    required="" 
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <motion.input 
                                    whileFocus={{ scale: 1.01 }}
                                    whileHover={{ scale: 1.05 }}
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="••••••••" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    required="" 
                                />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <motion.input 
                                    whileFocus={{ scale: 1.01 }}
                                    whileHover={{ scale: 1.05 }}
                                    type="password" 
                                    name="confirm-password" 
                                    id="confirm-password" 
                                    placeholder="••••••••" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    required="" 
                                />
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex items-start">
                                <div className="flex items-center h-5">
                                    <motion.input 
                                        whileTap={{ scale: 0.9 }}
                                        whileHover={{ scale: 1.1 }}
                                        id="terms" 
                                        aria-describedby="terms" 
                                        type="checkbox" 
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                                        required="" 
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                                        I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a>
                                    </label>
                                </div>
                            </motion.div>
                            <motion.button 
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                type="submit" 
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Create an account
                            </motion.button>
                            <Link to="/login">
                                <motion.p 
                                    variants={itemVariants}
                                    className="text-sm font-light text-gray-500 dark:text-gray-400"
                                >
                                    Already have an account? <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                </motion.p>
                            </Link>
                            <motion.div 
                                variants={itemVariants}
                                className="flex items-center pt-4 space-x-1"
                            >
                                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                                <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                            </motion.div>
                            <motion.div 
                                variants={itemVariants}
                                className="flex justify-center space-x-4"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button className="googleBtn" variant="contained" startIcon={<FaGoogle />}>Google</Button>
                                </motion.div>
                            </motion.div>
                        </motion.form>
                    </div>
                </motion.div>
            </motion.div>
        </section>
        </>
    )
};

export default SignUp