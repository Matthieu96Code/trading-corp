import Image from "next/image";
import Link from "next/link";
import Navbar from "./header/Navbar";

export default function Header() {
  return (
    // <header className="h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    // <header className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    // <header className="h-screen bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900">
    <header className="min-h-screen bg-[url('/image/a-big-stock-trading.png')] bg-no-repeat bg-center bg-cover from-slate-900 via-indigo-900 to-slate-900" id="home">
        <Navbar />
        <div className="min-h-screen bg-gray-950/75 px-[8%]">
          <p className="pt-20 text-white text-lg">Trade Synthetic Indices, Forex, and Cryptos with our top recommended brokers.</p>
          <p className="text-white text-lg">24/7</p>
          <p className="text-white text-4xl pt-10">It is free to create an account</p>
          <button className="main-button mt-12 mb-5"><Link href="https://deriv.com/derivx/?gclid=CjwKCAiAzJOtBhALEiwAtwj8tn-Fb3V72d0OiWK8O-Dpcfd-69vCzlp9OP3Euxg6_RmRdAhoup0akhoCYU8QAvD_BwE" target="blank">Create a synthetic account</Link></button>
          <br />
          <button className="main-button mb-5"><Link href="https://deriv.com/derivx/?gclid=CjwKCAiAzJOtBhALEiwAtwj8tn-Fb3V72d0OiWK8O-Dpcfd-69vCzlp9OP3Euxg6_RmRdAhoup0akhoCYU8QAvD_BwE" target="blank">Create a Forex account</Link></button>
          <p className="text-white text-lg mt-10 mb-5">New to trading? Take advantage of our free trading education modules.</p>
          <button className="main-button mb-10"><Link href="https://deriv.com/derivx/?gclid=CjwKCAiAzJOtBhALEiwAtwj8tn-Fb3V72d0OiWK8O-Dpcfd-69vCzlp9OP3Euxg6_RmRdAhoup0akhoCYU8QAvD_BwE" target="blank">Learn</Link></button>
        </div>
    </header>
  )
}
