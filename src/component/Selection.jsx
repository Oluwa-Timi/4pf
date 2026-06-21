import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Selection() {
  return (
    <>
      <div className="text-white mx-auto lg:w-full bg-black text-center border-t-5 text-6xl md:font-normal h-[15vh] border-b-0 lg:p-5 lg:font-normal p-5 md:text-center md:justify-center">
        SERVICES
      </div>

      <div className="bg-[#030710] h-fit lg:grid lg:grid-cols-3 gap-5 lg:gap-5 lg:p-5 md:flex md:flex-col md:gap-8 lg:w-full p-5 sm:flex sm:flex-col sm:gap-8">
        <Link to="/page2">
          <div className="bg-emerald-400 h-[40vh] flex flex-col gap-3 p-5 ">
            <Icon icon="icon-park:check-correct" className="h-[10vh]" />
            <h1 className="text-3xl text-white font-semibold">RECTIFCATION</h1>
            <p className="text-white">
              Rectification Support warranties completely decentralized
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">
              Select
            </button>
          </div>
        </Link>

        <Link to="/page2">
          <div className="bg-amber-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0">
            <Icon icon="arcticons:meizu-migration-tool" className="h-[10vh]" />
            <h1 className="text-3xl text-white font-semibold">MIGRATION</h1>
            <p className="text-white">
              Migration Support for seamless transitions to a new contract
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">
              Select
            </button>
          </div>
        </Link>

        <Link to="/page2">
          <div className="bg-green-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0">
            <Icon icon="hugeicons:data-recovery" className="h-[10vh]" />
            <h1 className="text-3xl text-white font-semibold">Recovery</h1>
            <p className="text-white">
              Recovery Support for restoring lost or inaccessible wallet with
              Blockchain and DeFI
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">
              Select
            </button>
          </div>
        </Link>

        <Link to="/page2">
          <div className="bg-pink-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0">
            <Icon icon="mdi:rocket-launch" className="h-[10vh]" />
            <h1 className="text-3xl text-white font-semibold">Activation</h1>
            <p className="text-white">
              Activation Support for enabling and managing your wallet{" "}
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">
              Select
            </button>
          </div>
        </Link>

        <Link to="/page2">
          <div className="bg-emerald-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0">
            <Icon icon="hugeicons:file-validation" className="h-[10vh]" />
            <h1 className="text-3xl text-white font-semibold">Validation</h1>
            <p className="text-white">
              Validation completely verifying the authenticity and integrity of
              wallet
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">
              Select
            </button>
          </div>
        </Link>

        <Link to="/page2">
          <div className="bg-emerald-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0">
            <Icon
              icon="streamline-cyber:synchronize-triangle"
              className="h-[10vh]"
            />
            <h1 className="text-3xl text-white font-semibold">
              Synchronization
            </h1>
            <p className="text-white">
              Synchronization Support for ensuring accurate and up-to-date
              information with your wallet
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">
              Select
            </button>
          </div>
        </Link>

        <Link to="/page2">
          <div className="bg-indigo-600 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0">
            <Icon icon="mdi:gift" className="h-[10vh]" />
            <h1 className="text-3xl text-white font-semibold">Claim Airdrop</h1>
            <p className="text-white">
              Claim your airdrop tokens directly to your wallet
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">
              Select
            </button>
          </div>
        </Link>

        <Link to="/page2">
          <div className="bg-purple-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0">
            <Icon icon="qlementine-icons:preview-16" className="h-[10vh]" />
            <h1 className="text-3xl text-white font-semibold">STAKE REVIEW</h1>
            <p className="text-white">
              Interaction between mobile apps and the browser are supported via
              mobile web views
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">
              Select
            </button>
          </div>
        </Link>

        <Link to="/page2">
          <div className="bg-emerald-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0">
            <Icon icon="icon-park-solid:asterisk" className="h-[10vh]" />
            <h1 className="text-3xl text-white font-semibold">CLAIM STAKE</h1>
            <p className="text-white">Claim your staked tokens and rewards</p>
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">
              Select
            </button>
          </div>
        </Link>

        <Link to="/page2">
          <div className="bg-emerald-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0">
            <Icon icon="bxs:purchase-tag" className="h-[10vh]" />
            <h1 className="text-3xl text-white font-semibold">CLAIM PRESALE</h1>
            <p className="text-white">
              Claim your presale tokens on promotional terms before the public
              sale
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">
              Select
            </button>
          </div>
        </Link>

        <Link to="/page2">
          <div className="bg-blue-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0">
            <Icon icon="hugeicons:bubble-chat-delay" className="h-[10vh]" />
            <h1 className="text-3xl text-white font-semibold">
              Transaction Delay
            </h1>
            <p className="text-white">
              Transaction Delay for processing transactions on the blockchain
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">
              Select
            </button>
          </div>
        </Link>

        <Link to="/page2">
          <div className="bg-cyan-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0">
            <Icon icon="token:swap" className="h-[10vh]" />
            <h1 className="text-3xl text-white font-semibold">SWAP TOKEN</h1>
            <p className="text-white">
              Swap tokens directly with competitive rates and low fees
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">
              Select
            </button>
          </div>
        </Link>

        <Link to="/page2">
          <div className="bg-teal-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0">
            <Icon icon="icon-park-outline:buy" className="h-[10vh]" />
            <h1 className="text-3xl text-white font-semibold">Buy Token</h1>
            <p className="text-white">Buy tokens directly from the platform</p>
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">
              Select
            </button>
          </div>
        </Link>

        <Link to="/page2">
          <div className="bg-lime-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0">
            <Icon icon="hugeicons:stake" className="h-[10vh]" />
            <h1 className="text-3xl text-white font-semibold">STAKE TOKEN</h1>
            <p className="text-white">
              Stake your tokens to earn rewards and participate in governance
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">
              Select
            </button>
          </div>
        </Link>

        <Link to="/page2">
          <div className="bg-yellow-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0">
            <Icon icon="tdesign:bridge" className="h-[10vh]" />
            <h1 className="text-3xl text-white font-semibold">BRIDGE TOKEN</h1>
            <p className="text-white">
              Bridge tokens between different blockchain networks
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">
              Select
            </button>
          </div>
        </Link>

        <Link to="/page2">
          <div className="bg-amber-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0">
            <Icon icon="fa-solid:gas-pump" className="h-[10vh]" />
            <h1 className="text-3xl text-white font-semibold">Gas Fee</h1>
            <p className="text-white">
              Gas Fee for executing transactions on the blockchain
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">
              Select
            </button>
          </div>
        </Link>

        <Link to="/page2">
          <div className="bg-amber-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0">
            <Icon icon="token:nftb" className="h-[10vh]" />
            <h1 className="text-3xl text-white font-semibold">NFTs</h1>
            <p className="text-white">
              Buy, sell, and trade non-fungible tokens on the platform
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">
              Select
            </button>
          </div>
        </Link>

        <Link to="/page2">
          <div className="bg-emerald-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0">
            <Icon icon="bx:money-withdraw" className="h-[10vh]" />
            <h1 className="text-3xl text-white font-semibold">WITHDRAWAL</h1>
            <p className="text-white">
              Withdraw your funds from the platform at any time to your wallet
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">
              Select
            </button>
          </div>
        </Link>
      </div>

      <div className="flex flex-col gap-5 p-5 text-white bg-cyan-950 md:h-fit lg:h-[25vh]">
        <h1 className="text-center">
          Ready to resolve your blockchain issues?
        </h1>
        <p className="text-center">We are here to provide help.</p>

        <Link
          to="/Page2"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center w-max self-center mb-4 "
        >
          Start Here
        </Link>
      </div>
    </>
  );
}
