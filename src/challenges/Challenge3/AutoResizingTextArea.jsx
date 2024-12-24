
import useAutoResize from './useAutoResize';
import './index.styles.scss';


const AutoResizingTextArea = ({text, setText}) => {
    const { textValue, setTextValue, textareaRef } = useAutoResize(text);

    const handleTextChange = (e) => {
        setTextValue(e.target.value);
        setText(e.target.value);
    };

    return (
        <div>
            <textarea
                ref={textareaRef}
                className='auto-resizing-textarea'
                onChange={(e) => { handleTextChange(e)}}
                value={textValue}
                rows={2}
            >
            </textarea>
        </div>
    );
};

export default AutoResizingTextArea;