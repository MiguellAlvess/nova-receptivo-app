"use client"

import { MapPin, Plane } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "./button"
import { Card, CardContent } from "./card"

const Hero = () => {
  return (
    <Card className="relative overflow-hidden rounded-xl border-none shadow-none">
      <CardContent className="p-0">
        <div className="relative h-[380px] w-full md:h-[520px]">
          <Image
            src="/acude-velho.png"
            alt="Vista do Açude Velho em Campina Grande"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1E4661]/70" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center md:px-12">
            <h1 className="max-w-[32ch] text-2xl leading-tight font-extrabold text-white md:text-5xl">
              Mais de 20 anos conectando você aos melhores destinos do Brasil e
              do mundo
            </h1>

            <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                className="bg-primary gap-2 text-white shadow-lg hover:bg-[#16364e]"
              >
                <Link href="/packages">
                  <Plane size={18} />
                  Ver pacotes
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="gap-2 border-white bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/destinations">
                  <MapPin size={18} />
                  Destinos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Hero
