import Image from "../../../node_modules/next/image";
import cashBackV3 from "../../../public/image/feature image f 0.png";

export default function CashBackV3() {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-11/12 m-auto my-10">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <Image className="h-48 w-full object-cover md:h-full md:w-96" src={cashBackV3} alt="Cash Back v3 logo"/>
                </div>
                <div>
                    <div className="p-8">
                        <h3 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Cash Back v3</h3>
                        <p className="my-2 text-slate-500"><span>Cash Back v3</span> addresses the profitability needs of traders. It&apos;s the first trading system that can anticipate market manipulations and assist traders in improving the quality of their trades.</p>

                        <h4 className="product-subtitle">How does it work?</h4>
                        <p className="my-2 text-slate-500">This robot is installed on a PC and is used on the 1-hour time frame. The system analyzes the market and automatically takes positions with a precise signal quality of 95%. Additionally, it offers several features such as a trailing stop and an intelligent take profit controlled by artificial intelligence, allowing you to manage your risks more effectively.</p>

                        <h4 className="product-subtitle">Good to know!</h4>
                        <p className="my-2 text-slate-500">Payments are currently made via Perfect Money. After your payment, you need to enter your email address to receive your software automatically by email. If you don&apos;t have Perfect Money, you can pay using Mobile Money by contacting the Trading Mate payment agent directly, exclusively via WhatsApp at +225 05 84 57 54 37. Please note that Trading Mate does not collect your email address. The email you provide is solely for sending you the software after payment.</p>
                        <p className="product-subtitle">Cash Back v3 Price</p>
                        <p className="product-subtitle">85 USD</p>
                        <button className="border-2 border-rose-600 bg-rose-600 text-white py-2 px-10 rounded-lg text-lg mt-6">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}