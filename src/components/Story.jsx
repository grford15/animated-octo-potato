import React from 'react';
import './Story.css';

const Story = ({ story, onArchive }) => {
  const {
    title,
    url,
    author,
    num_comments,
    points,
    objectId,
  } = story;

  return (
    <div className="story">
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
      <span>
        <button
          type="button"
          className="button-inline"
          onClick={() => onArchive(objectId)}
        >
          Archive
        </button>
      </span>
    </div>
  );
};

export default Story;
