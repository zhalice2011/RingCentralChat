export enum MESSAGE_TYPE {
    TEXT = 'TEXT',
    VIDEO = 'VIDEO',
    IMAGE = 'IMAGE',
    SYSTEM = 'SYSTEM',
    MODEL = 'MODEL',
}

export enum MESSAGE_ADDON_TYPE {
    GRAPHIC = 'GRAPHIC', // 图文
    LINK = 'LINK', // 链接
}

export enum MESSAGE_STATUS {
    LOADING = 'LOADING',
    SENT =  'SENT',
    FAILED = 'FAILED',
    READ = 'READ'
}

export enum ROLE {
    SENDER = 'SENDER',
    RECEIVER = 'RECEIVER',
    SYSTEM = 'SYSTEM'
}

export const generateTextMessage = (content) => {
    return {
        id: Math.ceil(Math.random() * 100000),
        content,
        role: ROLE.SENDER,
        type: MESSAGE_TYPE.TEXT,
        author: {
            name: 'Zhalice'
        }
    }
}
