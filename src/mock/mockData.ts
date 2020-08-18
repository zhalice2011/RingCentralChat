import { ROLE, MESSAGE_TYPE, MESSAGE_STATUS } from "../constants/message";


const messages = [
    {
        id: 1,
        content: "hello world",
        role: ROLE.SENDER,
        type: MESSAGE_TYPE.TEXT,
        author: {
            name: 'Zhalice'
        }
    },
    {
        id: 2,
        content: "hello, https://www.ringcentral.com",
        role: ROLE.RECEIVER,
        type: MESSAGE_TYPE.TEXT,
        status: MESSAGE_STATUS.LOADING,
        author: {
            name: 'Claire',
        }
    },
    {
        id: 3,
        url: 'https://pic2.zhimg.com/v2-59540e83a77fc9148bd967b83af0d19c_r.jpg?source=172ae18b',
        role: ROLE.RECEIVER,
        type: MESSAGE_TYPE.IMAGE,
        status: MESSAGE_STATUS.FAILED,
        author: {
            name: 'Zhalice'
        }
    },
    {
        id: 4,
        url: 'https://youtu.be/r09vPFM0RVM',
        upvote: 0,
        downvote: 0,
        role: ROLE.RECEIVER,
        type: MESSAGE_TYPE.VIDEO,
        author: {
            name: 'Zhalice'
        }
    },
    {
        id: 5,
        title: "Upvote Me",
        desc: "This behaviour is only supported within the context of Styled Components",
        upvote: 0,
        downvote: 0,
        content: '你拍了拍 "Claire" ',
        role: ROLE.SYSTEM,
        type: MESSAGE_TYPE.SYSTEM,
        author: {
            name: 'Zhalice'
        }
    },
    {
        id: 6,
        title: "Upvote Me",
        desc: "This behaviour is only supported within the context of Styled Components",
        upvote: 0,
        downvote: 0,
        content: '你拍了拍自己',
        role: ROLE.SYSTEM,
        type: MESSAGE_TYPE.SYSTEM,
        author: {
            name: 'Zhalice'
        }
    },
    {
        id: 7,
        title: "Upvote Me",
        desc: "This behaviour is only supported within the context of Styled Components",
        upvote: 0,
        downvote: 0,
        content: '"Claire" 拍了拍你 ',
        role: ROLE.SYSTEM,
        type: MESSAGE_TYPE.SYSTEM,
        author: {
            name: 'Zhalice'
        }
    }
];

export default messages
