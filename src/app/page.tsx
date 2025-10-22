import FeaturedPackages from "@/components/ui/featured-packages"
import Header from "@/components/ui/header"
import Hero from "@/components/ui/hero"
import FlightQuoteForm from "@/components/ui/quote-form-client"
import ServicesSection from "@/components/ui/services-section"
import { featuredPackages } from "@/data/featuredPackages"
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ServicesSection />
      <FeaturedPackages className="mt-10 md:mt-16" items={featuredPackages} />
      <FlightQuoteForm />
    </div>
  )
}

export default Home
