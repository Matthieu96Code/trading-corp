import Image from "next/image";
import cashBackV3 from "../../../public/image/feature image f 0.png";
import smartMoneyV2 from "../../../public/image/I want an image 0.png";


export default function Robots() {

    interface StaticImageData {
        src: string;
        height: number;
        width: number;
        blurDataURL?: string;
        placeholder?: string;
    }

    interface Robot {
        picture: StaticImageData;
        title: string;
        description: string;
        howItWorks: string;
        goodToKnow: string;
        price: string;
    }

    const robots: Robot[] = [
        {
            picture: cashBackV3,
            title: "Cash Back v3",
            description: " addresses the profitability needs of traders. It's the first trading system that can anticipate market manipulations and assist traders in improving the quality of their trades.",
            howItWorks: "This robot is installed on a PC and is used on the 1-hour time frame. The system analyzes the market and automatically takes positions with a precise signal quality of 95%. Additionally, it offers several features such as a trailing stop and an intelligent take profit controlled by artificial intelligence, allowing you to manage your risks more effectively.",
            goodToKnow: "Payments are currently made via Perfect Money. After your payment, you need to enter your email address to receive your software automatically by email. If you don't have Perfect Money, you can pay using Mobile Money by contacting the Trading Mate payment agent directly, exclusively via WhatsApp at +225 05 84 57 54 37. Please note that Trading Mate does not collect your email address. The email you provide is solely for sending you the software after payment.",
            price: "85 USD",
        },
        {
            picture: smartMoneyV2,
            title: "Smart Money v2",
            description: " is a trading system that allows you to trade on the 1-hour time frame. It is a system that allows you to trade with a 95% success rate. It is a system that allows you to trade with a 95% success rate.",
            howItWorks: "This robot is installed on a PC and is used on the 1-hour time frame. The system analyzes the market and automatically takes positions with a precise signal quality of 95%. Additionally, it offers several features such as a trailing stop and an intelligent take profit controlled by artificial intelligence, allowing you to manage your risks more effectively.",
            goodToKnow: "Payments are currently made via Perfect Money. After your payment, you need to enter your email address to receive your software automatically by email. If you don't have Perfect Money, you can pay using Mobile Money by contacting the Trading Mate payment agent directly, exclusively via WhatsApp at +225 05 84 57 54 37. Please note that Trading Mate does not collect your email address. The email you provide is solely for sending you the software after payment.",
            price: "85 USD",
        },
    ]

    return (
        <>
            {
                robots.map((robot, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden w-5/12 m-auto my-10">
                        <div className="">
                            <div className="">
                                <Image className="p-5 h-96 object-cover" src={robot.picture} alt="Cash Back v3 logo"/>
                            </div>
                            <div>
                                <div className="p-8">
                                    <h3 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Cash Back v3</h3>
                                    <p className="my-2 text-slate-500"><span>{robot.title}</span> {robot.description} </p>
            
                                    <h4 className="product-subtitle">How does it work?</h4>
                                    {/* <p className="my-2 text-slate-500">{robot.howItWorks}</p> */}
                                    <h4 className="product-subtitle">Good to know!</h4>
                                    {/* <p className="my-2 text-slate-500">{robot.goodToKnow}</p> */}
                                    <br />
                                    <p className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Price</p>
                                    <p className="text-slate-500">{robot.price}</p>
                                    <button className="border-2 border-rose-600 bg-rose-600 text-white py-2 px-10 rounded-lg text-lg mt-6">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
        
    )
}