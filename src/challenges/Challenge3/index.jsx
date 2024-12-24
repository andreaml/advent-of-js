/*  Challenge Brief:
    Today’s challenge is to build a resizable text area.
    As you text into the text area, it should grow to accommodate the amount of text.
    If you pass in a default value, it should resize the initial display for the default amount of content.
    There aren’t any project files for today’s challenge.

    Bonus: Convert this into reusable code. For example, if you’re using React convert this into a custom hook.

    Source: https://store.selfteach.me/view/courses/advent-of-javascript-2024/2875661-challenge-3-resizable-text-area/9312332-challenge-3
*/

import React from 'react';
import AutoResizingTextArea from './AutoResizingTextArea';

const Challenge3 = () => {

    const [text, setText] = React.useState('This is a default value');
    const [longText, setLongText] = React.useState('This is a long default value Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, fermentum nunc nec, tincidunt nunc. Nullam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, fermentum nunc nec, tincidunt nunc. Nullam Lorem ipsum dolor sit amet.');

    return (
        <div>
            <AutoResizingTextArea text={text} setText={setText}/>
            <AutoResizingTextArea text={longText} setText={setLongText}/>
        </div>
    );
};

export default Challenge3;