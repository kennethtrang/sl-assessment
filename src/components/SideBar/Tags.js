import React from 'react';
import TagItem from './TagItem';

const Tags = ({ tags }) => {
  const tagsToDisplay = tags
    ? tags.map((tag) => <TagItem key={tag} name={tag} />)
    : [];

  return <section className="tags">{tagsToDisplay}</section>;
};

export default Tags;
