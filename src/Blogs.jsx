import { useState, useEffect } from 'react';
import BlogList from './BlogList';
function Blogs() {
    const [blogs, setBlogs] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:4000/blogs')
        .then(res => {
            if(!res.ok){
                throw Error('Could not get data for that resource.');
            }                
            return res.json();
        }).then(data => {
            setBlogs(data);
            setError(null);
            setIsLoading(false);
        }).catch( err => {
            setError(err.message);
        });
    }, []); 

    function deleteBlog(id) {
        fetch('http://localhost:4000/blogs/'+id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        const newBlogs = blogs.filter(item => item.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
    <div> {error && 
        <div>{error}</div>}
        {isLoading && 
        <div>
            Wait...
        </div>}
        {blogs && 
        <BlogList blogs={blogs} deleteBlog={deleteBlog} />} 
    </div>
    );
}
export default Blogs;