import React from 'react';
import Home_main from './component/home/home_main';
import Cart from './component/Cart/Cart';
import Booking from './component/Cart/Booking';

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
    },

     {
        path:'/booking',
        exact:true,
        main:()=><Booking/>,
    }

   
]

export default routes;