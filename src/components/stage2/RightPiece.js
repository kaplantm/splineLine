import React from 'react';
import TimelinePiece from './TimelinePiece';
import shapeNames from '../../utils/sharedConstants';

function RightPiece(props) {
    const { index, lineCount } = props;

    const uncurvedTextBelow = (
        <TimelinePiece textClassModifier="-below" {...props} />
    );
    const upperCurve = (
        <TimelinePiece shape={shapeNames.CORNER_UPPER_RIGHT} {...props} />
    );
    const lowerCurve = (
        <TimelinePiece shape={shapeNames.CORNER_LOWER_RIGHT} {...props} />
    );

    if (index === lineCount - 1) {
        return lineCount % 2 ? uncurvedTextBelow : lowerCurve;
    }
    if (index % 2) {
        return lowerCurve;
    } else {
        return upperCurve;
    }
}

export default RightPiece;
