//Import statements
import React from 'react';
import ReactDOM from 'react-dom';

//Create component
const App = () => {
    return (
        <div>
            React App #2
        </div>
    );
};

//Render component
Meteor.startup(() => {
    ReactDOM.render(< App/>, document.querySelector('.container'));
});
