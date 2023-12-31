import Navbar from "./header/Navbar";

export default function Header() {
  return (
    //<header className="h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    // <header className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <header className="h-screen bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900">
        <Navbar />
        <div className="px-[8%]">
          <p className="pt-20 text-white text-lg">Trade Synthetic Indices, Forex, and Cryptos with our top recommended brokers.</p>
          <p className="text-white text-lg text-lg">24/7</p>
          <p className="text-white text-4xl pt-10">It is free to create an account</p>
          <button className="border-2 border-rose-600 bg-rose-600 text-white py-2 px-10 rounded-lg text-lg mt-12 mb-5">Create a synthetic account</button>
          <br />
          <button className="border-2 border-rose-600 bg-rose-600 text-white py-2 px-10 rounded-lg text-lg mb-5">Create a Forex account</button>
          <p className="text-white text-lg mt-10 mb-5">New to trading? Take advantage of our free trading education modules.</p>
          <button className="border-2 border-rose-600 bg-rose-600 text-white py-2 px-10 rounded-lg text-lg">Learn</button>
        </div>
    </header>
  )
}
