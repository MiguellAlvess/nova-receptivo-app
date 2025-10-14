"use client"

import { Home, Mail, Plane, Users } from "lucide-react"
import Link from "next/link"

import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./sheet"

const options = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/about", label: "Quem somos", Icon: Users },
  { href: "/packages", label: "Pacotes de viagens", Icon: Plane },
  { href: "/contact", label: "Contato", Icon: Mail },
]

const Sidebar = () => {
  return (
    <SheetContent side="right" className="bg-primary w-72 p-6 text-white">
      <SheetHeader className="mb-4 p-0">
        <SheetTitle className="text-left text-base font-semibold text-white">
          Menu
        </SheetTitle>
      </SheetHeader>
      <nav className="mt-2 flex flex-col gap-6">
        {options.map(({ href, label, Icon }) => (
          <SheetClose asChild key={href}>
            <Link
              href={href}
              className="flex items-center gap-3 text-white hover:text-white/90"
            >
              <Icon size={20} />
              <span className="text-base">{label}</span>
            </Link>
          </SheetClose>
        ))}
      </nav>
    </SheetContent>
  )
}

export default Sidebar
