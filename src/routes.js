import React from 'react';
import Home_main from './component/home/home_main';
import Cart from './component/Cart/Cart';

const routes =[
    {
        path:'/',
        exact:true,
        main:()=><Home_main/>,
    },

    {
        path:'/cart',
        exact:true,
        main:()=><Cart/>,
    }

   
]

export default routes;