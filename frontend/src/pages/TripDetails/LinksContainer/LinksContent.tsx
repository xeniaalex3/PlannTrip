import { Link } from 'react-router'
import { Link2 } from 'lucide-react'
import { type LinksContentProps } from '../../../@types/tripDetails'

export default function LinksContent({ title, description, link} : LinksContentProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h4 className="text-zinc-100 font-sm">{title}</h4>
        <Link
          to={link}
          className="text-xs text-zinc-400"
          target="_blank"
        >
          {description}
        </Link>
      </div>
      <Link to={link} target="_blank">
        {' '}
        <Link2 className="size-5 text-zinc-400" />
      </Link>
    </div>
  )
}
