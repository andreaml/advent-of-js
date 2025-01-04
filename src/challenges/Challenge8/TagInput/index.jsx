import React from 'react';
import useTags from './useTags';
import Tag from './Tag';
import './index.styles.scss';

const TagInput = ({defaultTags}) => {
    const { tags, tag, onTagChange, onKeyDown, onPaste, deleteTag } = useTags(defaultTags);
    const randomId = Math.random().toString(36).substring(7);
    const tagInputId = `tagInput-${randomId}`;

    return (
        <div className='tag-input__main-container'>
            <label forhtml={tagInputId} className='tag-input__label'>Tags</label>
            <div className='tag-input__inner-container'>
                {tags.map((tagValue, tagIndex) => (
                    <Tag
                        key={`tagIndex-${tagIndex}`}
                        tagIndex={tagIndex}
                        tagValue={tagValue}
                        deleteTag={deleteTag}
                    />
                ))}
                <input
                    id={tagInputId}
                    className='tag-input__input'
                    type="text"
                    value={tag}
                    placeholder='Create a tag...'
                    onKeyDown={onKeyDown}
                    onChange={onTagChange}
                    onPaste={onPaste}
                />
            </div>
        </div>
    );
};

export default TagInput;