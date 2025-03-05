import Image from "next/image"
import { Button } from "../../Atoms/Button"
import { Heading } from "../../Atoms/Heading"
import { Tag } from "../../Atoms/Tag"


interface ArticleCardProps {
  tag: string
  title: string
  excerpt: string
  imageUrl: string
  compact?: boolean
}

export function ArticleCard({ tag, title, excerpt, imageUrl, compact = false }: ArticleCardProps) {
  if (compact) {
    return (
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative w-full sm:w-32 h-48 sm:h-24">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover rounded" />
        </div>
        <div className="flex-1">
          <Heading level={3} className="text-base">
            {title}
          </Heading>
          <Tag>{tag}</Tag>
          <p className="text-zinc-300 text-sm mt-1 line-clamp-2">{excerpt}</p>
          <Button size="sm" className="mt-2">
            Baca Artikel
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
      <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 md:p-6">
        <Tag>{tag}</Tag>
        <Heading level={3} className="mt-2 text-xl md:text-2xl lg:text-3xl">
          {title}
        </Heading>
        <p className="text-zinc-300 mt-2 mb-4 max-w-xl text-sm md:text-base">{excerpt}</p>
        <Button>Baca Artikel</Button>
      </div>
    </div>
  )
}

