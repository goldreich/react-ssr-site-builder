import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../app/store/configureStore';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Router } from 'express';
import recurseBuilder from '../../recurseBuilder';
import Page from '../models/pages';

// { 'path': 'slug_in_db', ... }
const routes = {
  '/': 'home',
  '/about': 'about'
};

export default ({ config, db }) => {
	let router = Router();

  for (let route of Object.keys(routes)) {
    router.get(route, (req, res) => {
      Page.findOne({ slug: routes[route] })
      .then(page => {
        if (!page) console.error('Page not found in DB by slug: ' + routes[route]); 

        // Page found:
        const store = configureStore(page.reducerStates, page.reducers ? page.reducers : []);
        const sheet = new ServerStyleSheet();
        const components = recurseBuilder(page.components);
        const html = renderToString(sheet.collectStyles(
          React.createElement(Provider, { store: store },
            React.createElement('div', null, ...components) 
          )
        ));
        const styles = sheet.getStyleTags();

        res.render('layout', { 
          title: page.title,
          html: html,
          initialComponents: page.components,
          reducers: page.reducers ? page.reducers : [],
          reducerStates: page.reducerStates || {},
          styles: styles
        });
      })
      .catch(err => console.error(err));
    });
  }

	return router;
}
