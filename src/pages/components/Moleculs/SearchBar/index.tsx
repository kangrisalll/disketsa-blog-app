import { Search } from "lucide-react"

export function SearchBar() {
  return (
    <div className="relative flex-1 max-w-md w-full">
      <input type="search" placeholder="Cari artikel" className="w-full px-4 py-2 bg-white rounded-md text-black" />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
    </div>
  )
}

