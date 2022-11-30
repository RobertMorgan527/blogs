import "./card.css"
import "./deleteButton.css"
import Card from "./Card"

function BlogList(props) {
    const blogList = props.blogs.map( blog => {
    return (
    <Card id={blog.id} key={blog.id}>
        <div className="title">{blog.title}</div>
        <div className="author">{blog.author}</div>
        <div className="blogBody">{blog.body}</div>
        <button className="deleteButton" 
        onClick={()=> {document.getElementById(blog.id).id = "fade-out-card";props.deleteBlog(blog.id)}} >Delete</button>
    </Card>
    )
    });
    return blogList;
}
export default BlogList;