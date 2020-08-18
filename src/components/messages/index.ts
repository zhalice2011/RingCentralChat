import { MESSAGE_STATUS, MESSAGE_TYPE, MESSAGE_ADDON_TYPE, ROLE  } from '../../constants/message'
import MSGImage from './MSGImage'
import MSGText  from './MSGText'
import MSGLink  from './MSGLink'
import MSGVideo from './MSGVideo'
import MSGSystemNotification from './MSGSystemNotification'
import { SystemWrapper, ReceiverWrapper, SenderWrapper } from './MSGStyleWrapper'

import { IMessage  } from './type'

export function getTargetMsgClass (msg: IMessage): TSFixMe {
    const { type, model } = msg
    switch (type) {
        case MESSAGE_TYPE.TEXT: return MSGText
        case MESSAGE_TYPE.IMAGE: return MSGImage
        case MESSAGE_TYPE.SYSTEM: return MSGSystemNotification
        case MESSAGE_TYPE.VIDEO: return MSGVideo
        case MESSAGE_TYPE.MODEL: { // 特殊的在这里进行扩展
            const modelType = model && model.modelType
            switch (modelType) {
                case MESSAGE_ADDON_TYPE.GRAPHIC: return MSGLink
            }
        }
        default: return MSGText
    }
}


export function getTargetWrapper (msg: IMessage): TSFixMe {
    const { role } = msg
    switch (role) {
        case ROLE.SYSTEM: return SystemWrapper
        case ROLE.RECEIVER: return ReceiverWrapper
        case ROLE.SENDER: return SenderWrapper
        default: return SystemWrapper
    }
}

export function getTargetWrapperCls (msg: IMessage): TSFixMe {
    const { role } = msg
    switch (role) {
        case ROLE.SYSTEM: return 'jc-center'
        case ROLE.RECEIVER: return 'jc-start'
        case ROLE.SENDER: return 'jc-end'
        default: return 'jc-center'
    }
}
