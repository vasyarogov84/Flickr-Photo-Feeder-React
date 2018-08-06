import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



class FlickrPhoto extends Component {
    state = {
        data: []
    };

    getPhotos = (e) => {
        e.preventDefault();
        let searchTerm = e.target.elements.input.value;
        let flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

        let flickrOptions = {
            tags: searchTerm,
            format: "json"
        };
        function displayPhotos(data) {
            console.log(data);
        }

        $.getJSON(flickerAPI, flickrOptions, displayPhotos);
      
    }
    render() {
        let style = {
            height: 20
        };
        return (
            <div>
                <div style={style}></div>
                <div>
                    <div className="title">
                        <h2>Flickr Photo Feeder</h2>
                        <p>Choose which kind of photos you'd like to return photos of...</p>
                    </div>
                    <div className="inputFieldDiv">
                        <form onSubmit={this.getPhotos}>
                            <p>Type a search term</p>
                            <input type="text" name="input" />
                            <button>Search</button>
                        </form>
                    </div>
                    <div className="photoFeeder">{this.state.data.length !== 0 && this.state.data.map((el) => {
                        return el;
                    })}</div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<FlickrPhoto />, document.getElementById('app'));
