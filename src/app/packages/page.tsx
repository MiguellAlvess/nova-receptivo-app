import HeroPackagePage from "@/app/packages/_components/hero-package-page"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"

import CampinaSpots from "./_components/campina-spots"
import InternationalPackages from "./_components/international-packages"
import LocalPackages from "./_components/local-packages"

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
