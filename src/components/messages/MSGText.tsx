import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { IMessage } from './type'


const Wrapper = styled.section`
`;

function isUrl(URL) {
    var str = URL;
    //判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
    //下面的代码中应用了转义字符"\"输出一个字符"/"
    var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    var objExp = new RegExp(Expression);
    if (objExp.test(str) == true) {
        return true;
    } else {
        return false;
    }
}

const reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g

export default function MSGText (props: IMessage): ReactElement {
    const { content } = props
    if (!content) return null
    console.log("content", content)
    const a = content.replace(reg, "@$@$1$2@$@")
    console.log("content", a)
    const array = a.split('@$@')
    console.log(array)
    return (
        <Wrapper>
            {array.map((v, index) => {
                if (isUrl(v)) return <a href={`${v}`} style={{ margin: '0 3px', color: '#00A2FF', cursor: 'pointer' }} key={index}>{v}</a>
                return <span key={index}>{v}</span>
            })}
        </Wrapper>
    )
}
