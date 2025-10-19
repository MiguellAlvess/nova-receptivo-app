"use client"

import { LucideIcon } from "lucide-react"
import Link from "next/link"
import * as React from "react"

import { cn } from "@/lib/utils"

type ServiceCardProps = {
  title: string
  description: string
  icon: LucideIcon
  href?: string
  className?: string
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  className,
}: ServiceCardProps) {
  const base =
    "relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"

  const Inner = (
    <div className="flex flex-col items-center gap-2">
      <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
        <Icon className="h-6 w-6 text-emerald-600" aria-hidden="true" />
      </div>

      <h3 className="text-base font-semibold text-slate-800 md:text-lg">
        {title}
      </h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  )

  if (href) {
    return (
      <Link href={href} aria-label={title} className={cn(base, className)}>
        {Inner}
      </Link>
    )
  }

  return <div className={cn(base, className)}>{Inner}</div>
}
