import React from 'react';
import useCopyToClipboard from './useCopyToClipboard';
import './index.styles.scss';

const SlugifyInput = ({defaultText}) => {
    const {
        textValue,
        slug,
        handleTextChange,
    } = useCopyToClipboard(defaultText);
    const randomId = Math.random().toString(36).substring(7);
    const slugifyInputId = `slugifyInput-${randomId}`;

    return (
        <div className='slugify-container'>
            <div className='slugify-input'>
                <label forhtml={slugifyInputId} className='slugify-input__label'>Title</label>
                <input
                    id={slugifyInputId}
                    className='slugify-input__input'
                    type="text"
                    value={textValue}
                    placeholder='Type a title...'
                    onChange={handleTextChange}
                />
            </div>
            <p className='slugify-input__preview'>{slug}</p>
        </div>
    );
};

export default SlugifyInput;