import {useState, useEffect, createRef} from 'react';

const useAutoResize = (initialValue) => {
    const [textValue, setTextValue] = useState(initialValue);
    const textareaRef = createRef();

    useEffect(() => {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }, [textValue]);

    return { textValue, setTextValue, textareaRef };
}

export default useAutoResize;