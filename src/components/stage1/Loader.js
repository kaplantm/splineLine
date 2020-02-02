import React from 'react'
import { Typography } from '@material-ui/core'
import { css } from '@emotion/core'
import { BeatLoader } from 'react-spinners'
import theme from '../../theming/theme'

const override = css`
    display: block;
    margin: 0.25em auto;
`

function Loader(props) {
    const { text = '', loading } = props
    const hiddenClass = loading ? '' : 'hidden'

    if (loading) {
        return (
            <div className={`loader ${hiddenClass}`}>
                <Typography id="how-many-lines" gutterBottom>
                    {text}
                </Typography>
                <BeatLoader
                    css={override}
                    sizeUnit={'px'}
                    size={15}
                    color={theme.palette.secondary.light}
                />
            </div>
        )
    }
    return null
}

export default Loader
