import { useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';
import Card from "./Card"
import "./newButton.css"

function NewBlog(props) {
    const navigate = useNavigate();
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
        navigate("/")
    }
    function addBlog(data) {
        fetch('http://localhost:4000/blogs', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });
     }
    return (
        <AnimatedPage>
            <Card>
                <form onSubmit={submitHandler}>
                    <label className="inputLabel">Title:</label> <input className="newBlogInput" type="text" value={title} ref={titleRef} />
                    <label className="inputLabel">Author:</label> <input className="newBlogInput" type="text" value={author} ref={authorRef} />
                    <label className="inputLabel">Body:</label> <textarea className="newBlogInput" name="Text1" cols="129" rows="5" value={body} ref={bodyRef} />
                    <button className="newButton">Add blog</button>
                </form>
            </Card>
        </AnimatedPage>
    );
}
export default NewBlog;