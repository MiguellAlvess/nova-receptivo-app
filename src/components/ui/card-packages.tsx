"use client"

import { Clock, Star, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Button } from "./button"

export type CardPackagesProps = {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  duration: string
  people: string
  price: string
  href?: string
  featured?: boolean
  rating?: number
  className?: string
}

export default function CardPackages({
  imageSrc,
  imageAlt,
  title,
  description,
  duration,
  people,
  price,
  href = "#",
  featured = false,
  rating,
  className,
}: CardPackagesProps) {
  return (
    <article
      className={cn(
        "group xs:w-[260px] w-[240px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md sm:w-[280px] md:w-[300px] lg:w-[320px]",
        className,
      )}
    >
      <div className="xs:h-40 relative h-36 w-full sm:h-44 md:h-48 lg:h-56">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 480px) 240px, (max-width: 640px) 260px, (max-width: 768px) 280px, (max-width: 1024px) 300px, 320px"
          priority={false}
        />
        <div className="absolute inset-0 bg-slate-900/0 transition group-hover:bg-slate-900/10" />
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-3">
          {featured && (
            <span className="pointer-events-auto rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow">
              Destaque
            </span>
          )}
          {typeof rating === "number" && (
            <span className="pointer-events-auto ml-auto flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-current" />
              {rating.toFixed(1)}
            </span>
          )}
        </div>
      </div>

      <div className="px-4 py-4 sm:py-5">
        <h3 className="line-clamp-1 text-base font-semibold text-slate-900 sm:text-lg">
          {title}
        </h3>
        <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
          {description}
        </p>

        <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-slate-600 sm:mt-4 sm:text-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-slate-500" />
            <span className="line-clamp-1">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-slate-500" />
            <span className="line-clamp-1">{people}</span>
          </div>
        </div>

        <div className="mt-4 flex items-end justify-between sm:mt-5">
          <div className="text-right">
            <span className="block text-[10px] text-slate-500 sm:text-xs">
              A partir de
            </span>
            <span className="text-lg font-extrabold text-sky-700 sm:text-2xl">
              {price}
            </span>
          </div>
          <Button asChild className="px-3 py-2 text-xs sm:px-6 sm:text-sm">
            <Link href={href}>Consultar</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
