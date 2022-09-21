import React, { useState } from "react";

const Form = ({ addTodo }) => {
    const [task, setTask] = useState("");

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task) return;
        addTodo(task);
        setTask("");
    };

    return (
        <form>
            <input type={"text"} placeholder={"Agrega una tarea"} value={task} onChange={(e) => handleChange(e)} />
            <button onClick={handleSubmit}>Agregar</button>
        </form>
    );
};

export default Form;