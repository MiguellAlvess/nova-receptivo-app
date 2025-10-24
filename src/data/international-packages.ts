export type InternationalPackage = {
  id: string
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  duration: string
  people: string
  price: string
  href?: string
  featured?: boolean
  rating?: number
}

export const internationalPackages: InternationalPackage[] = [
  {
    id: "buenos-aires",
    imageSrc: "/images/packages/buenos-aires.jpg",
    imageAlt: "Obelisco de Buenos Aires à noite",
    title: "Buenos Aires Clássica",
    description:
      "City tour por San Telmo, Recoleta e Palermo, com show de tango opcional.",
    duration: "3–4 dias",
    people: "Até 14 pessoas",
    price: "R$ 1.890",
    href: "/packages/buenos-aires",
    rating: 4.7,
    featured: true,
  },
  {
    id: "santiago-andes",
    imageSrc: "/images/packages/santiago-andes.jpg",
    imageAlt: "Cordilheira dos Andes vista de Santiago",
    title: "Santiago + Andes",
    description:
      "Centro histórico, vinícola no Vale do Maipo e bate-volta à Cordilheira.",
    duration: "4 dias",
    people: "Até 12 pessoas",
    price: "R$ 2.450",
    href: "/packages/santiago-andes",
    rating: 4.8,
  },
  {
    id: "lisboa-sintra",
    imageSrc: "/images/packages/lisboa.jpg",
    imageAlt: "Praça do Comércio em Lisboa ao pôr do sol",
    title: "Lisboa & Sintra",
    description:
      "Alfama, Belém e castelos de Sintra com degustação de pastéis tradicionais.",
    duration: "5–6 dias",
    people: "Até 10 pessoas",
    price: "R$ 5.990",
    href: "/packages/lisboa-sintra",
    rating: 4.9,
  },
  {
    id: "roma",
    imageSrc: "/images/packages/roma.jpg",
    imageAlt: "Coliseu de Roma iluminado",
    title: "Roma Essencial",
    description:
      "Coliseu, Fórum Romano, Vaticano e gastronomia italiana em Trastevere.",
    duration: "4–5 dias",
    people: "Até 10 pessoas",
    price: "R$ 6.490",
    href: "/packages/roma",
    rating: 4.8,
  },
  {
    id: "cancun",
    imageSrc: "/images/packages/cancun.jpg",
    imageAlt: "Praias de Cancún com mar turquesa",
    title: "Cancún All-Inclusive",
    description:
      "Resort com tudo incluso, visita a cenotes e ruínas maias em Tulum.",
    duration: "5 dias",
    people: "Até 16 pessoas",
    price: "R$ 7.200",
    href: "/packages/cancun",
    rating: 4.7,
  },
  {
    id: "orlando",
    imageSrc: "/images/packages/orlando.jpg",
    imageAlt: "Castelo da Disney em Orlando",
    title: "Orlando Parques",
    description:
      "Ingressos selecionados para Disney e Universal com shuttle incluso.",
    duration: "6–7 dias",
    people: "Até 18 pessoas",
    price: "R$ 9.990",
    href: "/packages/orlando",
    rating: 4.6,
    featured: true,
  },
]
