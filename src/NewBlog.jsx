import { useState, useRef} from 'react';
import Card from "./Card"
import "./newButton.css"

function NewBlog(props) {
    const { title } = useState('');
    const { body } = useState('');
    const { author } = useState('');
    const authorRef = useRef();
    const titleRef = useRef();
    const bodyRef = useRef();
    function submitHandler(event) {
        event.preventDefault();
        const data = {
            title: titleRef.current.value,
            author: authorRef.current.value,
            body: bodyRef.current.value
        };
        addBlog(data);
    }
    function addBlog(data) {
        fetch('http://localhost:4000/blogs', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });
        window.location.replace("/")
        }
    return (
        <Card>
            <form onSubmit={submitHandler}>
                <label class="inputLabel">Title:</label> <input class="newBlogInput" type="text" value={title} ref={titleRef} />
                <label class="inputLabel">Author:</label> <input class="newBlogInput" type="text" value={author} ref={authorRef} />
                <label class="inputLabel">Body:</label> <textarea class="newBlogInput" name="Text1" cols="129" rows="5" value={body} ref={bodyRef} />
                <button class="newButton">Add blog</button>
            </form>
        </Card>
    );
}
export default NewBlog;