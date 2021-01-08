/* eslint-disable max-len */
export const featured: number[] = [1, 2, 3]

export const devIntro: { heading: string; body: string; picture: string } = {
  heading: 'Hi, I am a Full-Stack Web Developer',
  body: `Experienced with PHP, Javascript and Typescript my aim as a developer is a to build webisites and web apps that provide great user
  experience, scalability and beautiful layouts using the best technologies avalaible.`,
  picture: 'home.jpg'
}

export const pageHeroImages: { about: string; portfolio: string } = {
  about: 'about.jpg',
  portfolio: 'portfolio.jpg'
}

export const contacts: string[] = ['mathewkayode116@gmail.com', '+234 (0)805 644 0872']

interface ProfilesProps {
  id: number
  url: string
  icon: string
}

export const profiles: ProfilesProps[] = [
  { id: 1, url: 'https://github.com/chilliesdev', icon: 'Github.svg' },
  { id: 2, url: 'https://www.linkedin.com/in/kayode-matthew-16995a1a9', icon: 'Linkedin.svg' }
]

export const resumeLink = 'https://drive.google.com/file/d/18z3av1lxa_zlgH1i94KLU5KRhrSMDcR-/view?usp=drivesdk'

// each member of an array is a paragraph
export const story: string[] = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas integer eget  aliquet. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Purus ut faucibus  pulvinar elementum integer enim neque. Elementum curabitur vitae nunc sed velit dignissim  sodales ut eu. Amet porttitor eget dolor morbi non arcu risus quis varius. Pellentesque  habitant morbi tristique senectus et netus et malesuada fames. Leo integer malesuada nunc  vel. Consectetur lorem donec massa sapien faucibus et molestie. Sed pulvinar proin gravida  hendrerit lectus a. Sed id semper risus in. Fringilla phasellus faucibus scelerisque eleifend  donec pretium vulputate sapien.',
  '       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas integer eget  aliquet. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Purus ut faucibus  pulvinar elementum integer enim neque. Elementum curabitur vitae nunc sed velit dignissim  sodales ut eu. Amet porttitor eget dolor morbi non arcu risus quis varius. Pellentesque  habitant morbi tristique senectus et netus et malesuada fames. Leo integer malesuada nunc  vel. Consectetur lorem donec massa sapien faucibus et molestie. Sed pulvinar proin gravida  hendrerit lectus a. Sed id semper risus in. Fringilla phasellus faucibus scelerisque eleifend  donec pretium vulputate sapien.'
]

export const skills: {
         id: number
         cartegory: string
         details: { id: number; title: string; icon: string }[]
       }[] = [
         {
           id: 1,
           cartegory: 'languages',
           details: [
             { id: 5, title: 'PHP', icon: 'php.svg' },
             { id: 3, title: 'Javascript', icon: 'javascript.svg' },
             { id: 4, title: 'Typescript', icon: 'typescript.svg' },
             { id: 1, title: 'HTML', icon: 'html.svg' },
             { id: 2, title: 'CSS', icon: 'css.svg' }
           ]
         },
         {
           id: 2,
           cartegory: 'frontend',
           details: [
             { id: 7, title: 'ReactJs', icon: 'reactjs.svg' },
             { id: 8, title: 'Redux', icon: 'redux.svg' },
             { id: 5, title: 'VueJs', icon: 'vue-js.svg' },
             { id: 11, title: 'Jquery', icon: 'jquery-icon.svg' },
             { id: 12, title: 'SASS', icon: 'sass.svg' },
             { id: 13, title: 'Gatsby', icon: 'gatsby.svg' },
             { id: 16, title: 'Graphql', icon: 'graphql.svg' },
             { id: 14, title: 'Bootstrap', icon: 'bootstrap.svg' },
             { id: 15, title: 'Material UI', icon: 'material-ui.svg' },
           ]
         },
         {
           id: 3,
           cartegory: 'backend',
           details: [
             { id: 5, title: 'PHP', icon: 'php.svg' },
             { id: 9, title: 'Laravel', icon: 'laravel.svg' },
             { id: 7, title: 'NodeJs', icon: 'node-js.svg' },
             { id: 6, title: 'EpressJs', icon: 'express-js.svg' },
             { id: 8, title: 'Firebase', icon: 'firebase.svg' },
             { id: 10, title: 'Codeigniter', icon: 'codeigniter.svg' }
           ]
         },
         {
           id: 4,
           cartegory: 'database',
           details: [
             { id: 5, title: 'MySQL', icon: 'mysql.svg' },
             { id: 9, title: 'PostgreSQL', icon: 'postgresql.svg' },
             { id: 10, title: 'MongoDB', icon: 'monogodb.svg' }
           ]
         },
         {
           id: 5,
           cartegory: 'CMS',
           details: [{ id: 6, title: 'Wordpress', icon: 'wordpress.svg' }]
         },
         {
           id: 6,
           cartegory: 'Prototyping',
           details: [
             { id: 9, title: 'Figma', icon: 'figma.svg' },
             { id: 5, title: 'Invision Studio', icon: 'invision.svg' }
           ]
         },
         {
           id: 7,
           cartegory: 'Others',
           details: [
             { id: 5, title: 'Git', icon: 'git.svg' },
             { id: 9, title: 'Netlify', icon: 'netlify.svg' },
             { id: 10, title: 'Heroku', icon: 'heroku.svg' }
           ]
         }
       ]

export const experience: { id: number; date: string; company: string; description: string; role: string }[] = [
  {
    id: 3,
    date: 'Feb 2020 - Present',
    company: 'freelancing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Netus et ma',
    role: 'engineer'
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
    id: 1,
    date: 'Aug 2019 - Nov 2019',
    company: 'silverbird comm.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Netus et ma',
    role: 'intern'
  },
]

export const recommended: number[] = [1, 2]
