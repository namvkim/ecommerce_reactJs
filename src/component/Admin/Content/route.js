import React from 'react';
import Dangchuanbi from './Order/Dangchuanbi';
import Danggiao from './Order/Danggiao';
import Dagiao from './Order/Dagiao';


const route =[
    {
        path:'/',
        exact:true,
        main:()=><Dangchuanbi/>
    },
    {
        path:'Book/Danggiao',
        exact:true,
        main:({match})=><Danggiao match={match}/>
    },
    {
        path:'Book/Dagiao',
        exact:true,
        main:({match})=><Dagiao match={match}/>
    }

]

export default route;