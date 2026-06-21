import React from "react";
import { Link } from "react-router-dom";

export default function Wallet({ setIsOpen }) {
  return (
    <>
      <div
        className="bg-[rgba(0,0,0,0.9)] h-fit text-center p-5 fixed top-0, left-0 w-full"
        onClick={() => setIsOpen(false)}
      >
        <h1 className="text-5xl font-serif font-bold text-[#FAFAFA] p-8">
          CONNECT WALLET
        </h1>
        <p className="text-[#FAFAFA] opacity-80 text-lg font-medium">
          Please Select your wallet to continue
        </p>

        <div className="h-fit w-[75%] mx-auto text-center grid lg:grid-cols-5 gap-2 p-5 m-5 md:grid md:grid-cols-3 md:gap-2 sm:grid sm:grid-cols-2 sm:gap-2 sm:h-fit">
          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] bg-[url('/trust.png')] bg-size-[90px] bg-center bg-no-repeat flex justify-center items-end hover:transition-transform hover:scale-115 mb-3">
              <h1 className="font-semibold mt-3 text-white">Trust Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className=" p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/MetaMask.png')] bg-size-[90px] bg-center bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">MetaMask</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/token.png')] bg-size-[70px] bg-center bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Token Pocket</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/okx.png')] bg-size-[70px] bg-center bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">OKX Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-full h-[20vh] flex items-end justify-center bg-[url('/base.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Coinbase Wallet</h1>
            </div>
          </Link>
          <Link to="/Submit">
            <div className=" p-4 rounded-full h-[20vh] flex items-end justify-center bg-[url('/ledger.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Ledger Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-full h-[20vh] flex items-end justify-center bg-[url('/ghost.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Phantom Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/best.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Best Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-full h-[20vh] flex items-end justify-center bg-[url('/tron.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Tron</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-full h-[20vh] flex items-end justify-center bg-[url('/ronin.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Ronin Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className=" p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/safepal.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Safepal Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/bitget.webp')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Bitget Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-full h-[20vh] flex items-end justify-center bg-[url('/wallet.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Wallet Connect</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-full h-[20vh] flex items-end justify-center bg-[url('/image1.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Exodus Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-full h-[20vh] flex items-end justify-center bg-[url('/formatic.jpg')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Formatic Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/cryptoo.jpg')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Crypto.com</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/brd.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">BRD Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/terra.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Terra Station</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/binanc.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Binance Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className=" p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/sui.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Sui Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/backpack.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Backpack Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/atomic.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Atomic Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/bitpay.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">BitPay Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/aave.jpg')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Aave Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/rainbow.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Rainbow</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/digi.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Digitex</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/math.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Math Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/rabby.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Rabby Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/Bitkeep.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Bitkeep</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/trezor.webp')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-105">
              <h1 className="text-white font-semibold mt-3">Trezor</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/huobi.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Huobi</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/midas.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Midas Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/98.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Coin 98</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/torus.svg')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Torus</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/ell.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Ellipal</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/1inch.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">1inch Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/ownbit.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Ownbit</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/easy.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">EasyPocket</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/ton.png')] bg-size-[90px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Ton Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/cosmos.webp')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Cosmos Station</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/zelcore.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">ZelCore</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/cosmos.webp')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Cosmos Station</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/zelcore.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">ZelCore</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/bridge.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Bridge Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/coinomi.png')] bg-size-[150px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Coinomi</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/sparkp.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">SparkPoint</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/tonkeeper.webp')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">
                TonKeeper Wallet
              </h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/via.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">ViaWallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/dot.png')] bg-size-[70px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Dok Wallet</h1>
            </div>
          </Link>

          <Link to="/Submit">
            <div className="p-4 rounded-lg h-[20vh] flex items-end justify-center bg-[url('/talk.png')] bg-size-[130px] bg-center  bg-no-repeat hover:transition-transform hover:scale-115 mb-3">
              <h1 className="text-white font-semibold mt-3">Talken Wallet</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
