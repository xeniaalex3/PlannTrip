import { Link } from 'react-router'
import { Link2 } from 'lucide-react'
import { type LinksContentProps } from '../../../../@types/tripDetails'

export default function LinksContent({ title, link} : LinksContentProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h4 className="text-zinc-400">{title}</h4>
      </div>
      <Link to={link} target="_blank">
        {' '}
        <Link2 className="size-5 text-zinc-400" />
      </Link>
    </div>
  )
}
