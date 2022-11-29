import "./card.css"
import "./deleteButton.css"
import Card from "./Card"

function BlogList(props) {
    const blogList = props.blogs.map( blog => {
    return (
    <Card key={blog.id}>
        <div class="title">{blog.title}</div>
        <div class="author">{blog.author}</div>
        <div class ="blogBody">{blog.body}</div>
        <button class="deleteButton" onClick={()=>props.deleteBlog(blog.id)} >Delete</button>
    </Card>
    )
    });
    return blogList;
}
export default BlogList;