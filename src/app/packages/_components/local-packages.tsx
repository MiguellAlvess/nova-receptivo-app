"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

<<<<<<<< HEAD:src/app/packages/components/local-packages.tsx
import CardPackages from "@/components/ui/card-packages"
========
import CardPackages from "@/app/packages/_components/card-packages"
>>>>>>>> main:src/app/packages/_components/local-packages.tsx
import { localPackages } from "@/data/local-packages"

export default function LocalPackages() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    const el = scrollerRef.current
    if (!el) return
    const delta = Math.round(el.clientWidth * 0.85)
    el.scrollBy({ left: dir === "left" ? -delta : delta, behavior: "smooth" })
  }

  return (
    <section
      aria-labelledby="local-packages-heading"
      className="relative mx-auto max-w-6xl px-4 py-8 sm:py-10 md:px-6 md:py-14"
    >
      <div className="mb-4 flex items-end justify-between sm:mb-6">
        <h2
          id="local-packages-heading"
          className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl"
        >
          Pacotes locais na Paraíba
        </h2>
      </div>

      <div className="group relative">
        <div
          ref={scrollerRef}
          className="-mx-4 overflow-x-auto scroll-smooth px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <div className="flex snap-x snap-mandatory gap-3 after:block after:w-6 after:shrink-0 after:content-[''] sm:gap-4 sm:after:w-0">
            {localPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="snap-center md:snap-start"
                aria-label={pkg.title}
              >
                <CardPackages
                  imageSrc={pkg.imageSrc}
                  imageAlt={pkg.imageAlt}
                  title={pkg.title}
                  description={pkg.description}
                  duration={pkg.duration}
                  people={pkg.people}
                  price={pkg.price}
                  href={pkg.href}
                  featured={pkg.featured}
                  rating={pkg.rating}
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
