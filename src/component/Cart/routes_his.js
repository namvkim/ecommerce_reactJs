import React from "react";
import Preparation from './history/preparation';
import Delivery from './history/delivery';
import Delivered from './history/delivered';

const routes_his = [
    {
      path: "/history",
      exact: true,
      main: () => <Preparation />,
    },
    {
      path: "/delivery",
      exact: true,
      main: () => <Delivery />,
    },
    {
      path: "/delivered",
      exact: true,
      main: () => <Delivered />,
    }
  ];
  
  export default routes_his;