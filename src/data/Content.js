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
            text: 'see web stuff',
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
        subhead: 'dad, husband, avid coffee drinker, enthusiastic planner (most of the time), crazy about guitar tone, and really like music',
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
      page: 'web',
      url: '/web',
      title: 'web developer',
      description: 'Pete the developer',
      class_name: 'web',
      copy: {
        heading: 'I\'m a web developer',
        subhead: 'with years of experience along the progressive road of web development',
        ctas: [
          {
            id: 1,
            link: '/',
            text: 'enough of this',
            titles: [
              'back'
            ],
          }
        ]
      }
    }
  ],
  ctas: [
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
  ]
}
export default CONTENT;