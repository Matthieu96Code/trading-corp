import Image from "../../../node_modules/next/image";

export default function Training() {
    return (
        <div className="bg-cover bg-fixed bg-no-repeat bg-[url('/image/training.png')] shadow-md overflow-hidden m-auto py-10">
            <div className="my-4">
                <h4 className="my-2 text-center text-white text-2xl">Training</h4>
                <p className="text-white text-center text px-2 md:px-24">Creation of Trading Robots and Systems.</p>
            </div>
            <div className="md:flex">
                <div className="px-8">
                    <p className="my-2 text-slate-100">This program aims to enable traders to develop their own trading system and automate their strategies to be more productive in the financial markets.</p>

                    <h4 className="text-white mt-5 product-subtitle">What are the benefits?</h4>
                    <ol className="mb-10 text-slate-100">
                        <li className="my-2">1 - Learn to create your own trading system.</li>
                        <li className="my-2">2 - Learn to create your own trading robot.</li>
                        <li className="my-2">3 - Learn to automate your trading strategy.</li>
                    </ol>

                    <p className="text-white product-subtitle">Price : $350 | One-time payment </p>
                    <p className="text-white product-subtitle">Program durarion : 1 Month</p>
                    <button className="main-button mt-6">I&apos;m interested</button>
                </div>
            </div>
        </div>
    )
}