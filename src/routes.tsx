import type { RouteObject } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import Homepage from './pages/Homepage/Homepage';
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';
import Page3 from './pages/Page3/Page3';
import Page4 from './pages/Page4/Page4';
import Page5 from './pages/Page5/Page5'
import Page6 from './pages/Page6/Page6';
import Page7 from './pages/Page7/Page7';

const routes = ({bul}:any): RouteObject[] => [
  { path: '*', element: <NotFound /> },
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index:true,
        element:<Homepage/>
      },
      {
        path:"page1", 
        element:<Page1/>
      },
      {
        path:"page2", 
        element:<Page2 name="TSSSss"/>
      },
      {
        path:"page3", 
        element:<Page3/>
      },
      {
        path:"page4", 
        element:<Page4/>
      },
      {
        path:"page5", 
        element:<Page5/>
      },
      {
        path:"page6", 
        element:<Page6/>
      },
      {
        path:"page7", 
        element:<Page7/>
      }
    ]
  }
]

export default routes