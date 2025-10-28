import { CardPackagesProps } from "@/components/ui/card-packages"

export const featuredPackages: CardPackagesProps[] = [
  {
    imageSrc: "/featured-packages/onibus-forro.jpg",
    imageAlt: "Ônibus do Forró",
    title: "Ônibus do Forró",
    description:
      "Viva a maior festa junina do Nordeste com conforto e segurança. Transporte, hospedagem e diversão garantida!",
    duration: "3–5 dias",
    people: "Até 45 pessoas",
    price: "R$ 280",
    href: "/packages/onibus-forro",
    featured: true,
    rating: 4.8,
  },
  {
    imageSrc: "/featured-packages/paris.jpg",
    imageAlt: "Paris – França",
    title: "Paris – França",
    description:
      "A cidade do amor te espera! Torre Eiffel, Louvre, Champs-Élysées e experiências únicas.",
    duration: "7 dias",
    people: "Até 25 pessoas",
    price: "R$ 4.500",
    href: "/packages/paris-franca",
    featured: true,
    rating: 5,
  },
]
