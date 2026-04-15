import { router } from './Router/Router.jsx'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from "react-toastify";

import './index.css'
import { RouterProvider } from 'react-router'
import TimelineProvider from './Custom/TimelineContext.jsx';
  
createRoot(document.getElementById('root')).render(
<TimelineProvider>
 <RouterProvider router = { router } >
</RouterProvider>
 <ToastContainer />
 </TimelineProvider>
)
