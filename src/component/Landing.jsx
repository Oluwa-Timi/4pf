import React from "react";
import { Link } from "react-router-dom";

export default function Landing () {
    return (
        <>
         

        <div className="text-white bg-[url('/block.webp')] bg-center bg-cover lg:h-[60vh] justify-center flex flex-col gap-2 justify-items-center p-5 md:h-[50vh]">
                <h1 className="text-3xl font-bold md:text-3xl lg:text-5xl lg:text-center  md:text-center text-center ">Your Dapps entry point to wallet</h1>
                <p className="text-white opacity-80 lg:text-[18px] text-center text-wrap">MainnetSync is an open protocol Meticulously crafted tool that provides a seamless, simple and secure connection between you and any decentralized application (DApp) on different network
            </p>

            <Link to="/Page2" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center w-max self-center mt-9">
                Connect Wallet
            </Link>
        </div>


        </>

    );
}