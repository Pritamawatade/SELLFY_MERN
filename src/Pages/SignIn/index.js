import { useContext, useEffect } from "react";
import { mycontext } from "../../App";
import { FaGoogle } from "react-icons/fa";
import { TextField } from "@mui/material";

const SignIn = () => {
  const context = useContext(mycontext);

  useEffect(() => {
    context.setIsHeaderFooterShow(false);
  });
  return (
    <>
      <section className="section max-h-screen overflow-visible">
  
        <div className="container">
       
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX4AAACECAMAAACgerAFAAAAjVBMVEX///8AsUAArzgArCsArzoArTB+zZFdw3cArjTd8uPS7NgArzkAqyl0yokAqyaS1aPL6dL4/Pml2rDZ8N695Mbw+fKJ0Zro9uyy4L2q3bbD58uZ16fH6M5px4DS7dg+u2BRwG4Us0eg2a0ntlE1uVpVwXEAqBIhtU17zY9GvWZvyYVlxn09u14ApgDs9+7lMNzJAAAKyElEQVR4nO2d6XqqOhSGSwaNFaMIgqh1bh26j/d/eYeAwgpEEIuKPHl/7CEqxo8Ma4p+fGg0Go1Go9FoNBqNRqPRaDQajUaj0Wg0Go1Go9FoNBqNRqPRaDQajUaj0Wg0Go1Go9FoNBqNRqPRaDSP4NQZTPyh22q1jsffY/BXqz/0Z3Nv9OqONZyZ7379M7iJKWUMhXTDPxljFGOON9+96fj06m42lR+GusTIgRDEuPvqbjYUz8yT/kL369X9bCgDfIv85N+r+9lQxvQW+Q3j1f1sKGt2k/r81f1sKC2kWGqyW7HpvbqjzeS3K8mMKCe77Y5wTKV7gO1Xd7SZHKDKhB8nkZ9l2f43B+sSnby4nw1lBdRnB8nHtXwg//hVHWw2YOlnGeM+sYrY+hWdaz6JwmSXfgwYpWz6is41HivxuqgTN57/bif7Atq/qIPvgNWZOY5j3xEXs5KYgxm1zDac838tcS84sIh6lXa4fvj7Vkyvk7SvYbvK+h6tDyJcSSk26WbvlIsQe/HoJ5uo5UcMeYKo2RoCy6d7vP+TPR7LsoqflM+Rohg+T9q/YXsn8zJrz1myRgSy8X+zEu/ayciPLgY/gv4wWf7pwz0K2+8dDIpxMP7Qv193fL930gM2CP5M2sECbOCM/AOWCRrgMjainaz9LGoZ9becdtMXJYe7P9jDcL5ooHosD+mi4EYs+vPiVyq4S36HGxlKxQeA/MnFR+NfjOXAQ/3kH3ZxZpCIjjLM9nfcgXvktxXqlwtOAvnlmP6gzSV/uGbyf65yIrUIr9ZlN4N75DcUaapymREgv4F96aHOBvSILEp+nMcy5bkJOoPgsgmKO+Tvq4LFbFjmXaH8htmSH1yAPb1W8vcKc0TML76KfMny8is7US42KclvMOrCV1vJ7a2V/G5xho6XrdAoL786UYVLvaud+iQI069x3HU37lOd1v6BcseTKD9ayssvh+oZxjTwAErqlJY/oEv59my7zuIbXCf585f9SIzSEcLy8kt5KjrtdAbDNi5ZEtKB8scZFsIj/ZObUyO3a3hDdpqXTs6Vln8E5yAeRI1Wv4zPK9eZsMHmYu3TfvjoPJa/RkGHlNKBr2WagdfLEDAUNqWvWlp+uG7cvTOCkJsY4JO2WMKYuYqW/yTqU5+Qmy0VJjHDnXij0cmb+e43xef4y/XwuGcPPj1P4RSUln8AJiG6twoNBJzPfbadoX95+8TyrE/AeQqtbSp/bnu6DTOkithYwGS/48Howhhzo71OGYivkR+kW7IW6yRzb2rAFzA4ur+ZhzsuodnEUbBUtyiFy1MwwyXXoLT8cyh//95Pk4wlln7IA29Qn2Qj8AUNqtzoxkZmMFp7nimoIdRwkmfcLv/I7Qt6YBiQ5bQv4WaWtyF8NHFKdvHlNylrYcDgB61Nqn0FFKQD9XPSPtckGxcO4UmA5nb5Oz9MIFn9hMnwtFwWTx6k26QdFJrwg5/kyz7b0hZXn0KTHdDjxtCCe9VPY7HJUkL+G6piM24SdJHhUIZLKWHBnuROx+N+u5sKONenzGoJO4Zuse/zIkToon+18meCHrCcioL2dJEhEccqWMaxrE+R4VHqMO4XRpZ7uW7axXaqWP7UXgl9NMlMGt5WYmv+XbeKmModZnzp5w6NacEBhrORWrH8ZCt1AqosWcXOuxWY22k5CeU798oenM1IBZMbSXP7HE6pWP5U2GN7LXQ/v+14RY3izaruIYzb6vNncKc2CF61+v3WN4VjLhqNVcvPoCvggTFAHdi9022Hi+oT8vnw1fNVBGr7GW9Xis+x7UVXB+QJo7W4avnJCvQCLpgp9+oncAYLMnc1O1q3u9bdwHLbpgxuKUIB4lbWKqmQCH3k0na/ZAGc7X7YZgJbcZe+2QmfvtveUC7OlaLgRpyfGPxDHC2l2OTG4TgtWbz1WDo56RZCEUy2QnMbteFFPpMxHBqJJbze9VAATUay9KM2cLeBzh2wwqhD4ZY3GK/dfXt5WAW6I2N3WPZaa39m18bgBMxy0110l4y7xRVz+wOOSCzqUv4W87kkyeG87MZPTZKGtUpb3c0c5y2XhF8mwFVzO+AY+5uhF/q3iOdFfnhSDsfWGBwD0sb7rowOuTfgslVBqzpdpJMsHmHoohr5P2DjZauBxiV6iBzPx9nl3QAeBYMkl55RieTVoYdakfxgnYlXu33Sdn9ioHbM2opa1Fj/cM9a5pt0D5AfLneXMCX0eOu4ld6N84VwNj4l6H6Lx28Rv9rFB4akzsmgCThAtHyCKE/FXh84RdlbEI6zmwZ/lVuvbBWbYTgQxJSbsfGmmbkbnp4EodN/WzwrTNpUJT9c8KLAPrgf5ClyvICRvzDlSJowsBUn9hWEqlYm/0CuHZHOJ96dEn4D7I20EYtiy5vUj76vojL5YXRT+NPf4L/N/lKqDRz/4qOvpPtxBTMMjlUnP3A26BCaQs3beGVmcK03T3KKr9uxr1Ay4HzmqvxgzpF/H35iduLa5Mv/hHUt7zyCwXMhP9S0IF1aofwgtcVHcATc+Xlrxvy/K77jCUbiuSXn+AoKxSqUHxhcXXDZpmy8U8bUVV9SIkakNaTy+fxwS5Xyu8ldB9ZAUzZeMZ8ZdTOZrZN0EDl0e+H9QIqM3TwekVB+6B1B+aWqrhz5R6qAOJHSDW9MNKSRuZGP8MqHfaIjblJVCk6vWV6bx0EYKD8s54bySwGzHPmli8XvXq7yv7bE371IGMaL/Xo8//x0hkcmu7hRndNALtU7wO138s27RvcyJiXFxBlPb7wTq0UbOhPCjfX8aAvNk99TDf/HK/MUpPOcBDFKxZmE1Hi7yLqVXWF+GNqe+AaSaZtHIWd+XuflActME7NwsZarumjYHoZy8uSHvtblirUpEf8jh1sCaZdapkmqkCOYMSbn4Sm4c8P5ALDikC4Wc0WxjpjRxMqTf56pHyl91LKuFJ9rhMculldTAheRo33WV8gvtpZptt0MTZhc+VOzLpmNb8/ghjAmSqrCRoVPjwpyFOVmoaEzyb4+KjfOl99JXa4pG6/6KH9KfXi65bNottDIh1DILySzsi8PZ0WB/B8refivMk94U9LTOgvbSlXPkwL9yU/49GNmkY/C9dldlN4iv1yLV5/DQX/lyPOHP+HpQ5iD3KoIhqJ1IWssRoc3srMn8soK5JdTPY3ZeMX3PRn4ah6F0FW22Pm0uFqWifj+MlX66Sedz87s06t/NCuK5IeLpOII4DszaBFlih2ZO/UZtDGiqhnA+BdwxI6ytUjMs/nUlu8LiapYiuS3YI3R1fr3d8WeLqkpjrKHVaniFzYoX7mfV58/PnC5sL/LzNVUjoKNEUbJ1XZxVMlnFLRv++Etm/3wmB/FoXNQCE0as/FKeM60t9zuGO1uFse+UxBRPPm9DY++85FibvymD1YLJq3DiqLd4jidSKu101qsaHd36E1ncbsFyV4KbOXN2Xj/yskeCDp//uLJwjeCBSfN2XjfBWCvqiLdmurZtuKNvAU2XvU3TGiqxkR8MZ15o5OzAOpHiR/NoxHfjUTEgSD5lz/04H8OiuicWPn1T549B0VsWrhc2ux5Dr+q1AIu+4WimjtZKdRnTUmz1B5FZsBA2+LXaSpBkS9jWv2nMf5JBVUJ1+7uE7GX8IwNMjeNCzPXHK+/Pf+MDl/ttfgvwLId8SNS2tjXaGrP/9WHmV2cUcyXAAAAAElFTkSuQmCC" 
            alt="Logo" 
            className="w-auto h-20"
          />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>
        
        {/* Email Input */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          className="mb-4"
        />

        {/* Password Input */}
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          className="mb-2"
        />

        {/* Forgot Password Link */}
        <div className="flex justify-end mb-4">
          <a 
            href="/forgot-password" 
            className="text-sm text-blue-600 hover:underline transition duration-300"
          >
            Forgot Password?
          </a>
        </div>

        {/* Sign In Button */}
        <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1">
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center my-4">
          <hr className="w-1/4 border-gray-300" />
          <span className="px-4 text-gray-500">or</span>
          <hr className="w-1/4 border-gray-300" />
        </div>

        {/* Google Sign In Button */}
        <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-600 font-semibold hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1">
          <FaGoogle className="mr-2" />
          Continue with Google
        </button>
      </div>
    </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
