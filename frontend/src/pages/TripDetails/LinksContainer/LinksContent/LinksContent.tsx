import { Link } from 'react-router'
import { Link2 } from 'lucide-react'
import { type LinksContentProps } from '../../../../@types/tripDetails'

export default function LinksContent({ links }: LinksContentProps) {
  return (
    <>
      {links.map(link => (
        <div className="flex justify-between items-center" key={link.id}>
          <div>
            <h4 className="text-zinc-400">{link.title}</h4>
          </div>
          <Link to={link.url} target="_blank">
            {' '}
            <Link2 className="size-5 text-zinc-400" />
          </Link>
        </div>
      ))}
    </>
  )
}
