"use client"

import CardPackages, { CardPackagesProps } from "./card-packages"

type FeaturedPackagesProps = {
  title?: string
  subtitle?: string
  items: CardPackagesProps[]
  className?: string
}

export default function FeaturedPackages({
  title = "Destinos em Destaque",
  subtitle = "Conheça alguns dos nossos pacotes mais procurados",
  items,
  className,
}: FeaturedPackagesProps) {
  return (
    <section className={className}>
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-lg text-slate-600">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item, idx) => (
            <CardPackages key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
