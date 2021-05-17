import React from 'react';
import Dangchuanbi from './Order/dangchuanbi';
import Danggiao from './Order/danggiao';
import Dagiao from './Order/dagiao';


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