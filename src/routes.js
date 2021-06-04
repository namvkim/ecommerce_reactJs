import React from "react";
import Home_main from "./component/home/home_main";
import Cart from "./component/Cart/Cart";
import Booking from "./component/Cart/Booking";
import History from "./component/Cart/History";
import Recruiment from "./component/home/Recruiment";



const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home_main />,
  },
  {
    path: "/cart",
    exact: true,
    main: () => <Cart />,
  },
  {
    path: "/booking",
    exact: true,
    main: () => <Booking />,
  },
  {
    path: "/history",
    exact: true,
    main: () => <History />,
  },
  {
    path: "/recruiment",
    exact: true,
    main: () => <Recruiment />,
  },
  
];

export default routes;
