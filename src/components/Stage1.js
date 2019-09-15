import React from 'react';
import './Stage1.css';
import SelectorSet from './stage1/SelectorSet';
import theme from '../theming/theme';

function Stage1(props) {
    const { lineCount, lineColor, appMode } = props;

    const onSelectedLineValueChange = value => {
        window.localStorage.setItem('lineCount', value);
        lineCount.updater(value);
    };
    const onSelectedLineColorValueChange = value => {
        window.localStorage.setItem('lineColor', value);
        lineColor.updater(value);
    };
    const onSelectedAppModeChange = value => {
        window.localStorage.setItem('appMode', value);
        appMode.updater(value);
    };
    const sharedSelectStyle = {paddingLeft: '1em',
        paddingRight: '1em'};

    return (
        <React.Fragment>
            <div className="timelineOptionsContainer">
                <SelectorSet
                    gradient
                    label="MODE"
                    color={theme.palette.neutral.main}
                    options={[
                        { label: 'View', value: 'view' }, { label: 'Edit', value: 'edit' }
                    ]}
                    currentValue={appMode.value}
                    onValueChange={onSelectedAppModeChange}
                />
                <SelectorSet
                    label="LINES"
                    gradient
                    color={theme.palette.primary.main}
                    options={[
                        { label: 1, value: 1 }, { label: 2, value: 2 }, { label: 3, value: 3 }, { label: 4, value: 4 }, { label: 5, value: 5 }
                    ]}
                    currentValue={lineCount.value}
                    onValueChange={onSelectedLineValueChange}
                />
                <SelectorSet
                    label="COLOR"
                    spacing={'10px'}
                    options={[
                        {label: 'Red',
                            value: theme.palette.tertiary.main,
                            style: {backgroundColor: theme.palette.tertiary.main,
                                ...sharedSelectStyle,
                                marginLeft: 0}}, {label: 'Blue',
                            value: theme.palette.primary.main,
                            style: {backgroundColor: theme.palette.primary.main,
                                ...sharedSelectStyle}}, {label: 'Green',
                            value: theme.palette.secondary.main,
                            style: {backgroundColor: theme.palette.secondary.main,
                                ...sharedSelectStyle}}
                    ]}
                    currentValue={lineColor.value}
                    onValueChange={onSelectedLineColorValueChange}
                />
            </div>
        </React.Fragment>
    );
}

export default Stage1;
