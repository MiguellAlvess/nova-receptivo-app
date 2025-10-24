import CampinaSpots from "@/components/ui/campina-spots"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import HeroPackagePage from "@/components/ui/hero-package-page"
import InternationalPackages from "@/components/ui/international-packages"
import LocalPackages from "@/components/ui/local-packages"

const Home = () => {
  return (
    <div>
      <Header />
      <HeroPackagePage />
      <CampinaSpots />
      <LocalPackages />
      <InternationalPackages />
      <Footer />
    </div>
  )
}

export default Home
