import { Heading } from "../../Atoms/Heading"
import { ArticleCard } from "../../Moleculs/ArticleCard"
import { CarouselDots } from "../../Moleculs/CarouselDots"


export function FeaturedArticles() {
  return (
    <div>
      <Heading level={2} className="mb-8">
        ARTIKEL PILIHAN
      </Heading>
      <div className="relative">
        <ArticleCard
          tag="#SketsaIklan"
          title="Iklan di Masa Depan!"
          excerpt="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate..."
          imageUrl=""
        />
        <div className="absolute bottom-4 right-4">
          <CarouselDots count={5} activeIndex={0} />
        </div>
      </div>
    </div>
  )
}

