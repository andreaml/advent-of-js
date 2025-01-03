/*  Challenge Brief:
    Today’s challenge is to create a copy to clipboard button.

    The default state of the button includes an input field with a copy to clipboard button.
    When the user hovers over the copy to clipboard button, a tooltip appears that says “Copy”.
    The user can change the text inside the text input.
    If the user clicks on the button, the text inside the text input is copied to the user’s clipboard.
    The text in the tooltip changes to “Copied.”
    The clipboard icon changes to a check.
    After 5 seconds, the tooltip text and the icon revert back to their original state.

    Bonus
    Convert this code into a reusable function that can be taken from one project to the next. For example, if you’re using React, create a custom hook.

    Source: https://store.selfteach.me/view/courses/advent-of-javascript-2024/2881090-challenge-6-copy-to-clipboard/9335565-challenge-6
*/

import React from 'react';
import useCopyToClipboard from './useCopyToClipboard';
import  CheckIcon  from './assets/CheckIcon.svg?react';
import  ClipboardIcon  from './assets/ClipboardIcon.svg?react';
import './index.styles.scss';

const Challenge6 = () => {
    const {
        isCopied,
        textValue,
        tooltipText,
        tooltipVisible,
        handleCopy,
        handleTextChange,
        toggleTooltip
    } = useCopyToClipboard('Hello, World!');

    return (
        <div className={`copy-to-clipboard-input ${isCopied ? 'copied' : ''}`}>
            <input className='copy-to-clipboard-input__input' type="text" disabled={isCopied} value={textValue} onChange={handleTextChange} />
            <button
                className='copy-to-clipboard-input__button'
                onClick={handleCopy}
                disabled={isCopied}
                onMouseEnter={toggleTooltip}
                onMouseLeave={toggleTooltip}
            >
                {tooltipVisible && <span className='copy-to-clipboard-input__tooltip'>{tooltipText}</span>}
                {isCopied ? <CheckIcon /> : <ClipboardIcon /> }
            </button>
        </div>
    );
};

export default Challenge6;