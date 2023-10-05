import { useEffect, useRef } from "react";
import "./Todos.css";

const Todos = () => {
  const formRef = useRef(null);
  const inputRef = useRef(null);
  const todosRef = useRef(null);
  const todos = JSON.parse(localStorage.getItem("todos"));

  useEffect(() => {
    formRef.current.addEventListener("submit", (e) => {
      e.preventDefault();

      addTodo();
    });
  }, []);

  useEffect(() => {
    if (todos) {
      todos.forEach((todo) => addTodo(todo));
    }
  }, [todos]);

  const addTodo = (todo) => {
    let todoText = inputRef.current.value;

    if (todo) {
      todoText = todo.text;
    }

    if (todoText) {
      const todoEl = document.createElement("li");
      todoEl.className =
        "border border-[#e5e5e5] cursor-pointer text-2xl py-4 px-8";
      if (todo && todo.completed) {
        todoEl.classList.add("completed");
      }

      todoEl.innerText = todoText;
      todoEl.addEventListener("click", () => {
        todoEl.classList.toggle("completed");
        updateLS();
      });

      todoEl.addEventListener("contextmenu", (e) => {
        e.preventDefault();

        todoEl.remove();
        updateLS();
      });

      todosRef.current.appendChild(todoEl);
      inputRef.current.value = "";

      updateLS();
    }
  };

  const updateLS = () => {
    const todosList = [];

    todosRef.current.childNodes.forEach((todoEl) => {
      todosList.push({
        text: todoEl.innerText,
        completed: todoEl.classList.contains("completed"),
      });
    });

    localStorage.setItem("todos", JSON.stringify(todosList));
  };

  return (
    <div className="bg-[#f5f5f5] text-[#444] flex flex-col items-center justify-center h-screen">
      <h1 className="text-[#b383e2] text-[10rem] text-center opacity-[0.4]">
        todos
      </h1>

      <form
        className="max-w-full w-[400px] [box-shadow:0_4px_10px_#00000019]"
        ref={formRef}
      >
        <input
          type="text"
          className="input border-0 text-[#b383e2] text-[2rem] py-[1rem] px-[2rem] block w-full placeholder:text-[#d5d5d5] focus:outline-[#b383e2]"
          placeholder="Enter your todo"
          autoComplete="off"
          ref={inputRef}
        />

        <ul className="p-0 m-0 list-none bg-white todos" ref={todosRef}></ul>
      </form>

      <small className="text-[#b5b5b5] mt-[3rem] text-center">
        Left click to toggle completed <br />
        Right click to delete a todo
      </small>
    </div>
  );
};

export default Todos;
