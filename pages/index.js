import React from 'react';
import { retrieveLaunchParams } from '@telegram-apps/sdk';


const Index = () => {

    const { initDataRaw, initData} = retrieveLaunchParams()
    return (
        <div>
            {/*<iframe allow="clipboard-write" style={{width: 450+"px", height: 50+"px"}} src={"https://music.yandex.ru/iframe/track/78022555"}>*/}
            {/*</iframe>*/}
            {initData}
        </div>
    );
};

export default Index;