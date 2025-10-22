"use client"

import { Calendar, Plane } from "lucide-react"
import { useState } from "react"

import SelectNumber from "@/components/ui/select-number"

export type FlightQuotePayload = {
  tripType: "roundtrip" | "oneway" | "multicity"
  origin: string
  destination: string
  departDate: string
  returnDate?: string
  adults: number
  children: number
  infants: number
}

type FlightQuoteFormProps = {
  onSubmit?: (data: FlightQuotePayload) => void
}

export default function FlightQuoteForm({ onSubmit }: FlightQuoteFormProps) {
  const todayIso = new Date().toISOString().slice(0, 10)

  const [tripType, setTripType] =
    useState<FlightQuotePayload["tripType"]>("roundtrip")
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [departDate, setDepartDate] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!origin.trim() || !destination.trim() || !departDate) {
      setError("Preencha Origem, Destino e Data de Ida.")
      return
    }
    if (tripType === "roundtrip" && !returnDate) {
      setError("Informe a Data de Volta para ida e volta.")
      return
    }
    if (adults + children + infants <= 0) {
      setError("Selecione ao menos 1 passageiro.")
      return
    }

    const payload: FlightQuotePayload = {
      tripType,
      origin: origin.trim(),
      destination: destination.trim(),
      departDate,
      returnDate: tripType === "roundtrip" ? returnDate : undefined,
      adults,
      children,
      infants,
    }

    if (onSubmit) onSubmit(payload)
    else alert(JSON.stringify(payload, null, 2))
  }

  return (
    <section className="w-full px-4 sm:px-6">
      <div className="mb-10 text-center sm:mb-12">
        <h2 className="mx-auto flex max-w-3xl items-center justify-center gap-2 text-3xl leading-tight font-extrabold tracking-tight text-[#0B5FAE] sm:text-4xl">
          <Plane className="h-7 w-7" /> Cotação Aérea
        </h2>
        <p className="mx-auto mt-3 max-w-2xl px-1 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
          Encontre os melhores preços para sua viagem. Faça sua cotação
          gratuita!
        </p>
      </div>

      <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
        <div className="px-5 py-6 sm:px-8 md:px-10 md:py-8">
          <h3 className="mb-6 text-center text-2xl font-bold text-[#0B5FAE] sm:mb-8">
            Solicite sua Cotação
          </h3>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2"
          >
            <div className="md:col-span-2">
              <label
                htmlFor="tripType"
                className="mb-1 block text-sm font-semibold text-slate-800"
              >
                Tipo de Viagem
              </label>
              <div className="relative">
                <select
                  id="tripType"
                  value={tripType}
                  onChange={(e) =>
                    setTripType(
                      e.target.value as FlightQuotePayload["tripType"],
                    )
                  }
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-slate-800 ring-1 ring-transparent transition outline-none focus:border-[#0B5FAE] focus:bg-white focus:ring-2 focus:ring-[#0B5FAE]/20"
                >
                  <option value="roundtrip">Ida e Volta</option>
                  <option value="oneway">Somente Ida</option>
                  <option value="multicity">Multitrechos</option>
                </select>
                <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-slate-400">
                  ▾
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="origin"
                className="mb-1 block text-sm font-semibold text-slate-800"
              >
                Cidade de Origem <span className="text-rose-500">*</span>
              </label>
              <input
                id="origin"
                type="text"
                placeholder="Ex: São Paulo, SP"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 ring-1 ring-transparent transition outline-none placeholder:text-slate-400 focus:border-[#0B5FAE] focus:bg-white focus:ring-2 focus:ring-[#0B5FAE]/20"
              />
            </div>

            <div>
              <label
                htmlFor="destination"
                className="mb-1 block text-sm font-semibold text-slate-800"
              >
                Destino <span className="text-rose-500">*</span>
              </label>
              <input
                id="destination"
                type="text"
                placeholder="Ex: Rio de Janeiro, RJ"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 ring-1 ring-transparent transition outline-none placeholder:text-slate-400 focus:border-[#0B5FAE] focus:bg-white focus:ring-2 focus:ring-[#0B5FAE]/20"
              />
            </div>

            <div>
              <label
                htmlFor="departDate"
                className="mb-1 block text-sm font-semibold text-slate-800"
              >
                Data de Ida <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="departDate"
                  type="date"
                  min={todayIso}
                  value={departDate}
                  onChange={(e) => {
                    setDepartDate(e.target.value)
                    if (returnDate && e.target.value > returnDate)
                      setReturnDate("")
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-slate-800 ring-1 ring-transparent transition outline-none focus:border-[#0B5FAE] focus:bg-white focus:ring-2 focus:ring-[#0B5FAE]/20"
                />
                <Calendar className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <div>
              <label
                htmlFor="returnDate"
                className="mb-1 block text-sm font-semibold text-slate-800"
              >
                Data de Volta
              </label>
              <div className="relative">
                <input
                  id="returnDate"
                  type="date"
                  min={departDate || todayIso}
                  disabled={tripType !== "roundtrip"}
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-slate-800 ring-1 ring-transparent transition outline-none focus:border-[#0B5FAE] focus:bg-white focus:ring-2 focus:ring-[#0B5FAE]/20 disabled:cursor-not-allowed disabled:bg-slate-100"
                />
                <Calendar className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <div>
              <label
                htmlFor="adults"
                className="mb-1 block text-sm font-semibold text-slate-800"
              >
                Adultos
              </label>
              <SelectNumber
                id="adults"
                value={adults}
                onChange={setAdults}
                from={1}
                to={9}
                labelSuffix="Adultos"
              />
            </div>

            <div>
              <label
                htmlFor="children"
                className="mb-1 block text-sm font-semibold text-slate-800"
              >
                Crianças (2–11 anos)
              </label>
              <SelectNumber
                id="children"
                value={children}
                onChange={setChildren}
                from={0}
                to={9}
                labelSuffix="Crianças"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="infants"
                className="mb-1 block text-sm font-semibold text-slate-800"
              >
                Bebês (0–2 anos)
              </label>
              <SelectNumber
                id="infants"
                value={infants}
                onChange={setInfants}
                from={0}
                to={9}
                labelSuffix="Bebês"
              />
            </div>

            {error && (
              <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-rose-700 md:col-span-2">
                {error}
              </div>
            )}

            <div className="mt-2 md:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B5FAE] px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-[#0A4F93] focus:ring-4 focus:ring-[#0B5FAE]/20 focus:outline-none md:w-auto"
                aria-label="Cotar Agora"
              >
                <Plane className="h-5 w-5" />
                Cotar Agora
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
