
import { createElement, Component, render } from './React-rewheel.js';

class MyComponent extends Component {   //?
    render() {
        return <div>
            <h1>my component</h1>
            {this.children}
        </div>
    }
}


 
render(<MyComponent id="a" class="c">
    <div>aas</div>
    <div></div>
    <div></div>
    </MyComponent>, document.body)