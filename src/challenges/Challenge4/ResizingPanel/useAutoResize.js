import {useState, useEffect, createRef} from 'react';

const useAutoResize = () => {
    const [ isResizing, setIsResizing ] = useState(false);
    const [dividerXPosition, setDividerXPosition] = useState(0);
    const [dividerYPosition, setDividerYPosition] = useState(0);
    const [leftPanelWidth, setLeftPanelWidth] = useState(0);
    const [bottomPanelHeight, setBottomPanelHeight] = useState(0);
    const parentRef = createRef();
    const leftPanelRef = createRef();
    const bottomPanelRef = createRef();
    const MIN_PANEL_SIZE = 100;
    

    useEffect(() => {
        if (leftPanelRef.current) {
            if (!leftPanelWidth) {
                setLeftPanelWidth(leftPanelRef.current?.clientWidth);
                return;
            }
            leftPanelRef.current.style.width = `${leftPanelWidth}px`;
        }
    }, [leftPanelWidth, leftPanelRef]);

    useEffect(() => {
        if (bottomPanelRef.current) {
            if (!bottomPanelHeight) {
                setBottomPanelHeight(bottomPanelRef.current?.clientHeight);
                return;
            }
            bottomPanelRef.current.style.height = `${bottomPanelHeight}px`;
        }
    }, [bottomPanelHeight, bottomPanelRef]);


    const onMouseDownXDivider = (e) => {
        setDividerXPosition(e.screenX);
        setIsResizing(true);
    }

    const onMouseDownYDivider = (e) => {
        setDividerYPosition(e.screenY);
        setIsResizing(true);
    }

    const onResizingX = (e) => {
        if (isResizing && leftPanelWidth && dividerXPosition) {
            const parentWidth = parentRef.current.clientWidth;
            let newWidth = leftPanelWidth + e.screenX - dividerXPosition;
            if (newWidth < MIN_PANEL_SIZE) {
                newWidth = MIN_PANEL_SIZE;
            } else if (newWidth > parentWidth - MIN_PANEL_SIZE) {
                newWidth = parentWidth - MIN_PANEL_SIZE;
            }
            setDividerXPosition(e.screenX);
            setLeftPanelWidth(newWidth);
        }
    }

    const onResizingY = (e) => {
        if (isResizing && bottomPanelHeight && dividerYPosition) {
            const parentHeight = parentRef.current.clientHeight;
            let newHeight = bottomPanelHeight - e.screenY + dividerYPosition;
            if (newHeight < MIN_PANEL_SIZE) {
                newHeight = MIN_PANEL_SIZE;
            } else if (newHeight > parentHeight - MIN_PANEL_SIZE) {
                newHeight = parentHeight - MIN_PANEL_SIZE;
            }
            setDividerYPosition(e.screenY);
            setBottomPanelHeight(newHeight);
        }
    }

    const onResizing = (e) => {
        onResizingX(e);
        onResizingY(e);
    }

    const onResizingFinished = () => {
        if (isResizing) {
            setIsResizing(false);
            setDividerXPosition(0);
            setDividerYPosition(0);
        }
    }

    return {
        leftPanelRef,
        bottomPanelRef,
        parentRef,
        onResizingFinished,
        onResizing,
        onMouseDownXDivider,
        onMouseDownYDivider
    };
}

export default useAutoResize;