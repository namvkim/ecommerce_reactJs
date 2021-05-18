import React from 'react';
import Home_main from './component/home/home_main';
const routes =[
    {
        path:'/',
        exact:true,
        main:()=><Home_main/>,
    }
]

export default routes;