

const faqData = [
    {
        id: 1,
        question: 'On which platform do the Trading Systems/Robots operate?',
        answer: 'The systems & robots are used on the MetaTrader 5 (MT5) platform.'
    },
    {
        id: 2,
        question: 'Can the Trading Systems/Robots work on a mobile phone?',
        answer: 'Although the systems/robots are optimized for computer use, you have the option to use a FOREX VPS (Virtual Private Server) to run them on your phone.'
    },
    {
        id: 3,
        question: 'On which time frame do we trade with the Trading Systems/Robots?',
        answer: 'Based on our experience with the systems/robots, it is recommended to trade on a 1-hour time frame (H1). However, you can test them on longer time frames, such as 4 hours (H4), 1 day (D1), 1 week (W1), 1 month (MN).'
    },
    {
        id: 4,
        question: 'How much do you earn per day with the Trading Systems/Robots?',
        answer: 'Given the dynamic and flexible nature of the financial market, it\'s challenging to predict in advance the ratio between gain and invested capital. However, the systems/robots can end the week or month in profit as long as you adhere to the system\'s recommendations (entry conditions, application of stop-loss). Click here to get an idea of other traders\' experiences with the TradingMate Systems/Robots.'
    },
    {
        id: 5,
        question: 'What payment methods are available to purchase the Trading Systems/Robots?',
        answer: 'You can make payments via Mobile Money: Orange Money, MTN Money, Wave, or through Electronic Currency: Perfect Money and Bitcoin.'
    },
    {
        id: 6,
        question: 'How do you receive your Trading System/Robot after purchase?',
        answer: 'To receive your Trading System/Robot, you need to make a deposit via Mobile Money or Electronic Payment. After your purchase, you will need to provide the payment receipt for verification (screenshot/photo of the transaction). Upon receipt of the funds, your System/Robot is instantly sent to your WhatsApp number or by email. In this case, you provide the email address for receiving the system in addition to the payment receipt.'
    },
    {
        id: 7,
        question: 'How to install a Trading System/Robot on a computer?',
        answer: 'The installation of the Trading Systems/Robots is the same for all trading systems. Regardless of the trading system/robot, the installation procedure remains the same. Click here to view the installation guide on the TradingMate YouTube channel.'
    },
    {
        id: 8,
        question: 'What to do in case of need for assistance, complaint, or claim?',
        answer: 'Your satisfaction and customer experience are invaluable to us, and we strive to be with you every day. In case of need for assistance, complaint, or claim, feel free to contact TradingMate directly via WhatsApp at (225) 05 84 57 54 37.'
    },
    {
        id: 9,
        question: 'Is it possible to get a refund after purchasing a system/robot?',
        answer: 'Refund claims are only acceptable within 48 hours (2 days) after purchase. Beyond this period, Trading Mate\'s responsibility is no longer engaged, and no refund can be due or claimed. Also, the refund excludes systems/robots trading binary options. We strongly encourage you to consult the refund procedure before any purchase or payment by clicking here.'
    },
]

export default function Faq() {
    return(
        <section className="bg-gray-100 py-24 flex flex-col">
            <h2 className="text-center text-4xl pb-5">FAQ</h2>
            <ol className="w-11/12 m-auto grid grid-cols-4 gap-5">
                {faqData.map((faq) => (
                    <li className="p-5 my-4 bg-white rounded-lg" key={faq.id}>
                        <h3 className="py-2 mb-3 font-bold">
                            <span>{faq.id} ) </span>{faq.question}
                        </h3>
                        <p className="text-gray-800">
                            {faq.answer}
                        </p>
                    </li>
                ))}
            </ol>
        </section>
    )
}