/*  Challenge Brief:
    Today’s challenge is to slugify the title.

    On the frontend, there’s a title input field with a corresponding label.
    When the user types a title into the input field, a preview of its corresponding slug is displayed below the input

    Source: https://store.selfteach.me/view/courses/advent-of-javascript-2024/2882513-challenge-7-slugify-input/9335605-challenge-7
*/

import React from 'react';
import SlugifyInput from './SlugifyInput/index copy';

const Challenge7 = () => {
    return (
        <SlugifyInput defaultText="Have a Merry Christmas & Happy New Year 2025!!" />
    );
};

export default Challenge7;