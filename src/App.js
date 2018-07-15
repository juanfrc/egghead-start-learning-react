import React from 'react';
import PropTypes from 'prop-types';

// Create as a stateless component
// const App = () => <h1>Hello stateless</h1>

// Create as a class
class App extends React.Component {
  render() {
    let txt = this.props.txt
    return (
      <div>
        <h1>{txt}</h1>
        <b>Bold</b>
      </div>
    )
  }
}

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"
  // cat: PropTypes.number.isRequired
}

export default App
