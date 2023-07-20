import styles from "./Todo.module.css"

import trashSvg from "../assets/trash.svg"
import uncheckedSvg from "../assets/unchecked.svg"
import checkedSvg from "../assets/checked.svg"

interface TodoProps {
    text: string;
    done?: boolean;
}

export function Todo({ text, done = false }: TodoProps) {
    return (
        <div className={done ? styles.doneTodo : styles.todo}>
            <button><img src={done ? checkedSvg : uncheckedSvg} /></button>
            <p>{text}</p>
            <button><img src={trashSvg} /></button>
        </div>
    )
}