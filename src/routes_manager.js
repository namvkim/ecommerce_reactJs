import React from 'react';
import App from './app';
import AppAdmin from './component/Admin/AppAdmin';
const routes =[
    {
        path:'/',
        exact:true,
        main:()=><App/>,
    },
    {
        path:'/admin',
        exact:true,
        main:()=><AppAdmin/>,
    }
]

export default routes;