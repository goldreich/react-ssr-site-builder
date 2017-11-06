// Components:
import { Content, Footer } from '../app/components/layout';
// Containers:
import HeaderContainer from '../app/containers/layout/HeaderContainer';
// Bootstrap Components:
import {
  Grid, Row, Col, Panel
} from 'react-bootstrap';

export default {
  
  // Layout:
  'layout.Header': { component: HeaderContainer },
  'layout.Content': { component: Content },
  'layout.Footer': { component: Footer },

  // Bootstrap:
  'bootstrap.Grid': { component: Grid },
  'bootstrap.Row': { component: Row },
  'bootstrap.Col': { component: Col },
  'bootstrap.Panel': { component: Panel }
  
};
