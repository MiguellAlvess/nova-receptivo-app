"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

import { campinaSpots } from "@/data/campina-spots"

import CampinaSpotCard from "./campina-spot-card"

export default function CampinaSpots() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    const el = scrollerRef.current
    if (!el) return
    const delta = Math.round(el.clientWidth * 0.85)
    el.scrollBy({ left: dir === "left" ? -delta : delta, behavior: "smooth" })
  }

  return (
    <section
      aria-labelledby="campina-spots-heading"
      className="relative mx-auto max-w-6xl px-4 py-8 sm:py-10 md:px-6 md:py-14"
    >
      <div className="mb-4 flex items-end justify-between sm:mb-6">
        <h2
          id="campina-spots-heading"
          className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl"
        >
          Pontos turísticos de Campina Grande
        </h2>
      </div>

      <div className="group relative">
        <div
          ref={scrollerRef}
          className="-mx-4 overflow-x-auto scroll-smooth px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <div className="flex snap-x snap-mandatory gap-3 sm:gap-4">
            {campinaSpots.map((s) => (
              <div
                key={s.id}
                className="snap-center md:snap-start"
                aria-label={s.title}
              >
                <CampinaSpotCard
                  title={s.title}
                  description={s.description}
                  image={s.image}
                  href={s.href}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scroll("left")}
          aria-label="Anterior"
          className="absolute top-1/2 -left-4 hidden -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white p-2 opacity-0 shadow-md transition group-hover:opacity-100 hover:bg-white sm:p-3 md:flex"
        >
          <ChevronLeft className="h-5 w-5 text-slate-700 sm:h-6 sm:w-6" />
        </button>

        <button
          onClick={() => scroll("right")}
          aria-label="Próximo"
          className="absolute top-1/2 -right-4 hidden -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white p-2 opacity-0 shadow-md transition group-hover:opacity-100 hover:bg-white sm:p-3 md:flex"
        >
          <ChevronRight className="h-5 w-5 text-slate-700 sm:h-6 sm:w-6" />
        </button>
      </div>

      <style jsx global>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
