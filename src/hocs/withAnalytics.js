import React, { Component,  } from 'react';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import ReactGA from 'react-ga';

export default () => Composed => 
  class extends Component {
    static getInitialProps(ctx) {
      return loadGetInitialProps(Composed, ctx)
    }

    componentDidMount() {
      console.log("PA VIEW")

      ReactGA.initialize('ID ANALYTICS');
      ReactGA.pageview(window.location.pathname);
    }

    render() {
      return <Composed {...this.props} />
    }
  }