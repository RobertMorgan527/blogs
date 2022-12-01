import { useState, useEffect } from 'react';
import AnimatedPage from './AnimatedPage';
import BlogList from './BlogList';
function Blogs() {
    const [blogs, setBlogs] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('robertqablogs.azurewebsites.net:443/blogs')
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

    async function deleteBlog(id) {
        fetch('http://robertqablogs.azurewebsites.net:443/blogs/'+id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        await new Promise(resolve => setTimeout(resolve, 300));
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
                <AnimatedPage>
                    <BlogList blogs={blogs} deleteBlog={deleteBlog} />
                </AnimatedPage>} 
            </div>
    );
}
export default Blogs;