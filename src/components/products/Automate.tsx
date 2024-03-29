import Link from "next/link";
import Image from "../../../node_modules/next/image";
import automate from "../../../public/image/meeting.png";

export default function Automate() {
    return (
        <div className="bg-gray-200 rounded-sm shadow-md overflow-hidden flex justify-center m-auto py-24"  id="services">
            <div className="w-10/12 md:w-9/12">
                <div className="md:shrink-0">
                    <Image className="w-full object-cover md:h-full" src={automate} alt="Automate logo"/>
                </div>
                <div>
                    <div className="bg-white p-8">
                        <h3 className="text-center mb-5 product-subtitle">Do you have a trading strategy? We help you automate it.</h3>
                        <p className="my-2 text-slate-500">Trading requires patience and discipline. Many traders have excellent trading strategies but struggle to make a profit simply because market setups or structures take time to form. Also, when opportunities arise, they are not connected in time to take advantage of market opportunities.</p>
                        <p className="my-5 text-slate-500">My Robot is a TradingMate service designed for traders with trading strategies who want to automate them. This is to avoid spending hours in front of the screen waiting for trading opportunities.</p>
                        <p className="my-2 text-slate-500">Once your strategy is automated, you simply need to activate it on your computer. Whenever an opportunity arises in the market, the system automatically places trades and sets orders (Stop Loss, Take Profit, Trailing Stop, Break Even) based on the parameters and configurations you&apos;ve already established in your trading strategy. So, are you ready to customize and automate your trading strategy? Click the button below.</p>
                        <button className="main-button mt-6"><Link href="https://deriv.com/dbot/" target="blank">I&apos;m automating my strategy</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}