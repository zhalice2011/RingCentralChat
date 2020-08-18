import React, { ReactElement } from 'react'
import { IMessage } from './type'


export default function MSGVideo (props: IMessage): ReactElement {
    const { url } = props

    return (
        <div>
            <video src={url} controls/>
        </div>
    )
}
