/*  Challenge Brief:
    Today’s challenge is to create a tag input field.

    By default, the input looks like a normal text input.
    When the user enters some text and then types a , the text turns into a tag.
    The user can enter as many tags as they’d like.
    The user can hit the x to remove the tag from the list.
    If there isn’t any text in the input and the user hits the delete key, then it will delete the last tag in the list.

    Source: https://store.selfteach.me/view/courses/advent-of-javascript-2024/2883525-challenge-8-tag-input-editor/9338713-challenge-8


    Additional features achieved:
    - Paste multiple tags at once
    - Add tags by pressing Enter key
    - Can pass default tags as a prop
*/

import React from 'react';
import TagInput from './TagInput';

const Challenge8 = () => {
    return (
        <TagInput defaultTags={['Merry Christmas', 'Default value']} />
    );
};

export default Challenge8;