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
        <div className="bg-cover bg-fixed bg-no-repeat bg-[url('/image/training.png')] flex px-10">
            <div className=" w-5/12 m-auto my-10 grow">
                <h3 className="text-slate-100 mb-10 product-subtitle">Do you have a trading strategy? We help you automate it.</h3>
                {
                    transfert.coins.map((currency, index) => 
                        (
                            <div key={index} className="rounded-sm overflow-hidden flex justify-between h-28 px-10 py-5 my-10">
                                <div className="w-1/5 m-auto shrink-0">
                                    <Image className="h-auto w-8/12" src={currency.icon} alt={currency.name} width={100} height={100}/>
                                </div>
                                <div className="flex flex-col grow m-auto">
                                    <h4 className="text-white mb-5 product-subtitle">{currency.name}</h4>
                                    <p className="my-2 text-slate-100">{currency.details}</p>
                                </div>
                                <button type="button" className="flex items-center px-10 border-white">
                                    <p className="text-white px-5">Exchange</p>
                                    <GiBuyCard size={48} color={"white"}/>
                                </button>
                            </div>         
                        )
                    )
                }
            </div>
        </div>
    )
}
