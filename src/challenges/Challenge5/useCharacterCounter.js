import {useState, useEffect} from 'react';

const useCharacterCounter = (defaultText = '') => {
    const [ text, setText ] = useState(defaultText);
    const [ count, setCount ] = useState(text.length);

    const onTextChange = (e) => {
        setText(e.target.value);
    }

    useEffect(() => {
        if (text) {
            setCount(text.length);
        } else {
            setCount(0);
        }
    }, [text, setCount]);

    return { count, text, onTextChange};
}

export default useCharacterCounter;