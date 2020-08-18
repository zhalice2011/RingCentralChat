import React, { ReactElement } from 'react'

interface IProps {
    className?: string
    style?: React.CSSProperties
    children?: ReactElement | any
}

export default function Text (props: IProps): ReactElement {
    const {  className, style, children } = props
    

    return (
        <div className={className} style={style}>{children}</div>
    )
}
