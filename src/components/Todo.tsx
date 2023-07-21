import { MouseEvent } from "react"

import { TodoItem } from "../App"

import styles from "./Todo.module.css"

import trashSvg from "../assets/trash.svg"
import uncheckedSvg from "../assets/unchecked.svg"
import checkedSvg from "../assets/checked.svg"

interface TodoProps {
    todo: TodoItem;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
}

export function Todo({ todo, toggleTodo, deleteTodo }: TodoProps) {
    const { text, done } = todo;

    function handleToggle(_event: MouseEvent<HTMLButtonElement>) {
        toggleTodo(todo.id);
    }

    function handleDelete(_event: MouseEvent<HTMLButtonElement>) {
        deleteTodo(todo.id);
    }

    return (
        <div className={done ? styles.doneTodo : styles.todo}>
            <button onClick={handleToggle}><img src={done ? checkedSvg : uncheckedSvg} /></button>
            <p>{text}</p>
            <button onClick={handleDelete} ><img src={trashSvg} /></button>
        </div>
    )
}