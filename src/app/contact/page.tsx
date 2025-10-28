import React from "react"

import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"

import ContactForm from "./components/contact-form"

const page = () => {
  return (
    <div>
      <Header />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default page
