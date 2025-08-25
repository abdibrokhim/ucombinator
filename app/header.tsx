'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

const LOGO_URL = '/next.svg'

const NAVIGATION_LINKS = [
  {
    label: 'our founders',
    href: '/our-founders',
  },
  {
    label: 'our companies',
    href: '/our-companies',
  },
  {
    label: 'our team',
    href: '/our-team',
  },
  {
    label: 'stories',
    href: '/stories',
  },
]

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <Image src={LOGO_URL} alt="Ucombinator" width={32} height={32} />
      <div className="flex items-center gap-16">
        {NAVIGATION_LINKS.map((link) => (
          <Link key={link.label} href={link.href} className="font-medium text-black dark:text-white uppercase">
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  )
}
