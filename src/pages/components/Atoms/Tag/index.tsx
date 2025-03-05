import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export function Tag({ children, className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("text-[#f3e55f] text-sm", className)} {...props}>
      {children}
    </span>
  )
}

