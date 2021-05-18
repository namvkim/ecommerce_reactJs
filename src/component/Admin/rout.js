import React from 'react';
import Book from './Content/Book';
import ListProduct from './Content/ListProduct';
import UserManagement from './Content/UserManagement';


const rout =[
   
    {
        path:'/admin',
        exact:true,
        main:()=><Book/>,
    },
    {
        path:'/listProduct',
        exact:true,
        main:({match})=><ListProduct match={match}/>,
    },
    {
        path:'/userManagement',
        exact:true,
        main:({match})=><UserManagement match={match}/>,
    },
    
]

export default rout;