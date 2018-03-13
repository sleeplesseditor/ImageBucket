//Import statements
import React from 'react';
import ReactDOM from 'react-dom';

import ImageList from './components/ImageList';

//Create component
const App = () => {
    return (
        <div>
            <ImageList />
        </div>
    );
};

//Render component
Meteor.startup(() => {
    ReactDOM.render(< App/>, document.querySelector('.container'));
});
