"use client"

import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"

import CampinaSpots from "./_components/campina-spots"
import HeroPackagePage from "./_components/hero-package-page"
import InternationalPackages from "./_components/international-packages"
import LocalPackages from "./_components/local-packages"

export default function PackagesPage() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10 sm:px-8 lg:px-12">
        <HeroPackagePage />
        <section className="mt-10">
          <LocalPackages />
        </section>
        <section className="mt-10">
          <InternationalPackages />
        </section>
        <section className="mt-10">
          <CampinaSpots />
        </section>
      </main>

      <Footer />
    </div>
  )
}
