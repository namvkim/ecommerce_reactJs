import React from 'react';
import Book from './Content/book';
import ListProduct from './Content/listProduct';
import UserManagement from './Content/userManagement';


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