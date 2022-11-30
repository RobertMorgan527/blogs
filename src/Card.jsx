import "./card.css"
import "./newButton.css"
function Card(props){
    return <div id={props.id}className="card">{props.children}</div>;
}
export default Card; 