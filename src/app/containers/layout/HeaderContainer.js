import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/layout/Header';

const HeaderContainer = (props) => (
  <Header { ...props }/>
);

const mapStateToProps = (state) => {
  const { menu } = state;

  return {
    menu
  };
};

const mapDispatchToProps = (dispatch) => {

  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);