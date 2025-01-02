/*  Challenge Brief:
    Today’s challenge is build a character counter.
    As the user types into the text area, the character count changes.

    Source: https://store.selfteach.me/view/courses/advent-of-javascript-2024/2880951-challenge-5-character-counter/9330722-challenge-5
*/

import React from 'react';
import useCharacterCounter from './useCharacterCounter';
import './index.styles.scss';

const Challenge5 = () => {
    const { text, count, onTextChange } = useCharacterCounter('This count should be 23');

    return (
        <div>
            <textarea className='textarea' value={text} onChange={onTextChange}></textarea>
            <p className='textarea__count'>Count: {count}</p>
        </div>
    );
};

export default Challenge5;