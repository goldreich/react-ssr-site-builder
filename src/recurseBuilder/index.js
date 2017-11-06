import React from 'react';
import registry from './registry';

export default function recurse(hyd) {
  let components = [];
  let _tmp;

  function createElement(component, props, children) {
    if (children instanceof Array) {
      return React.createElement(component, props, ...recurse(children));
    } else if (children && typeof children === 'object') {
      return React.createElement(component, props, recurse(children));
    } else {
      return React.createElement(component, props, children ? children : null);
    }
  }

  if (typeof hyd === 'object' && (hyd instanceof Array)) {
    for (let c of hyd) {
      // Check errors:
      if (typeof c === 'string' || typeof c === 'number') { components.push(createElement('div', null, c)); continue; }
      if (typeof c !== 'object') return console.error(`RSSB: Components types supports only: string, number, object`);
      if (c.component && !registry[c.component]) return console.error(`RSSB: Registry '${c.component}' not found.`);
      // Save component to _tmp:
      _tmp = c.component ? registry[c.component].component : (c.tag ? c.tag : 'div');
      if (c.children) {
        // Component with children:
        components.push(createElement(_tmp, c.props ? c.props : null, c.children));
        continue;
      } else {
        // Component without children:
        components.push(createElement(_tmp, c.props ? c.props : null, null));
      } 
    }
  }

  return components;
}
