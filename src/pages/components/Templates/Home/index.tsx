import { Header } from "../../Organism/Header"
import { FeaturedArticle } from "../../Moleculs/FeaturedArticle"
import { RecentArticles } from "../../Organism/RecentArticles"
import { Footer } from "../../Organism/Footer"



export function HomeTemplate() {
  return (
    <div className="min-h-screen bg-[#000000]">
      <Header />

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <FeaturedArticle />
          </div>
          <div>
            <RecentArticles />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

