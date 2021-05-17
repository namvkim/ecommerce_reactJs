import React from 'react';
import Book from './content/book';
import ListProduct from './content/listProduct';
import UserManagement from './content/userManagement';


const rout =[
   
    {
        path:'/admin',
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