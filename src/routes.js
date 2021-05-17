import React from 'react';


const routes =[
    {
        path:'/',
        exact:true,
        main:()=><Main/>,
    },
    {
        path:'/about',
        exact:true,
        main:()=><About/>,
    },
    {
        path:'/add',
        exact:true,
        main:({history})=><Add history={history}/>,
    },

    {
        path:'/:id/4',
        exact:true,
        main:({history})=><ProDetail history={history}/>,
    },
]

export default routes;