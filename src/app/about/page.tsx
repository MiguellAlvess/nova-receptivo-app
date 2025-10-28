"use client"

import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"

import StatCard from "./_components/stats-card"

const About = () => {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto w-full max-w-screen-lg flex-1 px-6 py-10 sm:px-8 lg:px-12">
        <h1 className="text-center text-3xl font-bold text-[#1E4661] sm:text-4xl">
          Quem somos
        </h1>

        <p className="text-muted-foreground mt-6 text-justify text-base leading-relaxed sm:text-lg">
          A Nova Receptivo é uma agência de turismo especializada em criar
          experiências de viagem inesquecíveis. Nosso compromisso é com a
          excelência no atendimento e a realização dos seus sonhos de viagem.
        </p>

        <section className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center md:gap-8">
          <StatCard value="20+" description="anos de experiência" />
          <StatCard value="10K+" description="clientes satisfeitos" />
          <StatCard value="100+" description="destinos atendidos" />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About
