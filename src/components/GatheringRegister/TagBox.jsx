/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { TagBoxBlock } from './TagBox.style';

function TagBox() {
  const [inputValue, setInputValue] = useState('');
  const [tagList, setTagList] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tagList.includes(inputValue)) return;

    setTagList([...tagList, inputValue]);
    setInputValue('');
  };

  const handleRemove = (value) => {
    const newTagList = tagList.filter((tag) => tag !== value);
    setTagList(newTagList);
  };

  return (
    <TagBoxBlock>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          disabled={tagList.length === 3}
          value={inputValue}
          onChange={handleChange}
        />
        <div className="tag">
          {tagList.map((tag) => (
            <span key={tag} onClick={() => handleRemove(tag)}>
              #{tag}
            </span>
          ))}
        </div>
      </form>
    </TagBoxBlock>
  );
}

export default TagBox;
