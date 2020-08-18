import React, { ReactElement, useState, useRef } from 'react'
import styled from 'styled-components'

import WeChatPanelContent from './WeChatPanelContent'
import WeChatPanelFooter from './WeChatPanelFooter'
import WeChatPanelTitle from './WeChatPanelTitle'

import mockData from '../../mock/mockData'

interface IProps {

}

const Wrapper = styled.section`
    height: 667px;
    width: 375px;
    margin: 20px auto;
    background-color: #EDEDED;
`;

export default function WeChatPanel (props: IProps): ReactElement {
    const {  } = props
    const [ messages, setMessages ] = useState(mockData)
    const contentRef = useRef(null)

    const onAddMessage = (msg) => {
        setMessages(messages.concat([ msg ]))
        setTimeout(() => {
            contentRef.current.scrollTop = contentRef.current.scrollHeight
        })
    }

    return (
        <Wrapper>
            <div className="column-flex" style={{ height: '100%' }}>
                <WeChatPanelTitle name="Claire"/>
                <div ref={contentRef} className="flex1" style={{ padding: '5px 10px', overflowY: 'auto' }}>
                    <WeChatPanelContent messages={messages}/>
                </div>
                <WeChatPanelFooter onAddMessage={onAddMessage} />
            </div>
        </Wrapper>
    )
}
