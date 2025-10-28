import FeaturedPackages from "@/components/ui/featured-packages"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import Hero from "@/components/ui/hero"
import FlightQuoteForm from "@/components/ui/quote-form-client"
import ServicesSection from "@/components/ui/services-section"
import { featuredPackages } from "@/data/featured-packages"
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ServicesSection />
      <FeaturedPackages className="mt-10 md:mt-16" items={featuredPackages} />
      <FlightQuoteForm />
      <Footer />
    </div>
  )
}

export default Home
