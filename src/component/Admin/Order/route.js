import React from 'react';
import Dangchuanbi from './Dangchuanbi';
import Danggiao from './Danggiao';
import Dagiao from './Dagiao';


const route =[
    {
        path:'Book',
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