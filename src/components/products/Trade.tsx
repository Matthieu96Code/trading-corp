import Image from "next/image";
import automate from "../../../public/image/EADev.png";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { currencies } from "./trade/Currencies";

export default function Trade() {

    console.log(currencies);
    return (
        <div className="flex px-10">
            <div className="w-5/12 m-auto my-10 grow">
                <h3 className="mb-10 product-subtitle">Do you have a trading strategy? We help you automate it.</h3>
                {
                    currencies.coins.map((currency, index) => 
                        (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex justify-between h-28 px-10 py-5 my-10">
                                <div className="w-1/5 m-auto shrink-0">
                                    <Image className="w-8/12" src={automate} alt="Automate logo"/>
                                </div>
                                <div className="flex flex-col grow m-auto">
                                    <h4 className="mb-5 product-subtitle">Perfect Money Hi</h4>
                                    <p className="my-2 text-slate-500">Click to buy or sell.{currency.name}</p>
                                </div>
                                <div className="flex items-center px-10">
                                    <FaRegArrowAltCircleRight size={48} color={"blue"}/>
                                </div>
                            </div>         
                        )
                    )
                }
            </div>
            <div className="w-4/12 m-auto">
                <Image className="w-1/2" src={automate} alt="Automate logo"/>
            </div>
        </div>
    )
}