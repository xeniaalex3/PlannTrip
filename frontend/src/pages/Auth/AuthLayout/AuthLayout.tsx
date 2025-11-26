import type { ReactNode } from 'react'

interface AuthLayoutProps {
  title: string
  subtitle: string
  children: ReactNode
}

export default function AuthLayout({
  title,
  subtitle,
  children
}: AuthLayoutProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-12 w-full max-w-md">
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <h1 className="font-semibold text-2xl">{title}</h1>
        {subtitle && <h3 className="text-zinc-300">{subtitle}</h3>}
      </div>

      <form action="" className="flex flex-col gap-5 w-full">
        {children}
      </form>
    </div>
  )
}
