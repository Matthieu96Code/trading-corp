import CashBackV3 from "./products/CashBackV3"
import SmartMoneyV2 from "./products/SmartMoneyV2"

export default function Products() {
    return (
        <section>
            <h2>Products</h2>
            <div>
                <h4>To make money in trading, you don&apos;t need much.</h4>
                <p>Most traders believe that to be profitable in trading, it takes years of experience or memorizing every technical indicator and chart pattern. This belief is mistaken because all you really need is a solid trading system that supports and guides your decision-making in the markets.</p>
            </div>
            <div>
                <CashBackV3 />
                <SmartMoneyV2 />
            </div>
        </section>
    )
}