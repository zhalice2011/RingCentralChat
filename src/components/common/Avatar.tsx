import React, { ReactElement } from 'react'
import { IMessage } from '../messages/type'
import styled from 'styled-components'

const Wrapper = styled.div`

`;

export default function Avatar (props: IMessage): ReactElement {
    const { author } = props
    const bgStyle = author.thumbnail ? {} :  { background: '#fff' }

    return (
        <Wrapper>
            <div className="row-flex-center jc-center" style={{ height: 50, width: 50, borderRadius: '5px', ...bgStyle }}>
                { author.thumbnail ? <img src={author.thumbnail}/> : author.name.substring(0, 1) }
            </div>
        </Wrapper>
    )
}
