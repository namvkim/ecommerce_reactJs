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
        path:'Book/danggiao',
        exact:true,
        main:({match})=><Danggiao match={match}/>
    },
    {
        path:'Book/dagiao',
        exact:true,
        main:({match})=><Dagiao match={match}/>
    }

]

export default route;