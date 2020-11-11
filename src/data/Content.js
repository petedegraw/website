const CONTENT = {
  pages: [
    {
      page: 'intro',
      url: '/',
      title: 'Pete DeGraw',
      description: 'Intro',
      class_name: 'home',
      copy: {
        heading: 'hi, I\'m Pete',
        subhead: 'you found me, what would you like to know?',
        ctas: [
          {
            id: 1,
            link: '/web',
            text: 'web development',
            titles: []
          },
          {
            id: 2,
            link: '/about',
            text: 'who is Pete',
            titles: []
          }
        ]
      }
    },
    {
      page: 'about',
      url: '/about',
      title: 'About Pete',
      description: 'some random things about Pete',
      class_name: 'about',
      copy: {
        heading: 'it\'s difficult to describe yourself... uh',
        subhead: 'engineer, enthusiastic planner (most of the time), avid coffee drinker, crazy about guitar tone, former pioneer of music festival backline, and family man.',
        ctas: [
          {
            id: 1,
            link: '/',
            text: 'sounds good, all done',
            titles: [
              'back'
            ],
          }
        ]
      }
    },
    {
      page: 'contact',
      url: '/contact',
      title: 'Contact Pete',
      description: 'a way to get in touch',
      class_name: 'contact',
      copy: {
        heading: 'tell me about you',
        subhead: 'now that I know about you, please tell me about you',
        ctas: [
          {
            id: 1,
            link: '/',
            text: 'not today',
            titles: [
              'back'
            ],
          }
        ]
      }
    },
    {
      page: 'web',
      url: '/web',
      title: 'web developer',
      description: 'Pete the developer',
      class_name: 'web',
      copy: {
        heading: 'I\'m a web developer',
        subhead: 'experience along the progressive road of development for the web',
        body: 'I focus on the details, the people, and the finished product. Though not seen by the end user, I value code quality and an effective process.',
        ctas: [
          {
            id: 1,
            link: '/contact',
            text: 'contact',
            titles: []
          },
          {
            id: 2,
            link: '/',
            text: 'enough of this',
            titles: [
              'back'
            ],
          }
        ]
      }
    },
    {
      page: 'portfolio',
      url: '/web/portfolio',
      title: 'Pete DeGraw | Portfolio',
      description: 'Web development portfolio',
      class_name: 'portfolio',
      copy: {
        heading: 'web development portfolio',
        subhead: 'some slices of the internet I\'ve contributed to',
        ctas: [
          {
            id: 1,
            link: '/contact',
            text: 'contact',
            titles: []
          },
          {
            id: 2,
            link: '/web',
            text: 'back to web',
            titles: []
          }
        ]
      }
    },
  ],
  contact_ctas: [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/pdegraw/',
      text: 'linkedin',
      titles: ['I use this more than twitter']
    },
    {
      id: 2,
      link: 'https://twitter.com/somepete',
      text: 'twitter',
      titles: ['I used linkedin more often']
    },
    // {
    //   id: 3,
    //   link: 'mailto:petedegraw@gmail.com',
    //   text: 'email',
    //   titles: ['I check email daily']
    // }
  ],
  fun_ctas: [
    {
      id: 1,
      link: '#',
      text: '???',
      titles: [
        'you really should click this!',
        'it\'s tempting to click this',
        'you really want to click this, don\'t you?',
        'gotta wonder what this does when you click it',
        'tryyyyyyyy iiiiiiiiit'
      ]
    }
  ],
  roles_human: ['Front End','Back End','Product Owner','Manager','Full Stack'],
  roles_machine: ['front-end','back-end','product-owner','manager','full-stack']
}
export default CONTENT;