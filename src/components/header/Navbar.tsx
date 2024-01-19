"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const ToggleEvent = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <>
      {(navbarOpen) && (
        <nav  className="fixed top-0 left-0 right-0 w-screen h-screen bg-slate-900 text-white">
          <div className="flex justify-between px-[9%] py-6">
            <h1 className="hover:text-rose-600">Trading<span>Corp</span></h1>
            <button onClick={() => ToggleEvent()} className="md:hidden hover:text-rose-600">Menu</button>
          </div>
          <ul onClick={() => ToggleEvent()} className="mt-10 flex flex-col items-center gap-10">
            <li className="w-1/2 text-center border border-red-600 py-2 hover:bg-white ">
              <Link className="hover:text-rose-600 py-2 px-16" href="#services">Services</Link>
            </li>
            <li className="w-1/2 text-center border border-red-600 py-2 hover:bg-white">
              <Link className="hover:text-rose-600 py-2 px-16" href="#products">Products</Link>
            </li>
            <li className="w-1/2 text-center border border-red-600 py-2 hover:bg-white">
              <Link className="hover:text-rose-600 py-2 px-16" href="#exchange">Exchange</Link>
            </li>
            <li className="w-1/2 text-center border border-red-600 py-2 hover:bg-white">
              <Link className="hover:text-rose-600 py-2 px-16" href="#facs">Facs</Link>
            </li>
          </ul>
        </nav>
      )}
      <nav className="bg-slate-900 flex row justify-between px-[9%] py-6 text-white" >
        <h1 className="hover:text-rose-600">Trading<span>Corp</span></h1>
        <button onClick={() => ToggleEvent()} className="md:hidden hover:text-rose-600">Menu</button>
        
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
    </>
  )
}
