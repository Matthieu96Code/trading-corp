import Image from "../../../node_modules/next/image";
import training from "../../../public/image/training concer 0.png";

export default function Training() {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-11/12 m-auto my-10">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <Image className="h-48 w-full object-cover md:h-full md:w-96" src={training} alt="Smart Money v2 logo"/>
                </div>
                <div>
                    <div className="p-8">
                        <p className="my-2 text-slate-500">This program aims to enable traders to develop their own trading system and automate their strategies to be more productive in the financial markets.</p>

                        <h4 className="mt-5 product-subtitle">What are the benefits?</h4>
                        <ol className="mb-10 text-slate-500">
                            <li className="my-2">1 - Learn to create your own trading system.</li>
                            <li className="my-2">2 - Learn to create your own trading robot.</li>
                            <li className="my-2">3 - Learn to automate your trading strategy.</li>
                        </ol>

                        <p className="product-subtitle">Price : $350 | One-time payment </p>
                        <p className="product-subtitle">Program durarion : 1 Month</p>
                        <button className="border-2 border-rose-600 bg-rose-600 text-white py-2 px-10 rounded-lg text-lg mt-6">I&apos;m interested</button>
                    </div>
                </div>
            </div>
        </div>
    )
}