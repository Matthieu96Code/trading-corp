import Link from "../../../node_modules/next/link"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 flex row justify-between px-[15%] py-6 text-white" >
      <h1>Trading<span>Corp</span></h1>
      <ul className="flex row w-1/6 justify-between">
        <li>
            <Link href="#products">Products</Link>
        </li>
        <li>
            <Link href="#services">Services</Link>
        </li>
      </ul>
    </nav>
  )
}
