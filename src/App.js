import React from 'react';
// import PropTypes from 'prop-types';

// Create as a stateless component
// const App = () => <h1>Hello stateless</h1>

// Create as a class

// Commented on video 6
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       txt: 'this is the state txt',
//       cat: 0
//     }
//   }
//
//   update (e) {
//     this.setState (
//       { txt: e.target.value }
//     )
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>{this.state.txt} - {this.state.cat}</h1>
//         <Widget update={this.update.bind(this)} />
//       </div>
//     )
//   }
// }
//
// const Widget = (props) =>
//   <input type="text" onChange={props.update} />
//
// App.propTypes = {
//   txt: PropTypes.string,
//   cat: PropTypes.number.isRequired
// }
//
// App.defaultProps = {
//   txt: "this is the default txt"
// }


// Video 7 props.children
// class App extends React.Component {
//   render() {
//     return <Button>I <Heart /> React</Button>
//   }
// }
//
// const Button = (props) => <button>{props.children}</button>
//
// class Heart extends React.Component {
//   render() {
//     return <span>&hearts;</span>
//   }
// }

// Video 8
class App extends React.Component {
  render() {
    return <Title text="The text" />
  }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`missing ${propName}`)
    }
    if (props[propName].length < 6) {
      return new Error(`${propName} was to short`)
    }
  }
}

export default App
