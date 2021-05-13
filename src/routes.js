import React from 'react';
import Main from './component/main';
import About from './component/about';
import Add from './component/add';

const routes =[
    {
        path:'/',
        exact:true,
        main:()=><Main/>,
    },
    {
        path:'/about',
        exact:true,
        main:()=><About/>,
    },
    {
        path:'/add',
        exact:true,
        main:({history})=><Add history={history}/>,
    },
]

export default routes;