import "./global.css"

import styles from "./App.module.css"

import rocketSvg from "./assets/rocket.svg"
import plusSvg from "./assets/plus.svg"
import trashSvg from "./assets/trash.svg"
import uncheckedSvg from "./assets/unchecked.svg"
import checkedSvg from "./assets/checked.svg"

function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={rocketSvg} />
        <h1><span>to</span><span>do</span></h1>
      </header>

      <div className={styles.content}>

        <form className={styles.newTodoForm}>
          <input placeholder="Adicione uma nova tarefa" />
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
          <div className={styles.todo}>
            <button><img src={uncheckedSvg} /></button>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <button><img src={trashSvg} /></button>
          </div>
          <div className={styles.todo}>
            <button><img src={uncheckedSvg} /></button>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <button><img src={trashSvg} /></button>
          </div>
          <div className={styles.todo}>
            <button><img src={uncheckedSvg} /></button>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <button><img src={trashSvg} /></button>
          </div>
          <div className={styles.doneTodo}>
            <button><img src={checkedSvg} /></button>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <button><img src={trashSvg} /></button>
          </div>
          <div className={styles.doneTodo}>
            <button><img src={checkedSvg} /></button>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <button><img src={trashSvg} /></button>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
