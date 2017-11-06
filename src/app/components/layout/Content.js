import React from "react";
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';

const Content = (props) => (
  <Grid className={props.className}>
    <Row>
      <Col lg={12}>
        { props.children }
      </Col>
    </Row>
  </Grid>
);

export default Content;