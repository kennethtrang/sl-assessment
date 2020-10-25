import React from 'react';

const TagItem = ({ name }) => {
  return (
    <button type="button" className="tag-item">
      {name}
    </button>
  );
};

export default TagItem;
