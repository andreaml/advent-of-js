
import useAutoResize from './useAutoResize';
import './index.styles.scss';

const ResizingPanel = ({ topContent, bottomLeftContent, bottomRightContent }) => {
    const {
        parentRef,
        bottomPanelRef,
        leftPanelRef,
        onResizingFinished,
        onResizing,
        onMouseDownXDivider,
        onMouseDownYDivider,
    } = useAutoResize();

        return (
        <div
            ref={parentRef}
            onMouseUpCapture={onResizingFinished}
            onMouseLeave={onResizingFinished}
            onMouseMove={onResizing}
            className='resizing-panel'
        >
            <div className='resizing-panel__top'>{topContent}</div>

            <div className='divider-y' onMouseDown={onMouseDownYDivider}></div>

            <div ref={bottomPanelRef} className='resizing-panel__bottom'>
                <div ref={leftPanelRef} className='resizing-panel__left'>
                    {bottomLeftContent}
                </div>

                <div className='divider-x' onMouseDown={onMouseDownXDivider}></div>

                <div className='resizing-panel__right'>{bottomRightContent}</div>
            </div>
        </div>
    );
};

export default ResizingPanel;