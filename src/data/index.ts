/* eslint-disable max-len */
import codeigniter from '../assets/skills/codeigniter.svg'
import css from '../assets/skills/css.svg'
import gatsby from '../assets/skills/gatsby.svg'
import html from '../assets/skills/html.svg'
import javascript from '../assets/skills/javascript.svg'
import jquery from '../assets/skills/Jquery.svg'
import laravel from '../assets/skills/laravel.svg'
import php from '../assets/skills/php.svg'
import reactjs from '../assets/skills/reactjs.svg'
import redux from '../assets/skills/redux.svg'
import sass from '../assets/skills/sass.svg'
import typescript from '../assets/skills/typescript.svg'
import wordpress from '../assets/skills/wordpress.svg'

export const featured: number[] = [1, 2, 3]

export const contacts: string[] = ['mathewkayode116@gmail.com', '+234 (0)801 234 5678']

// each member of an array is a paragraph
export const story: string[] = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas integer eget  aliquet. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Purus ut faucibus  pulvinar elementum integer enim neque. Elementum curabitur vitae nunc sed velit dignissim  sodales ut eu. Amet porttitor eget dolor morbi non arcu risus quis varius. Pellentesque  habitant morbi tristique senectus et netus et malesuada fames. Leo integer malesuada nunc  vel. Consectetur lorem donec massa sapien faucibus et molestie. Sed pulvinar proin gravida  hendrerit lectus a. Sed id semper risus in. Fringilla phasellus faucibus scelerisque eleifend  donec pretium vulputate sapien.',
  '       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas integer eget  aliquet. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Purus ut faucibus  pulvinar elementum integer enim neque. Elementum curabitur vitae nunc sed velit dignissim  sodales ut eu. Amet porttitor eget dolor morbi non arcu risus quis varius. Pellentesque  habitant morbi tristique senectus et netus et malesuada fames. Leo integer malesuada nunc  vel. Consectetur lorem donec massa sapien faucibus et molestie. Sed pulvinar proin gravida  hendrerit lectus a. Sed id semper risus in. Fringilla phasellus faucibus scelerisque eleifend  donec pretium vulputate sapien.'
]

export const skills: { id: number; title: string; icon: any }[] = [
  { id: 1, title: 'HTML', icon: html },
  { id: 2, title: 'CSS', icon: css },
  { id: 3, title: 'Javascript', icon: javascript },
  { id: 4, title: 'Typescript', icon: typescript },
  { id: 5, title: 'PHP', icon: php },
  { id: 6, title: 'Wordpress', icon: wordpress },
  { id: 7, title: 'ReactJs', icon: reactjs },
  { id: 8, title: 'Redux', icon: redux },
  { id: 9, title: 'Laravel', icon: laravel },
  { id: 10, title: 'Codeigniter', icon: codeigniter },
  { id: 11, title: 'Jquery', icon: jquery },
  { id: 12, title: 'SASS', icon: sass },
  { id: 13, title: 'Gatsby', icon: gatsby }
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
