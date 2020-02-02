import React from 'react'
import TimelinePiece from './TimelinePiece'
import {
    mapNumericValueToRange,
    getColorCustomOpacityFromHSLA,
} from '../../utils/generalUtils'
import LeftPiece from './LeftPiece'
import RightPiece from './RightPiece'

function TimeLine(props) {
    const { lineCount, lineColor, appMode } = props

    const lines = []

    const cellsPerLine = 5
    const totalCells = lineCount * cellsPerLine

    for (let i = 0; i < lineCount; i++) {
        const cells = []
        for (let j = 0; j < cellsPerLine; j++) {
            const cellNum =
                i % 2
                    ? i * cellsPerLine + (cellsPerLine - j)
                    : i * cellsPerLine + j + 1

            let opacity = cellNum / totalCells
            opacity = mapNumericValueToRange(opacity, 0, 1, 0.3, 1)
            const color = getColorCustomOpacityFromHSLA(lineColor, opacity)

            const pieceProps = {
                index: i,
                lineCount,
                cellId: cellNum,
                opacity,
                color,
                appMode,
                innerTextBorderColor: lineColor,
            }

            let element = <TimelinePiece {...pieceProps} />

            if (j === 0) {
                element = <LeftPiece {...pieceProps} />
            } else if (j === 4) {
                element = <RightPiece {...pieceProps} />
            }
            cells.push(
                <React.Fragment key={`TIMELINE_CELL_${i + j}`}>
                    {element}
                </React.Fragment>
            )
        }
        lines.push(
            <React.Fragment key={`TIMELINE_CENTER_${i}`}>
                <div className="flex-container">{cells}</div>
            </React.Fragment>
        )
    }
    return <div className="timeLineCenter">{lines}</div>
}

export default TimeLine
