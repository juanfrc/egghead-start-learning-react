import React from 'react';
import 'App.css'
// import ReactDOM from 'react-dom';
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
//
// export default App

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
//
// export default App

// Video 8
// class App extends React.Component {
//   render() {
//     return <Title text="The text" />
//   }
// }
//
// const Title = (props) => <h1>Title: {props.text}</h1>
//
// Title.propTypes = {
//   text(props, propName, component) {
//     if (!(propName in props)) {
//       return new Error(`missing ${propName}`)
//     }
//     if (props[propName].length < 6) {
//       return new Error(`${propName} was to short`)
//     }
//   }
// }
//
// export default App


// Video 9 Synthetic event system
// class App extends React.Component {
//   constructor () {
//     super();
//     this.state = {currentEvent: '-------'}
//     this.update = this.update.bind(this)
//   }
//
//   update(e) {
//     this.setState({currentEvent: e.type})
//   }
//
//   render () {
//     return (
//       <div>
//         <textarea
//           onKeyPress={this.update}
//           onCopy={this.update}
//           onCut={this.update}
//           onPaste={this.update}
//           onFocus={this.update}
//           onBlur={this.update}
//           cols="30" rows="10" />
//         <h1>{this.state.currentEvent}</h1>
//       </div>
//     )
//   }
// }
//
// export default App

// Video 10 Reference to specfic components
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       a: "",
//       b: ""}
//   }
//
//   update() {
//     this.setState({
//       a: this.a.refs.input.value,
//       b: this.refs.b.value
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         <Input
//           ref={ component => this.a = component}
//           update={this.update.bind(this)} />
//         {this.state.a}
//         <hr />
//           <input
//             ref='b'
//             type='text'
//             onChange={this.update.bind(this)} />
//           {this.state.b}
//       </div>
//     )
//   }
// }
//
// class Input extends React.Component {
//   render() {
//     return(
//       <div>
//         <input ref="input" type="text" onChange={this.props.update} />
//       </div>
//     )
//   }
// }
//
// export default App

// Video 11
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {val: 0}
//     this.update = this.update.bind(this)
//   }
//
//   update() {
//     this.setState({val: this.state.val + 1})
//   }
//
//   componentWillMount() {
//     console.log('componentWillMount')
//     this.setState({m: 2})
//   }
//
//   render() {
//     console.log('render')
//     return (
//       <button onClick={this.update}>
//         {this.state.val * this.state.m}
//       </button>
//     )
//   }
//
//   componentDidMount() {
//     console.log('componentDidMount')
//     this.inc = setInterval(this.update, 500)
//   }
//
//   componentWillUnmount() {
//     console.log('componentWillUnmount')
//     clearInterval(this.inc)
//   }
// }
//
// class Wrapper extends React.Component {
//   mount() {
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//
//   unmount() {
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//
//   render() {
//     return (
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>UnMount</button>
//         <div id='a'></div>
//       </div>
//     )
//   }
// }
// export default Wrapper


// Video 13 React Components updates when new Props are received
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {increasing: false}
//   }
//
//   update() {
//     ReactDOM.render(<App
//       val={this.props.val + 1}/>,
//       document.getElementById('root')
//     )
//   }
//
//   componentWillReceiveProps(nextProps) {
//     this.setState({increasing: nextProps.val > this.props.val})
//   }
//
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextProps.val % 5 === 0;
//   }
//
//   render() {
//     console.log(this.state.increasing)
//     return (
//       <button onClick={this.update.bind(this)}>
//         {this.props.val}
//       </button>
//     )
//   }
//
//   componentDidUpdate(prevProps, prevState) {
//     console.log(`prevProps: ${prevProps.val}`)
//   }
// }
//
// App.defaultProps = {val: 0}
//
// export default App

// Video 14 React Components from Arrays of Data
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {items: []}
//   }
//
//   componentWillMount(){
//     fetch( 'https://swapi.co/api/people/?format=json')
//       .then( response => response.json() )
//       .then( ({results: items}) => this.setState({items}))
//   }
//
//   filter(e) {
//     this.setState({filter: e.target.value})
//   }
//
//   render() {
//     let items = this.state.items
//     if (this.state.filter) {
//       items = items.filter( item =>
//         item.name.toLowerCase()
//         .includes(this.state.filter.toLowerCase()))
//     }
//
//     return (
//       <div>
//         <input typw="text"
//          onChange={this.filter.bind(this)}/>
//         {items.map(item =>
//           <Person key={item.name} person={item}/> )
//         }
//       </div>
//     )
//   }
// }
//
// const Person = (props) => <h4>{ props.person.name }</h4>
//
// export default App


// Video 15 Higher order components
// const HOC = (InnerComponent) => class extends React.Component {
//   constructor() {
//     super();
//     this.state = {count: 0}
//   }
//
//   update() {
//     this.setState({count: this.state.count + 1})
//   }
//
//   componentWillMount() {
//     console.log('Will mount')
//   }
//
//   render() {
//     return (
//       <InnerComponent
//         {...this.props}
//         {...this.state}
//         update={this.update.bind(this)}
//         />
//     )
//   }
// }
//
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Button>button</Button>
//         <hr/>
//         <LabelHOC>label</LabelHOC>
//       </div>
//     )
//   }
// }
//
// const Button = HOC((props) =>
//   <button onClick={props.update}>{props.children} - {props.count}</button>
// )
//
// class Label extends React.Component {
//   componentWillMount() {
//     console.log('Label Will mount')
//   }
//
//   render() {
//     return (
//       <label onMouseMove={this.props.update}>
//         {this.props.children} - {this.props.count}
//       </label>
//     )
//   }
// }
//
// const LabelHOC = HOC(Label)
//
// export default App

// video 16 Live compiler as react component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '/* Add your jsx here */',
      output: '',
      err: ''
    }
  }

  update(e) {
    let code = e.target.value;
    try {
      this.setState({
        output: window.Babel
          .transform(code, { presets: ['es2015', 'react']})
          .code,
        err: ''
      })
    } catch (err) {
      this.setState({err: err.message})
    }
  }

  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
            onChange={this.update.bind(this)}
            defaultValue={this.state.input} />
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    )
  }
}

export default App
