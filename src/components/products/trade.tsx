import Image from "../../../node_modules/next/image";
import automate from "../../../public/image/EADev.png";

export default function Trade() {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-11/12 m-auto my-10">
            <h3 className="mb-5 product-subtitle">Do you have a trading strategy? We help you automate it.</h3>
            <div className="flex justify-around">
                <div className="flex flex-col justify-between">
                    <div className="shrink-0">
                        <Image className="w-1/2" src={automate} alt="Automate logo"/>
                    </div>
                    <div>
                        <div className="p-8">
                            <h4 className="mb-5 product-subtitle">Perfect Money Hi</h4>
                            <p className="my-2 text-slate-500">Click to buy or sell.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="shrink-0">
                        <Image className="h-48 w-full object-cover md:h-full md:w-96" src={automate} alt="Automate logo"/>
                    </div>
                    <div>
                        <div className="p-8">
                            <h4 className="mb-5 product-subtitle">Crypto Currencies</h4>
                            <p className="my-2 text-slate-500">Click to buy or sell.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="shrink-0">
                        <Image className="w-1/2" src={automate} alt="Automate logo"/>
                    </div>
                    <div>
                        <div className="p-8">
                            <h4 className="mb-5 product-subtitle">DP2P System</h4>
                            <p className="my-2 text-slate-500">Click to buy or sell.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}