"use client"

import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  value: string
  description: string
}

const StatCard = ({ value, description }: StatCardProps) => {
  return (
    <Card className="bg-muted w-full max-w-[280px] rounded-2xl shadow-md transition hover:scale-105 sm:max-w-[220px] md:max-w-[250px] lg:max-w-[260px]">
      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
        <span className="text-3xl font-extrabold text-[#1E4661]">{value}</span>
        <span className="text-base leading-tight font-semibold text-[#1E4661] md:text-lg">
          {description}
        </span>
      </CardContent>
    </Card>
  )
}

export default StatCard
