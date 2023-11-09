import Image from "../../../node_modules/next/image";
import automate from "../../../public/image/EADev.png";

export default function CashBackV3() {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-11/12 m-auto my-10">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <Image className="h-48 w-full object-cover md:h-full md:w-96" src={automate} alt="Automate logo"/>
                </div>
                <div>
                    <div className="p-8">
                        <h3 className="mb-5 product-subtitle">Do you have a trading strategy? We help you automate it.</h3>
                        <p className="my-2 text-slate-500">Trading requires patience and discipline. Many traders have excellent trading strategies but struggle to make a profit simply because market setups or structures take time to form. Also, when opportunities arise, they are not connected in time to take advantage of market opportunities.</p>
                        <p className="my-5 text-slate-500">My Robot is a TradingMate service designed for traders with trading strategies who want to automate them. This is to avoid spending hours in front of the screen waiting for trading opportunities.</p>
                        <p className="my-2 text-slate-500">Once your strategy is automated, you simply need to activate it on your computer. Whenever an opportunity arises in the market, the system automatically places trades and sets orders (Stop Loss, Take Profit, Trailing Stop, Break Even) based on the parameters and configurations you&apos;ve already established in your trading strategy. So, are you ready to customize and automate your trading strategy? Click the button below.</p>
                        <button className="border-2 border-rose-600 bg-rose-600 text-white py-2 px-10 rounded-lg text-lg mt-6">I&apos;m automating my strategy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}