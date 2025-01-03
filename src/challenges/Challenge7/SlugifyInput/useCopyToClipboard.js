import React, { useEffect, useState } from 'react';

const useCopyToClipboard = (defaultText) => {
    const [textValue, setTextValue] = useState(defaultText);
    const [slug, setSlug] = useState('/');


    const handleTextChange = (e) => {
        setTextValue(e.target.value);
    };


    useEffect(() => {
        const newSlug = '/' +
            textValue?.toLowerCase()
            .replace(/&/g, 'and') // Replace & with 'and'
            .replace(/[^a-z0-9]/g, '-') // Replace all non-alphanumeric characters with a hyphen
            .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
            .replace(/-{1}$/g, ''); // Remove trailing hyphens
        setSlug(newSlug);
    }, [textValue]);

    return {
        textValue,
        slug,
        handleTextChange,
    };
};

export default useCopyToClipboard;