import React from "react";
import Home_main from "./component/home/home_main";
import Cart from "./component/Cart/Cart";
import Booking from "./component/Cart/Booking";
import History from "./component/Cart/History";
import Contact from "./component/Contact/contact";
import Recruitment from "./component/Recruitment/recuitment";

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
    path: "/contact",
    exact: true,
    main: () => <Contact />,
  },
  {
    path: "/recruitment",
    exact: true,
    main: () => <Recruitment />,
  },
];

export default routes;
