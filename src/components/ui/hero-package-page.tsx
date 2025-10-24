"use client"

import Image from "next/image"

export default function HeroPackagePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6">
      <div className="relative isolate h-[38vh] min-h-[260px] w-full overflow-hidden rounded-3xl shadow-lg md:h-[52vh] lg:h-[56vh]">
        <Image
          src="/natal-image.jpg"
          alt="Natal - RN"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-900/50" />

        <div className="absolute inset-0 bg-blue-700/35 mix-blend-multiply" />

        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white [text-shadow:0_3px_12px_rgba(0,0,0,0.70)] md:text-5xl">
            Pacotes de Viagem
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-100/95 [text-shadow:0_2px_10px_rgba(0,0,0,0.60)] md:mt-4 md:text-lg">
            Explore nossos destinos cuidadosamente selecionados e encontre a
            viagem perfeita para você
          </p>
        </div>
      </div>
    </section>
  )
}
