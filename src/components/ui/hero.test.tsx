import { render, screen } from "@testing-library/react"
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react"

import Hero from "./hero"

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & { src: string }
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: ImgProps) => <img {...props} />,
}))

type HrefLike = string | { pathname: string }
type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: HrefLike
  children?: ReactNode
}
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children, ...rest }: LinkProps) => {
    const url = typeof href === "string" ? href : href.pathname
    return (
      <a href={url} {...rest}>
        {children}
      </a>
    )
  },
}))

type DivProps = HTMLAttributes<HTMLDivElement> & { children?: ReactNode }
jest.mock("./card", () => ({
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

jest.mock("./button", () => ({
  Button: ({
    children,
    className,
  }: DivProps & { asChild?: boolean; variant?: string }) => (
    <div data-testid="button" className={className}>
      {children}
    </div>
  ),
}))

describe("Hero", () => {
  it("should render headline text", () => {
    render(<Hero />)
    expect(
      screen.getByText(
        /mais de 20 anos conectando você aos melhores destinos/i,
      ),
    ).toBeInTheDocument()
  })

  it("should render background image with correct alt and src", () => {
    render(<Hero />)
    const img = screen.getByRole("img", { name: /açude velho/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute("src", "/acude-velho.png")
  })

  it("should render primary CTA linking to /packages", () => {
    render(<Hero />)
    const link = screen.getByRole("link", { name: /ver pacotes/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/packages")
  })

  it("should render secondary CTA linking to /destinations", () => {
    render(<Hero />)
    const link = screen.getByRole("link", { name: /destinos/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/destinations")
  })

  it("should render Card and CardContent wrappers", () => {
    render(<Hero />)
    expect(screen.getByTestId("card")).toBeInTheDocument()
    expect(screen.getByTestId("card-content")).toBeInTheDocument()
  })
})
