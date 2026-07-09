
import React, { useState } from "react";
import Last from "./Last";

export default function Wallet() {
  const [selectedWallet, setSelectedWallet] = useState(null);

    const user =[
        {id:1, name:"Trust Wallet", image:"/trust.png"},
        {id:2, name:"MetaMask", image:"/MetaMask.png"},
        {id:3, name:"Token Pocket", image:"/token.png"},
        {id:4, name:"OKX Wallet", image:"/okx.png"},
        {id:5, name:"Coinbase Wallet", image:"/base.png"},
        {id:11, name:"Safepal Wallet", image:"/safepal.png"},
        {id:6, name:"Ledger Wallet", image:"/ledger.png"},
        {id:7, name:"Phantom Wallet", image:"/ghost.png"},
        {id:8, name:"Best Wallet", image:"/best.png"},
        {id:9, name:"Tron", image:"/tron.png"},
        {id:10, name:"Ronin Wallet", image:"/ronin.png"},
        {id:12, name:"Bitget Wallet", image:"/bitget.webp"},
        {id:13, name:"Wallet Connect", image:"/wallet.png"},
        {id:14, name:"Exodus Wallet", image:"/image1.png"},
        {id:15, name:"Formatic Wallet", image:"/formatic.jpg"},
        {id:16, name:"Crypto.com", image:"/cryptoo.jpg"},
        {id:17, name:"BRD Wallet", image:"/brd.png"},
        {id:18, name:"Terra Station", image:"/terra.png"},
        {id:19, name:"Binance Wallet", image:"/binanc.png"},
        {id:20, name:"Sui Wallet", image:"/sui.png"},
        {id:21, name:"Backpack Wallet", image:"/backpack.png"},
        {id:22, name:"Atomic Wallet", image:"/atomic.png"},
        {id:23, name:"BitPay Wallet", image:"/bitpay.png"},
        {id:24, name:"Aave Wallet", image:"/aave.jpg"},
        {id:25, name:"Rainbow", image:"/rainbow.png"},
        {id:26, name:"Digitex", image:"/digi.png"},
        {id:27, name:"Math Wallet", image:"/math.png"},
        {id:28, name:"Rabby Wallet", image:"/rabby.png"},
        {id:29, name:"Bitkeep", image:"/Bitkeep.png"},
        {id:30, name:"Trezor", image:"/trezor.webp"},
        {id:31, name:"Huobi", image:"/huobi.png"},
        {id:32, name:"Midas Wallet", image:"/midas.png"},
        {id:33, name:"Coin 98", image:"/98.png"},
        {id:34, name:"Torus", image:"/torus.svg"},
        {id:35, name:"Ellipal", image:"/ell.png"},
        {id:36, name:"1inch Wallet", image:"/1inch.png"},
        {id:37, name:"Ownbit", image:"/ownbit.png"},
        {id:38, name:"EasyPocket", image:"/easy.png"},
        {id:39, name:"Ton Wallet", image:"/ton.png"},
        {id:40, name:"Cosmos Station", image:"/cosmos.webp"},
        {id:41, name:"ZelCore", image:"/zelcore.png"},
        {id:42, name:"Bridge Wallet", image:"/bridge.png"},
        {id:43, name:"Coinomi", image:"/coinomi.png"},
        {id:44, name:"SparkPoint", image:"/sparkp.png"},
        {id:45, name:"TonKeeper Wallet", image:"/tonkeeper.webp"},
        {id:46, name:"ViaWallet", image:"/via.png"},
        {id:47, name:"Dok Wallet", image:"/dot.png"},
        {id:48, name:"Talken Wallet", image:"/talk.png"},
    ]

  return (
    <>
      <div
        className="bg-[rgba(0,0,0,0.9)] h-screen text-center p-5 fixed top-0, left-0 w-full overflow-y-scroll"
        id="wallet"
      >
        <h1 className="text-5xl font-serif font-bold text-[#FAFAFA] p-8">
          CONNECT WALLET
        </h1>
        <p className="text-[#FAFAFA] opacity-80 text-lg font-medium mb-5">
          Please Select your wallet to continue
        </p>

            <ul className="md:w-[75%] mx-auto text-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

                {user.map((item) => (
                    <li key={item.id} className="p-5">
                        <button
                            type="button"
                            onClick={() => setSelectedWallet(item)}
                            className="flex flex-col items-center gap-3 w-full bg-transparent border-0 p-0"
                        >
                            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-full hover:scale-115" />
                            <span className="text-[#FAFAFA] opacity-80 text-lg font-medium">{item.name}</span>
                        </button>
                    </li>
                ))}
            </ul>

            {selectedWallet && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
                    <div className="w-full max-w-2xl">
                        <Last selectedWallet={selectedWallet} onClose={() => setSelectedWallet(null)} />
                    </div>
                </div>
            )}
                </div>
                
    </>
  );
}
