"use client"

import {
  Clock,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#1F2937] text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Nova Receptivo"
              width={90}
              height={90}
            />
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Há mais de 20 anos realizando sonhos e criando memórias
            inesquecíveis. Sua melhor experiência de viagem começa aqui.
          </p>
          <div className="mt-4">
            <Link
              href="https://www.instagram.com/novareceptivo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 transition hover:bg-[#22C55E] hover:text-white"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">Newsletter</h3>
          <p className="mb-4 text-sm text-slate-400">
            Receba promoções exclusivas e novidades em primeira mão!
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-white transition outline-none placeholder:text-slate-400 focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]"
            />
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-white transition outline-none placeholder:text-slate-400 focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]"
            />
            <input
              type="tel"
              placeholder="(11) 99999-9999"
              className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-white transition outline-none placeholder:text-slate-400 focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#22C55E] py-2 font-medium text-white transition hover:bg-[#1FA14F]"
            >
              <Send size={16} />
              Cadastrar
            </button>
          </form>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">Contatos</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#22C55E]" />{" "}
              contato@novareceptivo.com.br
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#22C55E]" /> (83) 3333-4444
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={16} className="text-[#22C55E]" /> (83)
              99999-8888
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">Localização</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 text-[#22C55E]" />
              <span>
                Rua das Viagens, 123
                <br />
                Centro – João Pessoa, PB
                <br />
                CEP: 58000-000
              </span>
            </li>
            <li className="mt-4 flex items-start gap-2 rounded-lg bg-slate-800/60 p-3">
              <Clock size={16} className="mt-0.5 text-[#22C55E]" />
              <div>
                <strong className="block text-white">
                  Horário de Funcionamento
                </strong>
                <span className="text-slate-400">Seg. a Sex.: 8h às 18h</span>
                <br />
                <span className="text-slate-400">Sábado: 8h às 14h</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700 py-4 text-center text-xs text-slate-500">
        <p>CNPJ: 12.345.678/0001-90 | Registro Embratur: ABC-123456</p>
        <p className="mt-1">
          © {new Date().getFullYear()} Nova Receptivo. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}
