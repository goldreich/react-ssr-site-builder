const initialState = {
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
    { text: 'Link 2', href: '#'}
  ]
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case 'SET_TITLE':
      return { 
        ...state, 
        title: action.payload 
      };
    default:
      return state;
  }
}  