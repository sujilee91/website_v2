import React, { Component } from 'react';
import '../styles/App.css';

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab,faLinkedinIn, faGithub, faDribbble, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
 

library.add(fab, faLinkedinIn, faGithub, faCheckSquare, faCoffee, faGithub, faDribbble, faInstagram)

class App extends Component {
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
