import './App.css';
import {Routes, Route, Router, useLocation} from "react-router-dom";
import MainNavigation from './MainNavigation';
import Blogs from "./Blogs";
import NewBlog from './NewBlog';
import QAPics from './QAPics';
import NotFound from './NotFound';
import { AnimatePresence } from 'framer-motion';

const path = process.env.REACT_APP_PATH;

function App() {
  return (
      <div>
          <MainNavigation />
          <AnimatePresence mode="wait">
            <Router>
              <Routes key={useLocation().pathname} location={useLocation()}>
                <Route path={path+'/'} element={<Blogs />} />
                <Route path={path+"/new-blog"} element={<NewBlog />} />
                <Route path={path+"/qa/pics/:id"} element={<QAPics />} />
                <Route path={path+"/*"} element={<NotFound />} />
              </Routes>
            </Router>
          </AnimatePresence>
        
      </div>

  )
}
export default App;