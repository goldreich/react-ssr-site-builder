import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import recurse from '../recurseBuilder';
import configureStore from './store/configureStore';

const store = configureStore(window.reducerStates, window.reducers);

hydrate(
  React.createElement(Provider, { store: store },
    React.createElement('div', null, ...recurse(window.initialComponents)) 
  )
, document.getElementById('app'));