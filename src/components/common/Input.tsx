import React, { ReactElement } from 'react'

interface IProps {
    name?: string
    style?: React.CSSProperties
    value: string
    onChange: TSFixMe
    onPressEnter: TSFixMe
}

export default function Input (props: IProps): ReactElement {
    const { onPressEnter, ...restProps } = props
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onPressEnter(e.target.value)
        }
    }

    return (
        <input {...restProps} onKeyPress={onKeyPress}/>
    )
}
