import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Insights } from './pages/Insights';
import { Article } from './pages/Article';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { NotFound } from './pages/NotFound';

const router = createBrowserRouter([{ path: '/', element: <Layout/>, children: [
  { index: true, element: <Home/> },
  { path: 'about', element: <About/> },
  { path: 'services', element: <Services/> },
  { path: 'services/:slug', element: <ServiceDetail/> },
  { path: 'insights', element: <Insights/> },
  { path: 'insights/:slug', element: <Article/> },
  { path: 'contact', element: <Contact/> },
  { path: 'privacy', element: <Privacy/> },
  { path: '*', element: <NotFound/> }
]}]);

export default function App(){return <RouterProvider router={router}/>}
