export type LocalPackage = {
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

export const localPackages: LocalPackage[] = [
  {
    id: "caminhos-do-frio",
    imageSrc: "/images/packages/caminhos-do-frio.jpg",
    imageAlt: "Rota Cultural Caminhos do Frio no Brejo Paraibano",
    title: "Caminhos do Frio (Brejo PB)",
    description:
      "Tour pelas cidades históricas do Brejo: Bananeiras, Areia e Alagoa Nova com vivência cultural e gastronômica.",
    duration: "2–3 dias",
    people: "Até 12 pessoas",
    price: "R$ 599",
    href: "/packages/caminhos-do-frio",
    featured: true,
    rating: 4.8,
  },
  {
    id: "lajedo-pai-mateus",
    imageSrc: "/images/packages/lajedo-pai-mateus.jpg",
    imageAlt: "Formações rochosas do Lajedo de Pai Mateus",
    title: "Lajedo de Pai Mateus",
    description:
      "Trilha leve e pôr do sol nas formações rochosas em Cabaceiras, no Cariri paraibano.",
    duration: "1 dia",
    people: "Até 10 pessoas",
    price: "R$ 299",
    href: "/packages/lajedo-de-pai-mateus",
    rating: 4.7,
  },
  {
    id: "pico-do-jabre",
    imageSrc: "/images/packages/pico-do-jabre.jpg",
    imageAlt: "Vista do Pico do Jabre, ponto mais alto da Paraíba",
    title: "Trekking Pico do Jabre",
    description:
      "Subida ao ponto mais alto da Paraíba, com mirantes e clima ameno na Serra do Teixeira.",
    duration: "1 dia",
    people: "Até 8 pessoas",
    price: "R$ 249",
    href: "/packages/pico-do-jabre",
    rating: 4.6,
  },
  {
    id: "rota-dos-engenhos",
    imageSrc: "/images/packages/bananeiras-engenhos.jpg",
    imageAlt: "Engenho de cachaça artesanal em Bananeiras",
    title: "Rota dos Engenhos (Bananeiras & Areia)",
    description:
      "Visita aos engenhos artesanais, degustações e centro histórico tombado de Areia.",
    duration: "1–2 dias",
    people: "Até 12 pessoas",
    price: "R$ 420",
    href: "/packages/rota-dos-engenhos",
    rating: 4.7,
  },
  {
    id: "litoral-sul-pb",
    imageSrc: "/images/packages/coqueirinho.jpg",
    imageAlt: "Praia de Coqueirinho com falésias",
    title: "Praias do Litoral Sul (Coqueirinho & Tambaba)",
    description:
      "Day-trip pelas praias e falésias do litoral sul com paradas nos mirantes.",
    duration: "1 dia",
    people: "Até 15 pessoas",
    price: "R$ 220",
    href: "/packages/litoral-sul-pb",
    rating: 4.9,
  },
  {
    id: "sao-joao-campina",
    imageSrc: "/images/packages/campina-sao-joao.jpg",
    imageAlt: "Quadrilhas e fogueiras no São João de Campina Grande",
    title: "São João de Campina Grande Experience",
    description:
      "Imersão no Maior São João do Mundo: shows, quadrilhas e sabores juninos.",
    duration: "1 dia (sazonal)",
    people: "Até 14 pessoas",
    price: "R$ 350",
    href: "/packages/sao-joao-campina",
    featured: true,
    rating: 4.9,
  },
]
