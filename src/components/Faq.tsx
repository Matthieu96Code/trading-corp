export default function Faq() {
    return(
        <section className="bg-gray-100 py-2 flex flex-col">
            <h2 className="text-center text-4xl pb-5">FAQ</h2>
            <ol className="w-11/12 m-auto">
                <li className="py-3">
                    <h3 className="py-2 font-bold">
                        <span>1 ) </span>On which platform do the Trading Systems/Robots operate?
                    </h3>
                    <p>
                        The systems & robots are used on the MetaTrader 5 (MT5) platform.
                    </p>
                </li>
                <li className="py-3">
                    <h3 className="py-2 font-bold">
                        <span>2 ) </span>Can the Trading Systems/Robots work on a mobile phone?
                    </h3>
                    <p>
                        Although the systems/robots are optimized for computer use, you have the option to use a FOREX VPS (Virtual Private Server) to run them on your phone.
                    </p>
                </li>
                <li className="py-3">
                    <h3 className="py-2 font-bold">
                        <span>3 ) </span>On which time frame do we trade with the Trading Systems/Robots?
                    </h3>
                    <p>
                        Based on our experience with the systems/robots, it is recommended to trade on a 1-hour time frame (H1). However, you can test them on longer time frames, such as 4 hours (H4), 1 day (D1), 1 week (W1), 1 month (MN).
                    </p>
                </li>
                <li className="py-3">
                    <h3 className="py-2 font-bold">
                        <span>4 ) </span>How much do you earn per day with the Trading Systems/Robots?
                    </h3>
                    <p>
                        Given the dynamic and flexible nature of the financial market, it&apos;s challenging to predict in advance the ratio between gain and invested capital. However, the systems/robots can end the week or month in profit as long as you adhere to the system&apos;s recommendations (entry conditions, application of stop-loss). Click here to get an idea of other traders&apos; experiences with the TradingMate Systems/Robots.
                    </p>
                </li>
                <li className="py-3">
                    <h3 className="py-2 font-bold">
                        <span>5 ) </span>What payment methods are available to purchase the Trading Systems/Robots?
                    </h3>
                    <p>
                        You can make payments via Mobile Money: Orange Money, MTN Money, Wave, or through Electronic Currency: Perfect Money and Bitcoin.
                    </p>
                </li>
            </ol>
        </section>
    )
}