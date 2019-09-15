import React from 'react';
import { IconButton } from '@material-ui/core';
import { Done, Image, Edit } from '@material-ui/icons/';
import shapeNames, { Modes } from '../../utils/sharedConstants';

function TimelinePieceButtons({ shape, mode, hoverText, onModeChange }) {
    if (hoverText.value) {
        return <div className="transparent">{hoverText.value}</div>;
    }
    if (mode.value === Modes.EDIT_MODE) {
        return (
            <div className="hoverForFullOpacity animateColorChange">
                <IconButton onMouseUp={() => onModeChange(Modes.VIEW_MODE)}>
                    <Done />
                </IconButton>
                {shape === shapeNames.SQUARE && (
                    <IconButton onMouseUp={() => onModeChange(Modes.IMAGE_MODE)}>
                        <Image />
                    </IconButton>
                )}
            </div>
        );
    } else if (mode.value === Modes.IMAGE_MODE) {
        return (
            <IconButton onMouseUp={() => onModeChange(Modes.EDIT_MODE)}>
                <Done />
            </IconButton>
        );
    } else {
        return (
            <IconButton onMouseUp={() => onModeChange(Modes.EDIT_MODE)}>
                <Edit />
            </IconButton>
        );
    }
}

export default TimelinePieceButtons;
