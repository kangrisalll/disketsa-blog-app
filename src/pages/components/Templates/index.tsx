import { Navbar } from "../Organism/Header";
import { Heading } from "../Atoms/Heading";
import { FeaturedArticle } from "../Moleculs/FeaturedArticle";
import { ArticleList } from "../Organism/FeaturedArticles";
import { Footer } from "../Organism/Footer";



export function HomeTemplate({ featuredArticle, recentArticles }) {
    return (
      <div className="min-h-screen bg-[#000000]">
        <Navbar />
        <main className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Heading className="text-3xl mb-8">ARTIKEL PILIHAN</Heading>
              <FeaturedArticle {...featuredArticle} />
            </div>
            <div>
              <Heading className="text-3xl mb-8">ARTIKEL TERBARU</Heading>
              <ArticleList articles={recentArticles} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }