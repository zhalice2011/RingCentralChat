import React, { ReactElement } from 'react'
import { IMessage } from '../messages/type'
import MSGContainer from '../messages/MSGContainer'
import { getTargetMsgClass } from '../messages/index'

interface IProps {
    messages: Array<IMessage>
}

export default function WeChatPanelContent (props: IProps): ReactElement {
    const { messages } = props

    return (
        <>
            {messages.map(message => {
                return <MSGContainer key={`${message.id}`} {...message} />
            })}
        </>
    )
}
