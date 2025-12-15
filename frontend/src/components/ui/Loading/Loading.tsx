import { LoaderCircle } from "lucide-react"

interface LoadingProps {
  className?: string
}

export default function Loading({ className = "text-lime-950" }: LoadingProps) {
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
      <LoaderCircle className={`w-5 h-5 animate-spin ${className}`} />
    </div>
  )
}
