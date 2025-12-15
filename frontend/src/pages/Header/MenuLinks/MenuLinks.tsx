import { type MenuLinksProps } from '../../../@types/header'
import { Link } from '@tanstack/react-router'
import { useTrip } from '../../../context/TripContext'

export default function MenuLinks({focus, id, name, path, pathname, onClose}: MenuLinksProps){
  const { tripId } = useTrip()
  const newFocus = !!(pathname?.split('/')?.[1] === id) 

  const linkProps = path === '/trips/$tripId' && tripId 
    ? { to: path, params: { tripId } }
    : { to: path }

  return(
    <div className="flex flex-row">
      <Link {...linkProps} onClick={onClose}>
        <li
          className={`flex hover:text-lime-300 text-zinc-300 ${
            focus || newFocus ? 'text-lime-300' : ''
          }`}
        >
          <p
            className={`transition duration-300 ease-in-out md:text-base md:font-medium xs:text-2xl xs:font-medium ${
              focus || newFocus ? 'text-lime-300' : ''
            }`}
          >
            {name}
          </p>
        </li>
      </Link>
    </div>
  )
}