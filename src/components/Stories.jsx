import React from 'react';
import './Stories.css';

import Story from './Story';

const Stories = ({ stories }) => (
  <div className="stories">
    <div className="stories-header">
      <span>Title</span>
      <span>Author</span>
      <span>Number of Comments</span>
      <span>Points</span>
    </div>
    {(stories || []).map(story => (
      <Story key={story.objectId} story={story} />
    ))}
  </div>
);

export default Stories;
