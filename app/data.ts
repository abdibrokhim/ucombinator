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
    name: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description:
      'Design and artificial intelligence (AI) are increasingly intertwined, driving innovation across industries. As technology evolves, the role of design engineering is more critical than ever, bridging creativity and functionality.',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    image: 'https://cdn.cosmos.so/affd4b79-e848-4dfd-bd42-5f2c4a847365?format=jpeg',
    type: 'article',
    cta: 'read',
    id: '3',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    image: '/AI-Retail-Ink-3.webp',
    type: 'podcast',
    cta: 'listen',
    id: '2',
  },
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    image: '/AI-Retail-Ink-3.webp',
    type: 'article',
    cta: 'read',
    id: '1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    image: '/AI-Retail-Ink-3.webp',
    type: 'podcast',
    cta: 'listen',
    id: '0',
  },
]
