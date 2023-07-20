import { Todo } from "./components/Todo"

import "./global.css"
import styles from "./App.module.css"

import rocketSvg from "./assets/rocket.svg"
import plusSvg from "./assets/plus.svg"
import { ChangeEvent, FormEvent, useState } from "react"

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const initialTodos: Todo[] = [
  {
    id: 1,
    text: 'Finish simulation',
    done: false,
  },
  {
    id: 2,
    text: "Return book",
    done: false,
  },
  {
    id: 3,
    text: "Clean the room",
    done: true,
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodoText, setNewTodoText] = useState("");

  function handleNewTodoTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodoText(event.target.value);
  }

  function onNewTodoSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (newTodoText === "") return;
    const newTodo: Todo = {
      id: todos.length + 1,
      text: newTodoText,
      done: false,
    };

    setTodos(ts => [newTodo, ...ts])
    setNewTodoText("")
  }

  return (
    <>
      <header className={styles.header}>
        <img src={rocketSvg} />
        <h1><span>to</span><span>do</span></h1>
      </header>

      <div className={styles.content}>

        <form className={styles.newTodoForm} onSubmit={onNewTodoSubmit}>
          <input
            placeholder="Adicione uma nova tarefa"
            value={newTodoText}
            onChange={handleNewTodoTextChange}
          />
          <button type="submit"><span>Criar</span><img src={plusSvg} /></button>
        </form>

        <section className={styles.todosHeader}>
          <div className={styles.numCreated}>
            Tarefas criadas <span>5</span>
          </div>
          <div className={styles.numDone}>
            Concluídas <span>2 de 5</span>
          </div>
        </section>

        <main>
          {todos.map(todo => (
            <Todo key={todo.id} text={todo.text} done={todo.done} />
          ))}
        </main>
      </div>
    </>
  )
}

export default App
