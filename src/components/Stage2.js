import React from 'react'
import './Stage2.css'
import TimeLine from './stage2/TimeLine'

function Stage2(props) {
    const { lineCount = {}, lineColor = {}, appMode = {} } = props

    return (
        <React.Fragment>
            <div className="flex-container margin-auto">
                <TimeLine
                    lineCount={lineCount.value}
                    lineColor={lineColor.value}
                    appMode={appMode}
                />
            </div>
        </React.Fragment>
    )
}

export default Stage2
