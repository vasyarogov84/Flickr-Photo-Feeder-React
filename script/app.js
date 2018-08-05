import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



class FlickrPhoto extends Component {
    render() {
        return (
            <div>
                <div className="HelloWorld">Hello World!!!</div>
            </div>
        );
    }
}


ReactDOM.render(<FlickrPhoto />, document.getElementById('app'));
