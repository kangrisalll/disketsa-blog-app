// export default async function Page() {
//   try {
//     const res = await fetch('http://localhost:8055/items/posts');
//     const { data } = await res.json(); // Ambil data dari response

//     return (
//       <ul>
//         {data.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     );
//   } catch (error) {
//     return <p>Terjadi kesalahan saat mengambil data.</p>;
//   }
// }

import Image from "next/image"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Header */}
      

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Featured Articles */}
          <div className="md:col-span-2">
            <h2 className="text-white text-3xl font-bold mb-8">ARTIKEL PILIHAN</h2>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src=""
                alt="Featured article"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-[#f3e55f] text-sm">#SketsaIklan</span>
                <h3 className="text-white text-3xl font-bold mt-2">Iklan di Masa Depan!</h3>
                <p className="text-zinc-300 mt-2 mb-4 max-w-xl">
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate...
                </p>
                <button className="bg-[#f3e55f] text-black px-6 py-2 rounded hover:bg-[#f3e55f]/90">
                  Baca Artikel
                </button>
              </div>
              {/* Carousel Dots */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <button key={i} className={cn("w-2 h-2 rounded-full", i === 0 ? "bg-[#f3e55f]" : "bg-white/50")} />
                ))}
              </div>
            </div>
          </div>

          {/* Recent Articles */}
          <div>
            <h2 className="text-white text-3xl font-bold mb-8">ARTIKEL TERBARU</h2>
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="relative w-32 h-24">
                    <Image
                      src=""
                      alt={`Recent article ${i}`}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold">Iklan di Masa Depan!</h3>
                    <p className="text-zinc-400 text-sm">#SketsaIklan</p>
                    <p className="text-zinc-300 text-sm mt-1">
                      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                      demonstrate...
                    </p>
                    <button className="bg-[#f3e55f] text-black text-sm px-4 py-1 rounded mt-2 hover:bg-[#f3e55f]/90">
                      Baca Artikel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f3e55f] mt-12">
        <div className="container mx-auto px-4 py-6 flex flex-wrap items-center justify-between gap-4">
          <div className="text-2xl font-serif">di·sketsa</div>
          <div className="flex gap-8">
            <a href="mailto:admin@disketsa.id" className="text-black hover:underline">
              admin@disketsa.id
            </a>
            <a href="https://instagram.com/di.sketsa" className="text-black hover:underline">
              @di.sketsa
            </a>
            <span className="text-black">(+62) 819 3450 1948</span>
          </div>
        </div>
      </footer>
    </div>
  )
}


