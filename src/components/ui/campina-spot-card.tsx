"use client"

import { MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Props = {
  title: string
  description: string
  image: string
  href: string
}

export default function CampinaSpotCard({
  title,
  description,
  image,
  href,
}: Props) {
  return (
    <article className="group xs:w-[260px] w-[240px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md sm:w-[280px] md:w-[300px] lg:w-[320px]">
      <div className="xs:h-40 relative h-36 w-full sm:h-44 md:h-48 lg:h-56">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 480px) 240px, (max-width: 640px) 260px, (max-width: 768px) 280px, (max-width: 1024px) 300px, 320px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/0 transition group-hover:bg-slate-900/10" />
      </div>

      <div className="px-4 py-4 sm:py-5">
        <h3 className="line-clamp-1 text-base font-semibold text-slate-900 sm:text-lg">
          {title}
        </h3>
        <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
          {description}
        </p>

        <Link
          href={href}
          target="_blank"
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1E4661] px-3 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-[#16364e] sm:w-auto sm:text-sm"
        >
          <MapPin size={16} />
          Ver no mapa
        </Link>
      </div>
    </article>
  )
}
