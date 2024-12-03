/*  Challenge Brief:
    Create a password input field. Clicking on the eyeball will toggle the password visibility on and off.
    Depending on your skill level, you can make this challenge as easy or as difficult as you’d like.

    Level 1: Toggle the password’s visibility

    Level 2: Animate the input’s background color when you toggle the password’s visibility.

    Level 3: Animate the eyeball opening and closing.

    Source: https://store.selfteach.me/view/courses/advent-of-javascript-2024/2872740-challenge-1-show-hide-password/9303343-challenge-1
*/

import React, { useState } from 'react';
import  LockIcon  from './assets/LockIcon.svg?react';
import  EyeIcon  from './assets/EyeIcon.svg?react';
import './index.styles.scss';

const Challenge1 = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className={`password-input ${passwordVisible ? 'visible' : 'hidden'}`}>
            <span className='password-input__prepend'>
                <LockIcon/>
            </span>
            <input className='password-input__input' type={passwordVisible ? "text" : "password"} />
            <button className='password-input__button' onClick={togglePasswordVisibility}>
                <EyeIcon /> 
            </button>
        </div>
    );
};

export default Challenge1;