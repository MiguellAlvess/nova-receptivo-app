import { MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "./button"
import { Card, CardContent } from "./card"
import { Sheet, SheetTrigger } from "./sheet"
import Sidebar from "./sidebar"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-2">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Nova Receptivo Logo"
            width={80}
            height={40}
          />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost" aria-label="Abrir menu">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <Sidebar />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
