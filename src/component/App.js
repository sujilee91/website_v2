import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab,faLinkedinIn, faGithub, faDribbble, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';
import Container from './Container';

library.add(fab, faLinkedinIn, faGithub, faCheckSquare, faCoffee, faGithub, faDribbble, faInstagram)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container/>
      </div>
    );
  }
}

export default App;
