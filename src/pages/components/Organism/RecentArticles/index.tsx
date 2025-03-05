import { Heading } from "../../Atoms/Heading"
import { ArticleCard } from "../../Moleculs/ArticleCard"

const articles = [
  {
    tag: "#SketsaIklan",
    title: "Iklan di Masa Depan!",
    excerpt: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate...",
    imageUrl:  "",
  },
  {
    tag: "#SketsaIklan",
    title: "Iklan di Masa Depan!",
    excerpt: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate...",
    imageUrl:  "",
  },
  {
    tag: "#SketsaIklan",
    title: "Iklan di Masa Depan!",
    excerpt: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate...",
    imageUrl:  "",
  },
  {
    tag: "#SketsaIklan",
    title: "Iklan di Masa Depan!",
    excerpt: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate...",
    imageUrl:  "",
  },
]

export function RecentArticles() {
  return (
    <div>
      <Heading level={2} className="mb-8">
        ARTIKEL TERBARU
      </Heading>
      <div className="space-y-6">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            tag={article.tag}
            title={article.title}
            excerpt={article.excerpt}
            imageUrl={article.imageUrl}
            compact
          />
        ))}
      </div>
    </div>
  )
}

