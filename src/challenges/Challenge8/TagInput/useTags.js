import React, { useState } from 'react';

const useTags = (defaultTags = []) => {
    const [ tags, setTags ] = useState(defaultTags);
    const [ tag, setTag ] = useState('');

    const onKeyDown = (e) => {
        switch (e.key) {
            case ',':
            case 'Enter':
                if (tag !== '') {
                    setTags([...tags, tag]);
                    setTag('');
                }
                e.preventDefault();
                break;
            case 'Backspace':
                if (tag === '') {
                    deleteTag(tags.length - 1);
                }
                break;
            default:
                break;
        }
    };

    const onPaste = (e) => {
        const pasteData = e.clipboardData.getData('text');
        if (pasteData.includes(',')) {
            const clipboardTags = pasteData.split(',').map(tag => tag.trim());
            setTags([...tags, ...clipboardTags]);
            e.preventDefault();
        }
    }

    const onTagChange = (e) => {
        setTag(e.target.value);
    };

    const deleteTag = (tagIndex) => {
        setTags(tags.filter((_, index) => index !== tagIndex));
    };

    return {
        tags,
        tag,
        onTagChange,
        onPaste,
        onKeyDown,
        deleteTag
    };
};

export default useTags;