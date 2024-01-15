import Link from "next/link";

export default function Navbar() {
  // const [navbarOpen, setNavbarOpen] = useState(false)

  // const ToggleEvent = () => {
    // setNavbarOpen(!navbarOpen)
  // }

  return (
    <nav className="bg-slate-900 flex row justify-between px-[9%] py-6 text-white" >
      <h1 className="hover:text-rose-600">Trading<span>Corp</span></h1>
      {/* <button onClick={() => ToggleEvent()} className="md:hidden hover:text-rose-600">Menu</button>
      (navbarOpen) && (
        <ul className="fixed">
          <li>
            <Link className="hover:text-rose-600" href="#services">Services</Link>
          </li>
          <li>
            <Link className="hover:text-rose-600" href="#products">Products</Link>
          </li>
          <li>
            <Link className="hover:text-rose-600" href="#exchange">Exchange</Link>
          </li>
          <li>
            <Link className="hover:text-rose-600" href="#facs">Facs</Link>
          </li>
        </ul>
      ) */}
      <ul className="hidden md:flex gap-8 row justify-between">
        <li>
            <Link className="hover:text-rose-600" href="#services">Services</Link>
        </li>
        <li>
            <Link className="hover:text-rose-600" href="#products">Products</Link>
        </li>
        <li>
            <Link className="hover:text-rose-600" href="#exchange">Exchange</Link>
        </li>
        <li>
            <Link className="hover:text-rose-600" href="#facs">Facs</Link>
        </li>
      </ul>
    </nav>
  )
}
