import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"

import CampinaSpots from "./components/campina-spots"
import HeroPackagePage from "./components/hero-package-page"
import InternationalPackages from "./components/international-packages"
import LocalPackages from "./components/local-packages"

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
