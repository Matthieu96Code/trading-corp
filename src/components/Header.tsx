import Navbar from "./header/Navbar";

export default function Header() {
  return (
    // <header className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <header className="h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <Navbar />
        <div className="px-[8%]">
          <p className="pt-20 text-white text-lg">Trade Synthetic Indices, Forex, and Cryptos with our top recommended brokers.</p>
          <p className="text-white text-lg text-lg">24/7</p>
          <p className="text-white text-4xl pt-10">It is free to create an account</p>
        </div>
    </header>
  )
}
