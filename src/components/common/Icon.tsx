import React, { ReactElement } from 'react'

interface IProps {
    name?: string
    style?: React.CSSProperties
}

export default function Icon (props: IProps): ReactElement {
    const {  name, style } = props

    return (
        <i className={`iconfont fg-${name}`} style={style}></i>
    )
}
