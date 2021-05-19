import React from 'react';
import App from './app';
// import Admin from './component/admin/appAdmin';
const routes =[
    {
        path:'/',
        exact:true,
        main:()=><App/>,
    },
    // {
    //     path:'/admin',
    //     exact:true,
    //     main:()=><Admin/>,
    // }
]

export default routes;