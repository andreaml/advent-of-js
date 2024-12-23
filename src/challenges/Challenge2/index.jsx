/*  Challenge Brief:
    Create a custom dropdown menu.
    When you click on input, show a dropdown that contains the movie thumbnail, title, and the year the movie was released.
    When the input is expanded, you should be able to search for the movie you want. Your input should limit the list of movies displays.
    When hovering over a specific movie, the background changes to blue.  

    Depending on your skill level, you can make this challenge as easy or as difficult as you’d like.
    Level 1: Style the custom dropdown and hard code in the list of movies
    Level 2: Load all 100 movies dynamically, from the provided JSON file
    Level 3: Don’t forget accessibility! Use arrow keys to select a specific movie.

    Source: https://store.selfteach.me/view/courses/advent-of-javascript-2024/2874422-challenge-2-custom-combobox-dropdown/9308974-challenge-2
*/

import React, { useEffect, useState } from 'react';
import top100ChristmasMovies from './assets/top-100-christmas-movies.json';
import  DropdownArrowIcon  from './assets/DropdownArrowIcon.svg?react';
import './index.styles.scss';

const MovieItemDisplay = ({ movie }) => {
    return (
        <div className= "dropdown__movie-display">
            <img className='dropdown__movie-display__img' src={movie.Image} alt={movie['Image Alt']} />
            <div className='dropdown__movie-display__title'>
                <span className='dropdown__movie-display__title-heading'>{movie.Title.substring(movie.Title.indexOf('.') + 1).trim()}</span>
                <span className='dropdown__movie-display__title-subtitle'>{movie.Year}</span>
            </div>
        </div>
    );
};

const Challenge2 = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownText, setDropdownText] = useState('');
    const [filteredMovies, setFilteredMovies] = useState(top100ChristmasMovies);
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
                setDropdownText(selectedItem.Title.substring(selectedItem.Title.indexOf('.') + 1).trim());
            }
        }
    }, [dropdownOpen]);

    const filterMovies = (text) => {
        if (text === '') {
            setFilteredMovies(top100ChristmasMovies);
            return;
        }
        const filteredMoviesBasedOnInputText = top100ChristmasMovies.filter((movie) => {
            return movie.Title.toLowerCase().includes(text.toLowerCase());
        });

        setFilteredMovies(filteredMoviesBasedOnInputText);
    }

    const selectMovie = (movie) => {
        setSelectedItem(movie);
    };

    useEffect(() => {
        filterMovies(dropdownText);
    }, [dropdownText]);

    useEffect(() => {
        if (selectedItem) {
            setDropdownText(selectedItem.Title.substring(selectedItem.Title.indexOf('.') + 1).trim());
            setDropdownOpen(false);
        }
    }, [selectedItem]);

    return (
        <div className={`dropdown ${dropdownOpen ? 'open' : ''}`}>
            {
                !dropdownOpen && !selectedItem && (
                    <span className='dropdown__header'>Your Favorite Holiday Movie</span>
                )
            }
            {
                !dropdownOpen && selectedItem && (
                    <MovieItemDisplay movie={selectedItem} />
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
                    {filteredMovies.map((movie) => {
                        const isSelectedClassName = (selectedItem && selectedItem.Title === movie.Title) ? 'selected' : '';
                        return (
                            <li
                                key={movie.Title}
                                tabIndex={0}
                                className={`dropdown__list-item ${isSelectedClassName}`}
                                onClick={() => {selectMovie(movie)}}
                                
                                onKeyDown={(e) => {
                                    switch (e.key) {
                                        case 'Enter':
                                            selectMovie(movie);
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
                                <MovieItemDisplay movie={movie} />
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    );
};

export default Challenge2;