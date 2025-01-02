/*  Challenge Brief:
    Today’s challenge is to build a resizable text area.
    As you text into the text area, it should grow to accommodate the amount of text.
    If you pass in a default value, it should resize the initial display for the default amount of content.
    There aren’t any project files for today’s challenge.

    Bonus: Convert this into reusable code. For example, if you’re using React convert this into a custom hook.

    Source: https://store.selfteach.me/view/courses/advent-of-javascript-2024/2875661-challenge-3-resizable-text-area/9312332-challenge-3
*/

import React from 'react';
import ResizingPanel from './ResizingPanel/ResizingPanel';

const Challenge4 = () => {
    const topContent = (
        <div style={{height: "100%", padding: 20, backgroundColor: "#CAE3DB"}}>
            <h2>Top Content</h2>
            <p>Some text here</p>
        </div>
    );

    const bottomLeftContent = (
        <div style={{height: "100%", padding: 20, backgroundColor: "#698662"}}>
            <h2>Bottom Left Content</h2>
            <p>Some text here</p>
        </div>
    );

    const bottomRightContent = (
        <div style={{height: "100%", padding: 20, backgroundColor: "#536A4E"}}>
            <h2>Bottom Right Content</h2>
            <p>Some text here</p>
        </div>
    );

    return (
        <div>
            <ResizingPanel
                topContent={topContent}
                bottomLeftContent={bottomLeftContent}
                bottomRightContent={bottomRightContent}
            />
        </div>
    );
};

export default Challenge4;