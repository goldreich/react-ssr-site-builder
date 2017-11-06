import Page from '../models/pages';

const home = {
  slug: 'home',
  title: 'Home page',
  components: [
    { 
      component: 'layout.Header', 
      props: { 
        className: 'test', 
        inverse: true, 
        collapseOnSelect: true
      } 
    },
    { 
      component: 'bootstrap.Grid',
      props: {
        fluid: false
      },
      children: [
        {
          component: 'bootstrap.Row',
          children: [
            {
              component: 'bootstrap.Col',
              props: { lg: 6, sm: 12 },
              children: [
                {
                  component: 'bootstrap.Panel',
                  children: ['Панель 1']
                }
              ]
            },
            {
              component: 'bootstrap.Col',
              props: { lg: 6, sm: 12 },
              children: [
                {
                  component: 'bootstrap.Panel',
                  children: ['Панель 2']
                }
              ]
            }
          ]
        },
        {
          component: 'bootstrap.Row',
          children: [
            {
              component: 'bootstrap.Col',
              props: { lg: 6, sm: 12 },
              children: [
                {
                  component: 'bootstrap.Panel',
                  children: ['Панель 3']
                }
              ]
            },
            {
              component: 'bootstrap.Col',
              props: { lg: 6, sm: 12 },
              children: [
                {
                  component: 'bootstrap.Panel',
                  children: ['Панель 4']
                }
              ]
            }
          ]
        }
      ]
    },
    { component: 'layout.Footer' }
  ],
  reducers: ['menu'],
  reducerStates: {
    'menu': {
      leftNav: [
        { text: 'Link', href: '#'},
        { text: 'Link', href: '#'},
        { label: 'Dropdown', dropdown: [
          { text: 'Action', href: '#' },
          { text: 'Another action', href: '#' },
          { text: 'Somethink else here', href: '#' },
          { type: 'divider' },
          { text: 'Link separ', href: '#' }
        ] }
      ],
      rightNav: [
        { text: 'Link 1', href: '#'},
        { text: 'Link 2 3 4', href: '#'}
      ]
    }
  }
};

const about = {
  slug: 'about',
  title: 'About RSSB',
  components: [
    { 
      component: 'layout.Header', 
      props: { 
        className: 'test', 
        inverse: true, 
        collapseOnSelect: true
      } 
    },
    { 
      component: 'layout.Content',
      children: [
        {
          component: 'layout.Content',
          children: 'Hello, World!'
        },
        'Wow, wow, davite laaal'
      ],
      props: {
        className: 'hw'
      }
    },
    { component: 'layout.Footer' },
    { component: 'container.ShowTitle' }
  ]
};

export default async function Seeder() {
  try {
    let pages;
    await Page.remove();
    pages = await Page.find({ $or: [{title: 'Home page'}, {title: 'About RSSB'}] });
    if (pages.length === 0) {
      pages = await Page.create([home, about]);
    }
  } catch (error) {
    console.error(error);
  }
};