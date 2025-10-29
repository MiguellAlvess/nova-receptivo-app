"use client"

import { Mail, Phone, Send, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ContactForm({ className }: { className?: string }) {
  return (
    <section
      className={cn("mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14", className)}
    >
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-sky-700 md:text-4xl">
          Fale Conosco
        </h1>
        <p className="mt-2 text-sm text-slate-500 md:text-base">
          Tire dúvidas, faça orçamentos e receba um retorno da nossa equipe.
        </p>
      </header>

      <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm sm:p-6 md:p-8">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <div className="sm:col-span-1">
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Nome *
            </label>
            <div className="relative">
              <User className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Seu nome completo"
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pr-3 pl-10 text-sm ring-0 transition outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-200"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              E-mail *
            </label>
            <div className="relative">
              <Mail className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="voce@exemplo.com"
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pr-3 pl-10 text-sm ring-0 transition outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-200"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="phone"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Telefone/WhatsApp
            </label>
            <div className="relative">
              <Phone className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(83) 9 9999-9999"
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pr-3 pl-10 text-sm ring-0 transition outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-200"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label
              htmlFor="subject"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Assunto
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Ex.: Cotação de pacotes, dúvida, parceria..."
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm ring-0 transition outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-200"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Mensagem *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Conte-nos como podemos ajudar"
              className="w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm ring-0 transition outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-200"
            />
          </div>

          <div className="mt-2 flex items-center justify-between gap-3 sm:col-span-2">
            <p className="text-xs text-slate-500">
              Ao enviar, você concorda em ser contatado pela nossa equipe.
            </p>
            <Button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              <Send className="h-4 w-4" />
              Enviar mensagem
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
