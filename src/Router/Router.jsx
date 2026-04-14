import { createBrowserRouter } from 'react-router'
import Layout from '../Layout/Layout'
import Home from '../Components/Home/Home'
import Timeline from '../Timeline/Timeline'
import Stats from '../Stats/Stats'
import Userinfo from '../Components/User/Userinfo'

export const router = createBrowserRouter([
   { path: '/',
    element: <Layout />,
    children: [
      { index : true, 
        element: <Home />
      },
      {
        path: 'timeline',
        element: <Timeline />
      },
      {
        path: 'stats',
        element: <Stats />
      },{
        path: 'user/:id',
        loader : ({params}) =>fetch('friends.json'),
        element: <Userinfo />
      }
    ]
   }
])