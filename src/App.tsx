import { v4 as uuidv4 } from "uuid"

import { Todo } from "./components/Todo"

import "./global.css"
import styles from "./App.module.css"

import rocketSvg from "./assets/rocket.svg"
import plusSvg from "./assets/plus.svg"
import { ChangeEvent, FormEvent, useState } from "react"

export interface TodoItem {
  id: string;
  text: string;
  done: boolean;
}

const initialTodos: TodoItem[] = [
  {
    id: uuidv4(),
    text: 'Finish simulation',
    done: false,
  },
  {
    id: uuidv4(),
    text: "Return book",
    done: false,
  },
  {
    id: uuidv4(),
    text: "Clean the room",
    done: true,
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodoText, setNewTodoText] = useState("");

  const numDoneTodos = todos.filter(todo => todo.done).length;

  function handleNewTodoTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodoText(event.target.value);
  }

  function onNewTodoSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (newTodoText === "") return;
    const newTodo: TodoItem = {
      id: uuidv4(),
      text: newTodoText,
      done: false,
    };

    setTodos(ts => [newTodo, ...ts])
    setNewTodoText("")
  }

  function toggleTodo(id: string) {
    setTodos(ts => ts.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        }
      }
      return todo;
    }))
  }

  function deleteTodo(id: string) {
    setTodos(ts => ts.filter(todo => todo.id !== id));
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
            Tarefas criadas <span>{todos.length}</span>
          </div>
          <div className={styles.numDone}>
            Concluídas <span>{numDoneTodos} de {todos.length}</span>
          </div>
        </section>

        <main>
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          ))}
        </main>
      </div>
    </>
  )
}

export default App
