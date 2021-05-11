import React from 'react';
import Main from './compenent/main';
import About from './compenent/about';
import Add from './compenent/add';

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