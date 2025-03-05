export function Footer() {
    return (
      <footer className="bg-[#f3e55f] mt-12">
        <div className="container mx-auto px-4 py-6 flex flex-wrap items-center justify-between gap-4">
          <div className="text-2xl font-serif text-black">di·sketsa</div>
          <div className="flex gap-8">
            <a href="mailto:admin@disketsa.id" className="text-black hover:underline">admin@disketsa.id</a>
            <a href="https://instagram.com/di.sketsa" className="text-black hover:underline">@di.sketsa</a>
            <span className="text-black">(+62) 819 3450 1948</span>
          </div>
        </div>
      </footer>
    );
  }