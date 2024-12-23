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

import React, { useState } from 'react';
import top100ChristmasMovies from './assets/top-100-christmas-movies.json';
import Dropdown  from './components/Dropdown';
import MovieItemDisplay from './components/MovieItemDisplay';
import './index.styles.scss';

const Challenge2 = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const selectMovie = (movie) => {
        setSelectedItem(movie);
    };

    return (
        <Dropdown
            DropdownItemDisplay={MovieItemDisplay}
            items={top100ChristmasMovies}
            onSelect={selectMovie}
            searchKey='Title'
            headingLabelKey='Title'
            headingLabelTransformation={(text) => text.substring(text.indexOf('.') + 1).trim()}
            placeholderLabel='Your Favorite Holiday Movie'
        />
    );
};

export default Challenge2;