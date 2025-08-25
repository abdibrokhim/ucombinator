export type News = {
  name: string
  description: string
  link: string
  image: string
  type: 'article' | 'podcast' | 'spotlight' | 'news'
  cta: 'read' | 'listen' | 'watch' | 'learn'
  id: string
}

export const LATEST_NEWS: News[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    image: '/AI-Retail-Ink-3.webp',
    type: 'article',
    cta: 'read',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    image: '/AI-Retail-Ink-3.webp',
    type: 'podcast',
    cta: 'listen',
    id: 'project2',
  },
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    image: '/AI-Retail-Ink-3.webp',
    type: 'article',
    cta: 'read',
    id: 'project3',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    image: '/AI-Retail-Ink-3.webp',
    type: 'podcast',
    cta: 'listen',
    id: 'project4',
  },
]
