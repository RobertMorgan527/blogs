import './App.css';
import {Routes, Route} from "react-router-dom";
import MainNavigation from './MainNavigation';
import Blogs from "./Blogs";
import NewBlog from './NewBlog';
import QAPics from './QAPics';
import NotFound from './NotFound';



function App() {
  return (
    <div>
      <MainNavigation />
        <Routes>
        <Route path='/' element={<Blogs />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/qa/pics/:id" element={<QAPics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
export default App;