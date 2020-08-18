import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { getTargetMsgClass, getTargetWrapper, getTargetWrapperCls } from '../messages/index'
import { ROLE } from '../../constants/message'
import { IMessage } from './type'
import Avatar from '../common/Avatar'


export default function MSGContainer (message: IMessage): ReactElement {
    const TargetMsgClass = getTargetMsgClass(message)
    const TargetWrapper = getTargetWrapper(message)
    const { role } = message
    const cls = getTargetWrapperCls(message)
    return (
        <div className={`row-flex-baseline ${cls}`} style={{ marginBottom: 10 }}>
            {role === ROLE.RECEIVER && <Avatar {...message}/>}
            <TargetWrapper>
                <TargetMsgClass {...message} />
            </TargetWrapper>
            {role === ROLE.SENDER && <Avatar {...message}/>}
        </div>
    )
}



