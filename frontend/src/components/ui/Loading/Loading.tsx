import { LoaderCircle } from "lucide-react"

export default function Loading() {
  return (
    <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
      <LoaderCircle className="w-5 h-5 animate-spin text-lime-950" />
    </div>
  )
}
