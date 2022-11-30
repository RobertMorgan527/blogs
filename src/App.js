import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";
import MainNavigation from './MainNavigation';
import Blogs from "./Blogs";
import NewBlog from './NewBlog';
import QAPics from './QAPics';
import NotFound from './NotFound';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
      <div>
        <MainNavigation />
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path='/' element={<Blogs />} />
            <Route path="/new-blog" element={<NewBlog />} />
            <Route path="/qa/pics/:id" element={<QAPics />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </div>

  )
}
export default App;