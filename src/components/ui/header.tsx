"use client"

import { Menu as MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "./button"
import { Sheet, SheetTrigger } from "./sheet"
import Sidebar from "./sidebar"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex w-full items-center justify-center border-b border-transparent">
        <div className="flex w-full max-w-6xl items-center justify-between px-4 py-2 md:px-6 md:py-4">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Ir para a página inicial"
          >
            <Image
              src="/logo.png"
              alt="Nova Receptivo Logo"
              width={200}
              height={60}
              priority
              sizes="(max-width: 768px) 150px, 200px"
              className="-my-1 block h-12 w-auto md:h-14"
            />
          </Link>

          <nav className="hidden items-center justify-end gap-8 md:flex">
            <Link
              href="/"
              className="text-base font-medium text-slate-700 hover:text-slate-900"
            >
              Home
            </Link>
            <Link
              href="/packages"
              className="text-base font-medium text-slate-700 hover:text-slate-900"
            >
              Pacotes de viagem
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-slate-700 hover:text-slate-900"
            >
              Contato
            </Link>
            <Link
              href="/about"
              className="text-base font-medium text-slate-700 hover:text-slate-900"
            >
              Quem somos
            </Link>
          </nav>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-10 w-10"
                  aria-label="Abrir menu"
                >
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <Sidebar />
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
