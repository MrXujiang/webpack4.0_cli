import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import './styles/app.css'
import './styles/test.less'

console.log($('#root').html('hello world'));

class App extends Component {
    render() {
        return <div>react frame content.</div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// let name = 'xuxi';
// let say = (name) => {
//     alert(name)
// };
// // say(name);

