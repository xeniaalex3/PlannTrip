import { Link } from '@tanstack/react-router'

interface LinkToSwitchProps {
  to: string
  title: string
  subtitle: string
}

export default function LinkToSwitch({
  to,
  title,
  subtitle
}: LinkToSwitchProps) {
  return (
    <p className="mt-4 text-zinc-400 text-center">
      {title}{" "}
      <Link to={to} className='text-lime-300 hover:text-lime-400'>{subtitle}</Link>
    </p>
  )
}
