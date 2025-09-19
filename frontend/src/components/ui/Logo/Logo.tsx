import { Link } from '@tanstack/react-router'
import logo from '../../../assets/images/Vector.png'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center justify-center gap-2">
      <img
        src={logo}
        alt="picture of logo"
        className="h-9 w-9 object-contain"
      />
      <h1 className="text-zinc-50 font-semibold text-3xl relative top-[-4px]">
        plannTrip
      </h1>
    </Link>
  )
}
