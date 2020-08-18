import styled from 'styled-components'

const SystemWrapper = styled.div`
    color: #A6A6A6;
    font-size: 12px;
`

const ReceiverWrapper = styled.div`
    border-radius: 4px;
    padding: 10px;
    max-width: 80%;
    position: relative;
    background-color: #fff;
    width: fit-content;
    margin-left: 10px;
    overflow: hidden;

    &:before {
        content: "";
        border-width: 6px;
        border-style: solid;
        border-color: transparent;
        position: absolute;
        top: 10px;
        border-right-color: #fff;
        left: -12px;
    }
`

const SenderWrapper = styled.div`
    border-radius: 4px;
    padding: 10px;
    max-width: 80%;
    position: relative;
    width: fit-content;
    background-color: #95ec69;
    margin-right: 10px;
    overflow: hidden;

    &:before {
        content: "";
        border-width: 6px;
        border-style: solid;
        border-color: transparent;
        position: absolute;
        top: 10px;
        border-left-color: #95ec69;
        right: -12px;
    }
`

export { SystemWrapper, ReceiverWrapper, SenderWrapper }
