"use client"

import FlightQuoteForm, { FlightQuotePayload } from "./quote-form"

export default function FlightQuoteFormClient() {
  function handleSubmit(data: FlightQuotePayload) {
    console.log("payload:", data)
  }

  return <FlightQuoteForm onSubmit={handleSubmit} />
}
