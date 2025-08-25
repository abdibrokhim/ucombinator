'use client'

const FOOTER_LINKS = [
  {
    label: 'Programs',
    links: [
      {
        label: 'UC Program',
        href: '/uc-program',
      },
      {
        label: 'Startup School',
        href: '/startup-school',
      },
      {
        label: 'Work at Startup',
        href: '/work-at-startup',
      },
      {
        label: 'Co-Founder Matching',
        href: '/co-founder-matching',
      },
    ],
  },
  {
    label: 'Company',
    links: [
      {
        label: 'Contact',
        href: '/contact',
      },
      {
        label: 'Privacy Policy',
        href: '/privacy-policy',
      },
      {
        label: 'Terms of Service',
        href: '/terms-of-service',
      },
    ],
  },
  {
    label: 'Resources',
    links: [
      {
        label: 'Startup Directory',
        href: '/startup-directory',
      },
      {
        label: 'Startup Library',
        href: '/startup-library',
      },
      {
        label: 'Investors',
        href: '/investors',
      },
    ],
  },
]

export function Footer() {
  return (
    <footer className="mt-24 px-4 pt-4 pb-24 md:px-12 md:py-12 px-0 py-4 dark:border-zinc-800">
      <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 mb-4 md:mb-8"></div>
      <div className="flex items-start grid grid-cols-2 md:grid-cols-3 gap-8 font-extralight">
        {FOOTER_LINKS.map((section) => (
          <div key={section.label}>
            <h3 className="text-sm font-medium text-zinc-500 uppercase mb-4 text-sm">{section.label}</h3>
            <ul className="space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-700">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-xs text-zinc-500 mt-8 font-thin">
        <p>© 2025 UCombinator.</p>
      </div>
    </footer>
  )
}
