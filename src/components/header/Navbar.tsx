import Link from "../../../node_modules/next/link"

export default function Navbar() {
  return (
    <nav className="flex row justify-between mx-[10%] " >
      <h1>Trading<span>Corp</span></h1>
      <ul className="flex row">
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
