import Image from "next/image";
// import automate from "../../../public/image/EADev.png";
import { GiBuyCard } from "react-icons/gi";
// import { currencies } from "./trade/Currencies";

const transfert: { coins: { id: any, icon: string, name: string; details: string }[] } = {
    coins: [
        {
            id: 1,
            icon: "/image/pm.png",
            name: 'Perfect Money',
            details: 'use the Perfect Money system to transfer funds directly to your account.',
        },
        {
            id: 2,
            icon: "/image/btc.png",
            name: 'Crypto-Currency',
            details: 'use the Crypto-Currency system to transfer funds directly to your account.',
        },
        {
            id: 3,
            icon: "/image/deriv-icon.jpg",
            name: 'DP2P System',
            details: 'Use the DP2P system to transfer funds directly to your account.',
        },
    ],
};

export default function Trade() {

    return (
        <div className="bg-cover bg-fixed bg-no-repeat bg-[url('/image/trade-exchange.png')] flex">
            <div className="m-auto py-10">
                <h3 className="text-center text-slate-100 product-subtitle my-10">Do you need found to start trading?</h3>
                {
                    transfert.coins.map((currency, index) => 
                        (
                            <div key={index} className=" pb-10 rounded-sm overflow-hidden justify-between md:flex">
                                <div className="w-1/5 m-auto shrink-0">
                                    <Image className="w-8/12" src={currency.icon} alt={currency.name} width={100} height={100}/>
                                </div>
                                <div className="flex flex-col grow m-auto">
                                    <h4 className="text-center text-white product-subtitle">{currency.name}</h4>
                                    <p className="text-center text-slate-100">{currency.details}</p>
                                </div>
                                <button type="button" className="mx-auto my-5 flex items-center px-10 border border-slate-100 rounded-lg">
                                    <p className="text-white px-5">Exchange</p>
                                    <GiBuyCard size={48} color={"white"}/>
                                </button>
                                <hr className="background-slate-100" />
                            </div>     
                        )
                    )
                }
            </div>
        </div>
    )
}
