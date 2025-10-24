"use client"

import { MapPin, Plane } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "./button"
import { Card, CardContent } from "./card"

const Hero = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6">
      <Card className="relative overflow-hidden rounded-3xl border-0 bg-transparent shadow-none">
        <CardContent className="p-0">
          <div className="relative isolate h-[38vh] min-h-[260px] w-full overflow-hidden rounded-3xl shadow-lg md:h-[52vh] lg:h-[56vh]">
            <Image
              src="/acude-velho.png"
              alt="Vista do Açude Velho em Campina Grande"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-slate-900/50" />
            <div className="absolute inset-0 bg-blue-700/35 mix-blend-multiply" />

            <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-white [text-shadow:0_3px_12px_rgba(0,0,0,0.70)] md:text-5xl">
                Mais de 20 anos conectando você aos melhores destinos
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
    </section>
  )
}

export default Hero
