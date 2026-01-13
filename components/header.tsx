"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Home", href: "/" },
  { label: "News", href: "#news" },
  { label: "Links", href: "#links" },
  { label: "Invest", href: "#invest" },
  { label: "Buy", href: "#buy" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <span className="font-serif text-lg font-bold text-primary-foreground">SD</span>
          </div>
          <span className="font-serif text-xl font-semibold text-foreground">Satoshi&apos;s Daemon</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link href="https://x.com/i/communities/2002777025719963956" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Join Community
            </Button>
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="https://x.com/i/communities/2002777025719963956" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Join Community
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
