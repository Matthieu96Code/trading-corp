import Image from "../../../node_modules/next/image";
import cashBackV3 from "../../../public/image/feature image f 0.png";

export default function CashBackV3() {
    return (
        <div>
            <h3>Cash Back v3</h3>
            <div>
                <Image src={cashBackV3} alt="Cash Back v3 logo"/>
                <div>
                    <div>
                        <p><span>Cash Back v3</span> addresses the profitability needs of traders. It&apos;s the first trading system that can anticipate market manipulations and assist traders in improving the quality of their trades.</p>

                        <h4>How does it work?</h4>
                        <p>This robot is installed on a PC and is used on the 1-hour time frame. The system analyzes the market and automatically takes positions with a precise signal quality of 95%. Additionally, it offers several features such as a trailing stop and an intelligent take profit controlled by artificial intelligence, allowing you to manage your risks more effectively.</p>

                        <h4>Good to know!</h4>
                        <p>Payments are currently made via Perfect Money. After your payment, you need to enter your email address to receive your software automatically by email. If you don&apos;t have Perfect Money, you can pay using Mobile Money by contacting the Trading Mate payment agent directly, exclusively via WhatsApp at +225 05 84 57 54 37. Please note that Trading Mate does not collect your email address. The email you provide is solely for sending you the software after payment.</p>
                        <p>Cash Back v3 Price</p>
                        <p>85 USD</p>
                        <button>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}