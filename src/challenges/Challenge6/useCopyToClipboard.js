import React, { useEffect, useState } from 'react';

const useCopyToClipboard = (defaultText) => {
    const [isCopied, setIsCopied] = useState(false);
    const [textValue, setTextValue] = useState(defaultText);
    const [tooltipText, setTooltipText] = useState('Copy');
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const handleCopy = () => {
        const copyToClipboard = navigator.clipboard.writeText(textValue);
        copyToClipboard.then(() => {
            setIsCopied(true);
            setTooltipText('Copied!');
        }).catch((error) => {
            console.error('Failed to copy to clipboard:', error);
        });
    };

    const handleTextChange = (e) => {
        setTextValue(e.target.value);
    };

    const toggleTooltip = (e) => {
        if (isCopied) return;
        setTooltipVisible(!tooltipVisible);
    };

    useEffect(() => {
        let timeout;
        if (isCopied) {
            timeout = setTimeout(() => {
                setTooltipText('Copy');
                setIsCopied(false);
                setTooltipVisible(false);
            }, 5000);
        }
        return () => clearTimeout(timeout);
    }, [isCopied]);

    return {
        isCopied,
        textValue,
        tooltipText,
        tooltipVisible,
        handleCopy,
        handleTextChange,
        toggleTooltip
    };
};

export default useCopyToClipboard;