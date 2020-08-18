# RingCentralChat

online demo: https://ringcentral.zhalice.com/

### Run
```
yarn install

yarn start
```

### base data structure

```js
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
```

### extend data structure

```js

    in MESSAGE_TYPE.MODEL
    
    we define some basic messageType, and  extend them through MODEL

```



### Design

    webpack cli: `creat-react-app`

    Technical selection: `React + TypeScript`

    css: `css in js (style-component)`

    icon: `ali-iconfnt`
    

    
