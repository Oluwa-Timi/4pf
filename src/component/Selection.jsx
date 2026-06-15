import React from "react";
import { Link } from "react-router-dom";
import MeizuMigrationToolIcon from '@iconify-react/arcticons/meizu-migration-tool';
import FileValidationIcon from '@iconify-react/hugeicons/file-validation';
import SynchronizeTriangleIcon from '@iconify-react/streamline-cyber/synchronize-triangle';
import CheckCorrectIcon from '@iconify-react/icon-park/check-correct';
import DataRecoveryIcon from '@iconify-react/hugeicons/data-recovery';
import GiftIcon from '@iconify-react/mdi/gift';
import StakeIcon from '@iconify-react/hugeicons/stake';
import BubbleChatDelayIcon from '@iconify-react/hugeicons/bubble-chat-delay';
import BuyIcon from '@iconify-react/icon-park-outline/buy';
import NftbIcon from '@iconify-react/token/nftb';
import MoneyWithdrawIcon from '@iconify-react/bx/money-withdraw';
import BridgeIcon from '@iconify-react/tdesign/bridge';
import RocketLaunchIcon from '@iconify-react/mdi/rocket-launch';
import SwapIcon from '@iconify-react/token/swap';
import Preview16Icon from '@iconify-react/qlementine-icons/preview-16';
import GasPumpIcon from '@iconify-react/fa-solid/gas-pump';
import PurchaseTagIcon from '@iconify-react/bxs/purchase-tag';
import AsteriskIcon from '@iconify-react/icon-park-solid/asterisk';




export default function Selection (){
    return (
        <>  

        <div className="text-white mx-auto lg:w-full bg-black text-center border-t-5 text-6xl md:font-normal h-[15vh] border-b-0 lg:p-5 lg:font-normal p-5 md:text-center md:justify-center">SERVICES</div>

        <div className="bg-[#030710] h-fit lg:grid lg:grid-cols-3 gap-5 lg:gap-5 lg:p-5 md:flex md:flex-col md:gap-8 lg:w-full p-5 sm:flex sm:flex-col sm:gap-8">

            <Link to="/page2">
                <div className="bg-emerald-400 h-[40vh] flex flex-col gap-3 p-5 "><CheckCorrectIcon  className="h-[10vh]" />
                <h1 className="text-3xl text-white font-semibold ">RECTIFCATION</h1>
                <p className="text-white">Rectification Support warranties completely decentralized</p>
                <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">Select</button>
                </div></Link>

           <Link to="/page2">
            <div className="bg-amber-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0"><MeizuMigrationToolIcon  className=" h-[10vh]"/>
                <h1 className="text-3xl text-white font-semibold">MIGRATION</h1>
                <p className="text-white">Migration Support for seamless transitions to a new contract</p>
                <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">Select</button>
            </div>
            </Link>

            <Link to="/page2">
                <div className="bg-green-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0"><DataRecoveryIcon  className="h-[10vh]" />
                <h1 className="text-3xl text-white font-semibold">Recovery</h1>
                <p className="text-white">Recovery Support for restoring lost or inaccessible wallet with Blockchain and DeFI</p>
                <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">Select</button>
            </div></Link>

            <Link to="/page2">
                <div className="bg-pink-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0"><RocketLaunchIcon   className="h-[10vh]" />
                <h1 className="text-3xl text-white font-semibold">Activation</h1>
                <p className="text-white">Activation Support for enabling and managing your wallet </p>
                <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">Select</button>
            </div>
            </Link>

            <Link to="/page2">
                <div className="bg-emerald-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0"><FileValidationIcon  viewBox="0 0 48 48" className="h-[10vh]" />
                <h1 className="text-3xl text-white font-semibold">Validation</h1>
                <p className="text-white">Validation completely verifying the authenticity and integrity of wallet</p>
                <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">Select</button>
            </div>
            </Link>

            <Link to="/page2">
                <div className="bg-emerald-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0"><SynchronizeTriangleIcon  viewBox="0 0 48 48" className="h-[10vh]" />
                <h1 className="text-3xl text-white font-semibold">Synchronization</h1>
                <p className="text-white">Synchronization Support for ensuring accurate and up-to-date information with your wallet</p>
                <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">Select</button>
            </div>
            </Link>

            <Link to="/page2">
                <div className="bg-indigo-600 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0"><GiftIcon  viewBox="0 0 48 48" className="h-[10vh]" />
                <h1 className="text-3xl text-white font-semibold">Claim Airdrop</h1>
                <p className="text-white">Claim your airdrop tokens directly to your wallet</p>
                <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">Select</button>
            </div>
            </Link>

            <Link to="/page2">
                <div className="bg-purple-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0"><Preview16Icon  viewBox="0 0 48 48" className="h-[10vh]" />
                <h1 className="text-3xl text-white font-semibold">STAKE REVIEW</h1>
                <p className="text-white">Interaction between mobile apps and the browser are supported via mobile web views</p>
                <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">Select</button>
            </div></Link>

            <Link to="/page2">
                <div className="bg-emerald-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0"><AsteriskIcon  viewBox="0 0 48 48" className="h-[10vh]" />
                <h1 className="text-3xl text-white font-semibold">CLAIM STAKE</h1>
                <p className="text-white">Claim your staked tokens and rewards</p>
                <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">Select</button>
            </div></Link>

            <Link to="/page2">
                <div className="bg-emerald-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0"><PurchaseTagIcon  viewBox="0 0 48 48" className="h-[10vh]" />
                <h1 className="text-3xl text-white font-semibold">CLAIM PRESALE</h1>
                <p className="text-white">Claim your presale tokens on promotional terms before the public sale</p>
                <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">Select</button>
            </div></Link>

            <Link to="/page2">
                <div className="bg-blue-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0"><BubbleChatDelayIcon  viewBox="0 0 48 48" className="h-[10vh]" />
                <h1 className="text-3xl text-white font-semibold">Transaction Delay</h1>
                <p className="text-white">Transaction Delay for processing transactions on the blockchain</p>
                <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">Select</button>
            </div></Link>

            <Link to="/page2">
                <div className="bg-cyan-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0"><SwapIcon  viewBox="0 0 48 48" className="h-[10vh]" />
                <h1 className="text-3xl text-white font-semibold">SWAP TOKEN</h1>
                <p className="text-white">Swap tokens directly with competitive rates and low fees</p>
                <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">Select</button>
            </div></Link>

            <Link to="/page2">
                <div className="bg-teal-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0"><BuyIcon  viewBox="0 0 48 48" className="h-[10vh]" />
                <h1 className="text-3xl text-white font-semibold">Buy Token</h1>
                <p className="text-white">Buy tokens directly from the platform</p>
                <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">Select</button>
            </div></Link>

            <Link to="/page2">
                <div className="bg-lime-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0"><StakeIcon  viewBox="0 0 48 48" className="h-[10vh]" />
                <h1 className="text-3xl text-white font-semibold">STAKE TOKEN</h1>
                <p className="text-white">Stake your tokens to earn rewards and participate in governance</p>
                <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">Select</button>
            </div></Link>

            <Link to="/page2">
                <div className="bg-yellow-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0"><BridgeIcon  viewBox="0 0 48 48" className="h-[10vh]" />
                <h1 className="text-3xl text-white font-semibold">BRIDGE TOKEN</h1>
                <p className="text-white">Bridge tokens between different blockchain networks</p>
                <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">Select</button>
            </div>
            </Link>

            <Link to="/page2">
                <div className="bg-amber-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0"><GasPumpIcon  viewBox="0 0 48 48" className="h-[10vh]" />
                <h1 className="text-3xl text-white font-semibold">Gas Fee</h1>
                <p className="text-white">Gas Fee for executing transactions on the blockchain</p>
                <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">Select</button>
            </div>
            </Link>

            <Link to="/page2">
                <div className="bg-amber-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0"><NftbIcon  viewBox="0 0 48 48" className="h-[10vh]" />
                <h1 className="text-3xl text-white font-semibold">NFTs</h1>
                <p className="text-white">Buy, sell, and trade non-fungible tokens on the platform</p>
                <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">Select</button>
            </div>
            </Link>

            <Link to="/page2">
                <div className="bg-emerald-400 h-[40vh] flex flex-col gap-3 p-5 mt-4 lg:mt-0"><MoneyWithdrawIcon viewBox="0 0 48 48" className="h-[10vh]" />
                <h1 className="text-3xl text-white font-semibold">WITHDRAWAL</h1>
                <p className="text-white">Withdraw your funds from the platform at any time to your wallet</p>
                <button className="bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 w-[35%] ">Select</button>
            </div>
            </Link>
        </div>

        <div className="flex flex-col gap-5 p-5 text-white bg-cyan-950 md:h-fit lg:h-[25vh]">
            <h1 className="text-center">Ready to resolve your blockchain issues?</h1>
            <p className="text-center">We are here to provide help.</p>

            <Link to="/Page2" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center w-max self-center mb-4 ">
                Start Here
            </Link>
        </div>


        </>

    )

}
