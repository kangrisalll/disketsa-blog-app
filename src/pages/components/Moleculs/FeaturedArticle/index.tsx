import { ImageComponent } from "../../Atoms/Image";
import { Heading } from "../../Atoms/Heading";
import { Button } from "../../Atoms/Button";

export function FeaturedArticle({ title, category, description, imageSrc }) {
    return (
      <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
        {/* <ImageComponent src={imageSrc} alt="Featured article" className="w-full h-full" /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <span className="text-[#f3e55f] text-sm">{category}</span>
          <Heading level="h3" className="text-3xl mt-2">{title}</Heading>
          <p className="text-zinc-300 mt-2 mb-4 max-w-xl">{description}</p>
          <Button>Baca Artikel</Button>
        </div>
      </div>
    );
  }