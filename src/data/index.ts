/* eslint-disable max-len */
export const featured: number[] = [1, 4, 5]

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
  `I am based in Logos, Nigeria. I studied Computer science at Kogi State University, Anyigba. I started my journey into programming in 2015 with c++, were I was exposed to the basics of programming. I had a short spell in 3d modeling with Blender but rejuvenated my programming career in 2019.`,
  'My web development journey started with HTML, CSS and PHP as I aimed from start to become a full stack developer. Over the years have gained loads of experience while working on various projects and technologies from backend to frontend to working with complex databases.'
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
      { id: 1, title: 'PHP', icon: 'php.svg' },
      { id: 2, title: 'Javascript', icon: 'javascript.svg' },
      { id: 3, title: 'Typescript', icon: 'typescript.svg' },
      { id: 4, title: 'HTML', icon: 'html.svg' },
      { id: 5, title: 'CSS', icon: 'css.svg' }
    ]
  },
  {
    id: 2,
    cartegory: 'frontend',
    details: [
      { id: 1, title: 'ReactJs', icon: 'reactjs.svg' },
      { id: 2, title: 'Redux', icon: 'redux.svg' },
      { id: 3, title: 'VueJs', icon: 'vue-js.svg' },
      { id: 4, title: 'Jquery', icon: 'jquery-icon.svg' },
      { id: 5, title: 'SASS', icon: 'sass.svg' },
      { id: 6, title: 'Gatsby', icon: 'gatsby.svg' },
      { id: 7, title: 'Graphql', icon: 'graphql.svg' },
      { id: 8, title: 'Bootstrap', icon: 'bootstrap.svg' },
      { id: 9, title: 'Material UI', icon: 'material-ui.svg' }
    ]
  },
  {
    id: 3,
    cartegory: 'backend',
    details: [
      { id: 1, title: 'PHP', icon: 'php.svg' },
      { id: 2, title: 'Laravel', icon: 'laravel.svg' },
      { id: 3, title: 'NodeJs', icon: 'node-js.svg' },
      { id: 4, title: 'EpressJs', icon: 'express-js.svg' },
      { id: 5, title: 'Firebase', icon: 'firebase.svg' },
      { id: 6, title: 'Codeigniter', icon: 'codeigniter.svg' }
    ]
  },
  {
    id: 4,
    cartegory: 'database',
    details: [
      { id: 1, title: 'MySQL', icon: 'mysql.svg' },
      { id: 2, title: 'PostgreSQL', icon: 'postgresql.svg' },
      { id: 3, title: 'MongoDB', icon: 'monogodb.svg' }
    ]
  },
  {
    id: 5,
    cartegory: 'CMS',
    details: [{ id: 1, title: 'Wordpress', icon: 'wordpress.svg' }]
  },
  {
    id: 6,
    cartegory: 'Prototyping',
    details: [
      { id: 1, title: 'Figma', icon: 'figma.svg' },
      { id: 2, title: 'Invision Studio', icon: 'invision.svg' }
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
    company: 'Self Employed',
    description: `Developed functional digital design concepts across various platforms to
strengthen customer’s brand and identity.
Worked with PHP, Laravel , SQL, Javascript, ReactJs and other frameworks to
implement customer ideas.
`,
    role: 'Freelance Web Developer'
  },
  {
    id: 2,
    date: 'Nov 2019 - Feb 2020',
    company: 'Huawei Technologies Co. Nig Ltd',
    description: `Reviewed code, debugged problems and corrected issues.
Delivered performance-driven and user-centric websites that met all business
requirements.
Gathered and defined customer requirements to develop clear specifications for
project plans.
Planned and engineered RESTful web services to manipulate dynamic datase`,
    role: 'intern'
  },
  {
    id: 1,
    date: 'Aug 2019 - Nov 2019',
    company: 'Silverbird Communications',
    description: `Leveraged strong understanding of WordPress core to manipulate admin and
theme components.
Installed required plugins and additional coding to fit final design and
functionality requirements.
Developed landing pages, dashboards and online applications using PHP,
Codeigniter and Jquery`,
    role: 'intern'
  }
]

export const recommended: number[] = [1, 2]
