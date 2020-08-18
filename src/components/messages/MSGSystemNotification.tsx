import React, { ReactElement } from 'react'
import { IMessage } from './type'


export default function MSGSystemNotification (props: IMessage): ReactElement {
    const { content } = props

    return (
        <div className="flex1">
            {content}
        </div>
    )
}
