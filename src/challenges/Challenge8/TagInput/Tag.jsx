import  CloseIcon  from './assets/CloseIcon.svg?react';

const Tag = ({tagIndex, tagValue, deleteTag}) => {
    return (
        <div className="tag">
            {tagValue}
            <button onClick={() => deleteTag(tagIndex)}><CloseIcon/></button>
        </div>
    );
};

export default Tag;