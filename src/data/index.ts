/* eslint-disable max-len */
interface ProjectProps {
  id: number
  name: string
  featured: boolean
  description: string
  image: string
  slug: string
}

export const projects: ProjectProps[] = [
  {
    id: 1,
    name: 'Lorem ipsum dolor',
    featured: true,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas integer eget aliquet.`,
    image: 'project-1.jpg',
    slug: 'first'
  },
  {
    id: 2,
    name: 'Lorem ipsum dolor',
    featured: true,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas integer eget aliquet.`,
    image: 'project-2.jpg',
    slug: 'second'
  }
]

export const contacts: string[] = ['mathewkayode116@gmail.com', '+234 (0)801 234 5678']

// each member of an array is a paragraph
export const story: string[] = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas integer eget  aliquet. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Purus ut faucibus  pulvinar elementum integer enim neque. Elementum curabitur vitae nunc sed velit dignissim  sodales ut eu. Amet porttitor eget dolor morbi non arcu risus quis varius. Pellentesque  habitant morbi tristique senectus et netus et malesuada fames. Leo integer malesuada nunc  vel. Consectetur lorem donec massa sapien faucibus et molestie. Sed pulvinar proin gravida  hendrerit lectus a. Sed id semper risus in. Fringilla phasellus faucibus scelerisque eleifend  donec pretium vulputate sapien.',
  '       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas integer eget  aliquet. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Purus ut faucibus  pulvinar elementum integer enim neque. Elementum curabitur vitae nunc sed velit dignissim  sodales ut eu. Amet porttitor eget dolor morbi non arcu risus quis varius. Pellentesque  habitant morbi tristique senectus et netus et malesuada fames. Leo integer malesuada nunc  vel. Consectetur lorem donec massa sapien faucibus et molestie. Sed pulvinar proin gravida  hendrerit lectus a. Sed id semper risus in. Fringilla phasellus faucibus scelerisque eleifend  donec pretium vulputate sapien.'
]

export const skills: { id: number; title: string }[] = [
  { id: 1, title: 'HTML' },
  { id: 2, title: 'CSS' },
  { id: 3, title: 'Javascript' },
  { id: 4, title: 'Typescript' },
  { id: 5, title: 'PHP' },
  { id: 6, title: 'Wordpress' },
  { id: 7, title: 'ReactJs' },
  { id: 8, title: 'Redux' },
  { id: 9, title: 'Laravel' },
  { id: 10, title: 'Codeigniter' },
  { id: 11, title: 'Jquery' },
  { id: 12, title: 'SASS' },
  { id: 13, title: 'Gatsby' }
]

export const experience: { id: number; date: string; company: string; description: string; role: string }[] = [
  {
    id: 1,
    date: 'Aug 2019 - Nov 2019',
    company: 'silverbird comm.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Netus et ma',
    role: 'intern'
  },
  {
    id: 2,
    date: 'Nov 2019 - Feb 2020',
    company: 'huawei',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Netus et ma',
    role: 'intern'
  },
  {
    id: 3,
    date: 'Feb 2020 - Present',
    company: 'freelancing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Netus et ma',
    role: 'engineer'
  }
]

export const recommended: number[] = [1, 2]
