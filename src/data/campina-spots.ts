export type CampinaSpot = {
  id: string
  title: string
  description: string
  image: string
  href: string
}

export const campinaSpots: CampinaSpot[] = [
  {
    id: "acude-velho",
    title: "Açude Velho",
    description:
      "Cartão-postal de Campina; ideal para caminhadas e pôr do sol.",
    image: "/spots/acude-card.jpg",
    href: "https://maps.google.com/?q=Açude+Velho+Campina+Grande",
  },
  {
    id: "parque-do-povo",
    title: "Parque do Povo",
    description: "Palco do Maior São João do Mundo, com vila cenográfica.",
    image: "/spots/parque-do-povo.webp",
    href: "https://maps.google.com/?q=Parque+do+Povo+Campina+Grande",
  },
  {
    id: "vila-do-artesao",
    title: "Vila do Artesão",
    description: "Artesanato local, renda renascença e cordel.",
    image: "/spots/vila-do-artesao.jpg",
    href: "https://maps.google.com/?q=Vila+do+Artesão+Campina+Grande",
  },
  {
    id: "feira-central",
    title: "Feira Central",
    description: "Patrimônio cultural com gastronomia e história viva.",
    image: "/spots/feira-central.jpg",
    href: "https://maps.google.com/?q=Feira+Central+Campina+Grande",
  },
  {
    id: "mac",
    title: "Museu de Arte (MAC)",
    description: "Acervo de arte regional e exposições temporárias.",
    image: "/spots/mac.jpg",
    href: "https://maps.google.com/?q=Museu+de+Arte+Assis+Chateaubriand+Campina+Grande",
  },
]
