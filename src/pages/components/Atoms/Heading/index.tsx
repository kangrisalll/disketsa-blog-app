import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"


interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function Heading({ children, className, level = 2, as, ...props }: HeadingProps) {
  const Tag = as || (`h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6")

  return (
    <Tag
      className={cn(
        "font-bold text-white",
        level === 1 && "text-3xl md:text-4xl",
        level === 2 && "text-2xl md:text-3xl",
        level === 3 && "text-xl md:text-2xl",
        level === 4 && "text-lg md:text-xl",
        level === 5 && "text-base md:text-lg",
        level === 6 && "text-sm md:text-base",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

