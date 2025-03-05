import { Logo } from "../../Atoms/Logo"
import { SearchBar } from "../../Moleculs/SearchBar"
import { Navigation } from "../../Moleculs/Navigation"



const navigationItems = [
  { label: "#Sketsaiklan", href: "#" },
  { label: "#Sketsa+", href: "#" },
  { label: "#EXPERIMENTALIS", href: "#" },
  { label: "Disketsa", href: "#" },
]

export function Header() {
  return (
    <header className="border-b border-zinc-800 relative">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center gap-4">
        <Logo />
        <SearchBar />
        <Navigation items={navigationItems} />
      </div>
    </header>
  )
}

