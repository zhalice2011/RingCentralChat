import React, { ReactElement } from 'react'
import { IMessage } from './type'


export default function MSGImage (props: IMessage): ReactElement {
    const { url } = props

    return (
        <div>
            <img style={{ width: '100%' }} src={url}/>
        </div>
    )
}
