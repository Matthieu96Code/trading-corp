export default function Footer() {
    return (
    //   <footer className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white">
      <footer className="bg-gray-950 text-white">
        <div className="md:flex py-10 px-[8%]">
            <div className="basis-3/6 px-[3%]">
                <h3 className="my-4 text-xl text-gray-100">
                    About
                </h3>
                <p className="text-sm text-gray-300">
                    TradindCorp is a trading education company that provides a complete trading system and trading courses to help traders achieve consistency in the markets.
                </p>
            </div>
            <div className="px-[3%]">
                <h3 className="my-4 text-xl text-gray-100">
                    Contact Info
                </h3>
                <div className="pb-2">
                    <p className="text-sm text-gray-300">Localisation: 136 Rue Boussoupé, Bè-kpota / Lomé</p>
                </div>
                <div className="pb-2">
                    <p className="text-sm text-gray-300">Phone: +1 234 567 890</p>
                </div>
                <div className="pb-2">
                    <p className="text-sm text-gray-300">
                        <a href="mailto:senoumatthieu96@gmail.com" className="text-gray-300 hover:text-rose-600">senoumatthieu96@gmail.com</a>
                    </p>
                </div>
            </div>
            <div className="min-w-fit px-[3%]">
                <h3 className="my-4 text-xl text-gray-100">
                    Quick Links
                </h3>
                <ul className="text-sm text-gray-300">
                    <li className="pb-1 hover:text-rose-600"><a href="#home">Home</a></li>
                    <li className="pb-1 hover:text-rose-600"><a href="#sevices">Services</a></li>
                    <li className="pb-1 hover:text-rose-600"><a href="#products">Products</a></li>
                    <li className="pb-1 hover:text-rose-600"><a href="#faqs">faqs</a></li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <hr className="w-5/6 text-gray-900"/>
            <p className="text-center py-6 text-xl text-gray-100">Create by <a href="#" className="text-rose-600">MattCorp</a> | All Right Reserved</p>
        </div>
      </footer>
    )
  }