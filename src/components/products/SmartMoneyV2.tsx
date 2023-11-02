import Image from "../../../node_modules/next/image";
import smartMoneyV2 from "../../../public/image/I want an image 0.png";

export default function SmartMoneyV2() {
    return (
        <div>
            <h3>Smart Money v2</h3>
            <div>
                <Image src={smartMoneyV2} alt="Smart Money v2 logo"/>
                <div>
                    <div>
                        <p><span>Smart Money v2</span> meets the profitability needs of traders. It&apos;s the first 3-in-1 trading system capable of anticipating market manipulations and assisting traders in improving the quality of their trades. It detects areas with a high probability of buying or selling and provides you with precise quality signals at 90%.</p>

                        <h4>How does it work?</h4>
                        <p>This system is installed on a PC and is used on the 15-minute time frame (M15). The system analyzes the market and graphically indicates areas with a high probability of buying or selling, along with the market direction with 90% precision. You can then place your positions, considering your personal risk management, with lifelong daily monitoring.</p>

                        <h4>Good to know!</h4>
                        <p>Payments are currently made via Perfect Money. After your payment, you need to enter your email address to receive your software automatically by email. If you don&apos;t have Perfect Money, you can pay using Mobile Money by contacting the Trading Mate payment agent directly, exclusively via WhatsApp at +225 05 84 57 54 37. Please note that Trading Mate does not collect your email address. The email you provide is solely for sending you the software after payment.</p>
                        <p>Smart Money v2 Price</p>
                        <p>85 USD</p>
                        <button>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}