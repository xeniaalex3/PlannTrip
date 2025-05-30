import Logo from '../../components/ui/Logo/Logo'

export default function Header() {
  return (
    <div className="space-y-5">
      <Logo />
      <p className="text-zinc-300 text-lg">
        Invitez vos amis et planifiez votre prochain voyage !
      </p>
    </div>
  )
}
