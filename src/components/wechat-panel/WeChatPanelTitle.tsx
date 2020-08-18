
import React, { ReactElement } from 'react'
import styled from 'styled-components'

import Icon from '../common/Icon'
import Text from '../common/Text'

interface IProps {
    name: string
}

const Wrapper = styled.section`
    height: 40px;
    border-bottom: 1px solid #D5D5D5;
    padding: 0 20px 0 15px;
`;

export default function WeChatPanelTitle (props: IProps): ReactElement {
    const {  name } = props

    return (
        <Wrapper>
            <div className="row-flex-center" style={{ height: '100%' }}>
                <Icon name="arrow_left" />
                <div className="row-flex-center jc-center flex1">
                    <Text>{name}</Text>
                </div>
                <Icon name="more" />
            </div>
        </Wrapper>
    )
}
