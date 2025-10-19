"use client"

import { Calendar, MapPin, Plane } from "lucide-react"

import ServiceCard from "./service-card"

export default function ServicesSection() {
  return (
    <section className="bg-slate-50 px-4 py-10 md:py-14">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        <ServiceCard
          title="Viagens Aéreas"
          description="Passagens com os melhores preços"
          icon={Plane}
          href="/packages?type=flight"
        />
        <ServiceCard
          title="Destinos Únicos"
          description="Experiências inesquecíveis"
          icon={MapPin}
          href="/packages?type=destination"
        />
        <ServiceCard
          title="Planejamento"
          description="Sua viagem sob medida"
          icon={Calendar}
          href="/contact#planner"
        />
      </div>
    </section>
  )
}
