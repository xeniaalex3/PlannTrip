import { Link } from '@tanstack/react-router'
import logo from '../../../assets/images/Vector.png'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center justify-center gap-2">
      <img
        src={logo}
        alt="picture of logo"
        className="xs:max-sm:h-7 xs:max-sm:w-7 sm:max-md:h-9 sm:max-md:w-9 object-contain"
      />
      <h1 className="text-zinc-50 font-semibold xs:max-sm:text-2xl sm:max-md:text-3xl relative top-[-4px]">
        plannTrip
      </h1>
    </Link>
  )
}
