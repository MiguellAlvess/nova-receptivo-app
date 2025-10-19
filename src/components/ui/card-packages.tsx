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
        "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
    >
      <div className="relative h-52 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          priority={false}
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-3">
          {featured && (
            <span className="pointer-events-auto rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow">
              Destaque
            </span>
          )}

          {typeof rating === "number" && (
            <span className="pointer-events-auto ml-auto flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-current" />
              {rating.toString()}
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
        <p className="mt-3 text-slate-600">{description}</p>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-slate-500" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <Users className="h-4 w-4 text-slate-500" />
            <span>{people}</span>
          </div>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <div className="text-right">
            <span className="block text-xs text-slate-500">A partir de</span>
            <span className="text-2xl font-extrabold text-sky-700">
              {price}
            </span>
          </div>

          <Button asChild className="px-6">
            <Link href={href}>Consultar</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
