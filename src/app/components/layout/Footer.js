import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';

const Footer = (props) => (
  <Grid className={props.className}>
    <Row>
      <Col lg={12}>
        React SSR Site Builder
      </Col>
    </Row>
  </Grid>
);

const styledFooter = styled(Footer)`
  padding-top: 16px;
  padding-bottom: 16px;
  color: #fff;
  text-align: center;
`;

const FooterWrapper = (props) => (
  <Grid fluid className={props.className}>
    <Row>
      <Col lg={12}>
        { React.createElement(styledFooter) }
      </Col>
    </Row>
  </Grid>
);


export default styled(FooterWrapper)`
  background: #222;
`;