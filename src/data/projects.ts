interface ProjectProps {
  id: number
  name: string
  featured: boolean
  description: string
  image: string
}

export const projects: ProjectProps[] = [
  {
    id: 1,
    name: 'Lorem ipsum dolor',
    featured: true,
    // eslint-disable-next-line max-len
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas integer eget aliquet.`,
    image: 'project-1.jpg'
  },
  {
    id: 2,
    name: 'Lorem ipsum dolor',
    featured: true,
    // eslint-disable-next-line max-len
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas integer eget aliquet.`,
    image: 'project-2.jpg'
  }
]
