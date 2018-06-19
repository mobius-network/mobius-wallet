import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/Footer';

import { Container, Content } from './styles';

export default class DefaultLayout extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const { children } = this.props;

    return (
      <Container>
        <Content>{children}</Content>
        <Footer />
      </Container>
    );
  }
}
