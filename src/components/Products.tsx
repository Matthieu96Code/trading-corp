import Robots from "./products/Robots"
import Trade from "./products/Trade"

export default function Products() {
    return (
        <section className="flex flex-col" id="products">
            <div className="bg-gray-200 py-10 ">
                <h2 className="my-4 text-center text-4xl">Products</h2>
                <div className="my-4">
                    <h4 className="my-2 text-center text-2xl">To make money in trading, you don&apos;t need much.</h4>
                    <p className="text-center text px-2 md:px-24">Most traders believe that to be profitable in trading, it takes years of experience or memorizing every technical indicator and chart pattern. This belief is mistaken because all you really need is a solid trading system that supports and guides your decision-making in the markets.</p>
                </div>
                <div className="bg-gray-200 xl:flex xl:justify-around xl:gap-10 px-[9%]">
                    <Robots />
                </div>
            </div>
            <div  className="bg-gray-100">
                <Trade />
            </div>
        </section>
    )
}