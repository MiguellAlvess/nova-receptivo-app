import { render, screen } from "@testing-library/react"
import type { ReactNode } from "react"

import StatCard from "./stats-card"

type DivProps = { children?: ReactNode; className?: string }

jest.mock("@/components/ui/card", () => ({
  Card: ({ children, className }: DivProps) => (
    <div data-testid="card" className={className}>
      {children}
    </div>
  ),
  CardContent: ({ children, className }: DivProps) => (
    <div data-testid="card-content" className={className}>
      {children}
    </div>
  ),
}))

describe("StatCard", () => {
  it("should render value and description", () => {
    render(<StatCard value="150+" description="Clientes satisfeitos" />)
    expect(screen.getByText("150+")).toBeInTheDocument()
    expect(screen.getByText("Clientes satisfeitos")).toBeInTheDocument()
  })

  it("should apply main style classes on Card", () => {
    render(<StatCard value="200" description="Projetos entregues" />)
    const card = screen.getByTestId("card")
    expect(card).toHaveClass("bg-muted")
    expect(card).toHaveClass("rounded-2xl")
  })

  it("should render CardContent wrapper", () => {
    render(<StatCard value="99%" description="Satisfação do cliente" />)
    expect(screen.getByTestId("card-content")).toBeInTheDocument()
  })
})
