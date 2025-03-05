"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Poppins } from "next/font/google"

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-poppins",

})

interface NavigationProps {
  items: {
    label: string
    href: string
  }[]
}

export function Navigation({ items }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>
      <nav
        className={`${isOpen ? "block" : "hidden"} ${poppins_init.className} md:flex items-center gap-12 md:ml-12 absolute md:relative top-full left-0 right-0 bg-black md:bg-transparent p-4 md:p-0`}
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block md:inline-block py-2 md:py-0 text-white hover:text-[#f3e55f]"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  )
}

