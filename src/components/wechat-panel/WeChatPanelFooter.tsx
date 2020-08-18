
import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'

import Icon from '../common/Icon'
import Text from '../common/Text'
import Input from '../common/Input'
import { generateTextMessage } from '../../constants/message'

interface IProps {
    onAddMessage: TSFixMe
}

const Wrapper = styled.section`
    height: 40px;
    border-top: 1px solid #ddd;
    padding: 0 20px 0 15px;
    background: #F6F6F6;
`;

export default function WeChatPanelFooter (props: IProps): ReactElement {
    const { onAddMessage } = props
    const [ content, setContent] = useState('')
    const onChange = (e) => {
        setContent(e.target.value)
    }
    const onPressEnter = (value) => {
        onAddMessage(generateTextMessage(value))
        setContent('')
    }

    return (
        <Wrapper>
            <div className="row-flex-center" style={{ height: '100%' }}>
                <Icon name="run_task" />
                <div className="row-flex-center jc-center flex1" style={{ margin: '0 10px' }}>
                    <Input value={content} style={{ width: '100%' }} onChange={onChange} onPressEnter={onPressEnter} />
                </div>
                <Icon name="member" style={{ marginRight: 10 }} />
                <Icon name="add_item" />
            </div>
        </Wrapper>
    )
}
