import React from 'react';
import Book from './Content/Book';
import HomeAdmin from './Content/HomeAdmin';
import ListProduct from './Content/ListProduct';
import UserManagement from './Content/UserManagement';
// import Chuanbi from './Order/Chuanbi';
// import Dagiao from './Order/Dagiao';
// import Danggiao from './Order/Danggiao';

const rout =[
    {
        path:'/',
        exact:true,
        main:()=><HomeAdmin/>,
    },
    {
        path:'/Book',
        exact:true,
        main:()=><Book/>,
    },
    {
        path:'/ListProduct',
        exact:true,
        main:({match})=><ListProduct match={match}/>,
    },
    {
        path:'/UserManagement',
        exact:true,
        main:({match})=><UserManagement match={match}/>,
    }
    // {
    //     path:'/Chuanbi',
    //     exact:true,
    //     main:({match})=><Chuanbi match={match}/>,
    // }, {
    //     path:'/Danggiao',
    //     exact:true,
    //     main:({match})=><Danggiao match={match}/>,
    // }, {
    //     path:'/Dagiao',
    //     exact:true,
    //     main:({match})=><Dagiao match={match}/>,
    // },
   
]

export default rout;