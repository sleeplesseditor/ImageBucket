//Import statements
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/ImageList';

//Create component
class App extends Component {
    componentWillMount() {
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
            .then(response => console.log(response));
    }
    
    render() {
        return (
            <div>
                <ImageList />
            </div>
        );
    }
};

//Render component
Meteor.startup(() => {
    ReactDOM.render(< App/>, document.querySelector('.container'));
});
