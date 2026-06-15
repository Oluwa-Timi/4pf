import React from "react";
import { Link } from "react-router";




export default function First() {
  return (
    <>
      
      <marquee behavior="scroll" direction="left" className=" items-center h-[50%] p-1 flex gap-10 text-sm font-medium text-gray-700">
      <div className="flex gap-5 items-center ">

        <div className="flex gap-1 items-center">
        <img src="/bitcoin.webp" alt="" className="w-5 h-5"/> <span>Bitcoin</span>
        <span>(BTC) $70,784</span> <span>(+4.85%)</span> 
        </div>

        <div className="flex gap-1 items-center">
       <img src="/ethereum.webp" alt="" className="w-5 h-5"/> <span>Ethereum</span>
        <span>(ETH) $2,100</span> <span>(+7.5%)</span>
        </div>

        <div className="flex gap-1 items-center">
        <img src="/eos-eos-logo.webp" alt="" className="w-5 h-5"/> <span>EOS</span>
        <span>(EOS) $0.722345</span> <span>(-2.84%)</span>
        </div>

        <div className="flex gap-1 items-center">  
        <img src="/xrp.webp" alt="" className="w-5 h-5"/> <span>XRP</span>
        <span>(XRP) $1.47</span> <span>(+7.7%)</span>
      </div>

      </div>
     
    </marquee>
                          
         <div className="bg-red-700 p-5 h-[50%] flex justify-between items-center sm:flex sm:gap-3">
        <h1 className="lg:text-2xl md:text-2xl lg:font-bold font-bold sm:text-xl">MainnetNodes</h1>
       <Link to="/Page2">
          <button className="bg-white text-red-700 px-4 py-2 rounded-full hover:bg-gray-200">
          Connect Wallet
        </button>
        </Link>
     </div>
     
    </>
  );
}