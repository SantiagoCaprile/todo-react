import { useState } from "react";

const Item = ({ todo, removeTodo }) => {
    const [isCompleted, setState] = useState(false);

    const handleCheck = () => {
        setState(!isCompleted);
        console.log("Ahora", todo.id, " es ", isCompleted);
    };

    return (
        <div className={"todo"}>
            {/* <input type={"checkbox"} onClick={() => completeTodo(todo.id)}/> */}
            <input type={"checkbox"} onClick={ handleCheck }/>
            <span style={{ textDecoration: isCompleted ? "line-through" : "" }}>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}> <img src="https://freesvg.org/img/trash.png" alt="Borrar" width="40px"></img> </button>
        </div>
    );
};

export default Item;