import { cn } from "@/lib/utils"

interface CarouselDotsProps {
  count: number
  activeIndex: number
  onDotClick?: (index: number) => void
}

export function CarouselDots({ count, activeIndex, onDotClick }: CarouselDotsProps) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick?.(i)}
          className={cn("w-2 h-2 rounded-full", i === activeIndex ? "bg-[#f3e55f]" : "bg-white/50")}
        />
      ))}
    </div>
  )
}

