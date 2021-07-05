import { FunctionComponent } from 'react'
import Link from 'next/link'
import useTheme from 'hooks/useTheme'

const LINKS = [
]

type Props = {}

const Page: FunctionComponent<Props> = () => {
  const [theme, toggleTheme] = useTheme()

  return (
    <nav>
      {LINKS.map((link) => (
        <Link key={link.href} href={link.href}>
          <a className="p-2 transition-colors text-accent hover:text-accent2">
            {link.label}
          </a>
        </Link>
      ))}
      <button
        className="p-2 border rounded-md bg-bg focus:outline-none"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
    </nav>
  )
}

export default Page
