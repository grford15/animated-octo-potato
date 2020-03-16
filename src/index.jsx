import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const stories = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectId: 1,
  },
];

ReactDOM.render(
  <App stories={stories} />,
  document.getElementById('root'),
);