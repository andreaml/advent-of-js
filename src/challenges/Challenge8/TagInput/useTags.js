import React, { useEffect, useState } from 'react';

const useTags = (defaultTags = []) => {
    const [ tags, setTags ] = useState(defaultTags);
    const [ tag, setTag ] = useState('');
    const [ highlightedTags, setHighlightedTags ] = useState([]);

    const getDuplicatedTags = (tagsToCheck) => {
        return tags.filter(tagValue => {
            const duplicatedTags = tagsToCheck.filter(tagToCheck => {
                return tagValue.toLowerCase().normalize() === tagToCheck.toLowerCase().normalize();
            });
            return duplicatedTags.length > 0;
        });
    }

    const handleSetTags = (newTags) => {
        const duplicatedTags = getDuplicatedTags(newTags);
        if (duplicatedTags.length > 0) {
            setHighlightedTags(duplicatedTags);
        } else {
            setTags([...tags, ...newTags]);
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setHighlightedTags([]);
        }, 5000)
        
        return () => clearTimeout(timeout);
    }, [highlightedTags]);

    const onKeyDown = (e) => {
        switch (e.key) {
            case ',':
            case 'Enter':
                if (tag !== '') {
                    handleSetTags([tag.trim()]);
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
            handleSetTags(clipboardTags);
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
        highlightedTags,
        onTagChange,
        onPaste,
        onKeyDown,
        deleteTag
    };
};

export default useTags;