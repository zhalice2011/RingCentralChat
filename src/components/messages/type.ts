import { MESSAGE_TYPE, MESSAGE_STATUS, ROLE } from '../../constants/message'

interface IAuthor {
    name?: string;
    thumbnail?: string;
}

interface IMessageBase {
    id: number
    type?: MESSAGE_TYPE
    state?: MESSAGE_STATUS
    role?: ROLE
    author?: IAuthor
}

export interface IMessage extends IMessageBase {
    content?: TSFixMe
    model?: TSFixMe
    url? : string
}
