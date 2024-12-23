import React, { useEffect, useState } from 'react';
import DropdownArrowIcon  from './DropdownArrowIcon.svg?react';
import './index.styles.scss';

const Dropdown = ({DropdownItemDisplay, items, onSelect, searchKey, placeholderLabel, headingLabelKey, headingLabelTransformation = (text) => text}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownText, setDropdownText] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);
    const [selectedItem, setSelectedItem] = useState(null);
    const dropdownInputRef = React.createRef();
    const dropdownButtonRef = React.createRef();
    const dropdownListRef = React.createRef();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        if (dropdownOpen) {
            dropdownInputRef.current.focus();
            if (selectedItem) {
                setDropdownText(headingLabelTransformation(selectedItem[headingLabelKey]));
            }
        }
    }, [dropdownOpen]);

    const filterItems = (text) => {
        if (text === '') {
            setFilteredItems(items);
            return;
        }
        const filteredItemsBasedOnInputText = items.filter((item) => {
            return item[searchKey].toLowerCase().includes(text.toLowerCase());
        });

        setFilteredItems(filteredItemsBasedOnInputText);
    }

    const selectItem = (item) => {
        setSelectedItem(item);
        onSelect(item);
    };

    useEffect(() => {
        filterItems(dropdownText);
    }, [dropdownText]);

    useEffect(() => {
        if (selectedItem) {
            setDropdownText(headingLabelTransformation(selectedItem[headingLabelKey]));
            setDropdownOpen(false);
        }
    }, [selectedItem]);

    return (
        <div className={`dropdown ${dropdownOpen ? 'open' : ''}`}>
            {
                !dropdownOpen && !selectedItem && (
                    <span className='dropdown__header'>{placeholderLabel}</span>
                )
            }
            {
                !dropdownOpen && selectedItem && (
                    <DropdownItemDisplay movie={selectedItem} />
                )
            }
            { dropdownOpen && (
                <input
                    type="text" 
                    name="dropdownTextInput"
                    id="dropdownTextInput"
                    className='dropdown__input'
                    onChange={(e) => {
                        setDropdownText(e.target.value.trim());
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'ArrowDown') {
                            console.log(dropdownListRef.current.firstChild);
                            dropdownListRef.current.firstChild.focus();   
                        }
                    }}
                    value={dropdownText}
                    placeholder='Search for a movie...'
                    ref={dropdownInputRef}
                    autoComplete='off'
                />
            )}
            <button ref={dropdownButtonRef} type='button' className='dropdown__button' onClick={toggleDropdown}>
                <DropdownArrowIcon />
            </button>
            { dropdownOpen && (
                <ul className='dropdown__list' ref={dropdownListRef}>
                    {filteredItems.map((item) => {
                        const isSelectedClassName = (selectedItem && selectedItem[searchKey] === item[searchKey]) ? 'selected' : '';
                        return (
                            <li
                                key={item[searchKey]}
                                tabIndex={0}
                                className={`dropdown__list-item ${isSelectedClassName}`}
                                onClick={() => {selectItem(item)}}
                                onKeyDown={(e) => {
                                    switch (e.key) {
                                        case 'Enter':
                                            selectItem(item);
                                            dropdownButtonRef.current.focus();
                                            break;
                                        case 'ArrowDown':
                                            e.currentTarget.nextSibling.focus();
                                            break;
                                        case 'ArrowUp':
                                            e.currentTarget.previousSibling.focus();
                                            break;
                                        default:
                                            break;
                                    }
                                }}
                            >
                                <DropdownItemDisplay movie={item} />
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;