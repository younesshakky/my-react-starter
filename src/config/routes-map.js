import Home from "pages/Home";
import FourOhFour from "pages/FourOhFour";


const routesMap = [
  {
    exact: true,
    path: "/",
    component: Home
  },

  {
    exact: true,
    path: "*",
    component: FourOhFour
  }
];

export default routesMap;
