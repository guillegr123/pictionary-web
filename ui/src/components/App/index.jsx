import React, {Component} from 'react';
import DrawCanvas from '../DrawCanvas'

import './App.css';

const Tech = ({match}) => {
  return <div>Current Route: {match.params.tech}</div>
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
  }

  render() {
    return (
      <div className="App">
        <DrawCanvas fullscreen={true} />
      </div>
    );
  }
}

export default App;
