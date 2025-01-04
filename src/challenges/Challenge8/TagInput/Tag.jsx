import  CloseIcon  from './assets/CloseIcon.svg?react';

const Tag = ({tagIndex, tagValue, highlighted, deleteTag}) => {
    return (
        <div className={`tag ${highlighted ? 'highlighted' : ''}`}>
            {tagValue}
            <button onClick={() => deleteTag(tagIndex)}><CloseIcon/></button>
        </div>
    );
};

export default Tag;