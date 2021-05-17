import React from 'react';
import Book from './Content/Book';
import ListProduct from './Content/ListProduct';
import UserManagement from './Content/UserManagement';


const rout =[
   
    {
        path:'/',
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
    },
    
]

export default rout;