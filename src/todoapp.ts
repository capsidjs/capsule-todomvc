import { component } from "@kt3k/capsule";
import { Todo, TodoCollection } from "./todo-models";

type Filter = "all" | "completed" | "uncompleted";

let id = 0;
/** The current filter */
let filter: Filter = "all";
/** The current todo, including completed and uncompleted */
let todos: TodoCollection;

const { on } = component("todoapp");

on.__mount__ = ({ el, query, emit }) => {
  (el as HTMLElement).dataset.framework = "capsule";
  todos = TodoCollection.restore();
  id = todos.maxId() + 1;

  window.onhashchange = () => {
    onChangeFilter({ emit, query });
  };
  onChangeFilter({ emit, query });
  query<HTMLInputElement>(".new-todo").focus();
  emit("update-todo");
};

on(".new-todo").keypress = ({ e, query, emit }) => {
  if ((e as any).which !== 13) {
    // If not a Enter, ignore the event
    return;
  }
  const newInput = query<HTMLInputElement>(".new-todo")!;
  const title = query<HTMLInputElement>(".new-todo")?.value?.trim();
  if (!title) {
    return;
  }

  newInput.value = "";
  todos.add(new Todo(`${id++}`, title, false));
  emit("update-todo");
};

on(".toggle").click = ({ e, emit }) => {
  todos.getById((e.target as Element).parentElement.parentElement.id)?.toggle();
  emit("update-todo");
};

on(".toggle-all").click = ({ e, emit }) => {
  if ((e.target as any).checked) {
    todos.completeAll();
  } else {
    todos.uncompleteAll();
  }
  emit("update-todo");
};

on(".destroy").click = ({ e, emit }) => {
  const toRemove = todos.getById(
    (e.target as Element).parentElement.parentElement.id,
  );
  todos.remove(toRemove);
  emit("update-todo");
};

on(".clear-completed").click = ({ emit }) => {
  todos.completed().forEach((todo) => {
    todos.remove(todo);
  });
  emit("update-todo");
};

on(".todo > .view > label").dblclick = ({ e }) => {
  const todoItem = (e.target as Element).parentElement.parentElement;
  const todo = todos.getById(todoItem.id);
  todoItem.classList.add("editing");
  const editInput = todoItem.querySelector<HTMLInputElement>(".edit");
  editInput.value = todo.title;
  editInput.focus();
};

on(".edit").keypress = on(".edit").keydown = ({ e }) => {
  const input: HTMLInputElement = e.target as any;
  if ((e as any).which === 13 /* ENTER */) {
    input.blur();
  } else if ((e as any).which === 27 /* ESC */) {
    input.value = todos.getById(input.parentElement.id).title;
    input.blur();
  }
};

on(".edit").focusout = ({ e, emit }) => {
  const input = e.target as HTMLInputElement;
  const value = input.value.trim();
  const todoItem = input.parentElement;
  if (value) {
    todos.getById(todoItem.id).title = value;
    todoItem.classList.remove("editing");
  } else {
    todos.remove(todos.getById(todoItem.id));
    todoItem.classList.remove("editing");
  }
  emit("update-todo");
};

function onChangeFilter({ emit, query }) {
  const { hash } = location;
  if (hash === "#/active") {
    filter = "uncompleted";
  } else if (hash === "#/completed") {
    filter = "completed";
  } else {
    filter = "all";
  }
  query('a[href="#/all"]')!.classList.toggle("selected", filter === "all");
  query('a[href="#/active"]')!.classList.toggle(
    "selected",
    filter === "uncompleted",
  );
  query('a[href="#/completed"]')!.classList.toggle(
    "selected",
    filter === "completed",
  );
  emit("update-todo");
}

on["update-todo"] = ({ query }) => {
  todos.save();
  const uncompleted = todos.uncompleted();
  const completed = todos.completed();
  const todoList = query(".todo-list")!;
  query(".todo-count strong").textContent = `${uncompleted.length}`;
  query(".todo-count .plural").classList.toggle(
    "hidden",
    uncompleted.length === 1,
  );
  query(".main").classList.toggle("hidden", todos.length === 0);
  query(".footer").classList.toggle("hidden", todos.length === 0);
  query(".toggle-all").classList.toggle("hidden", todos.length === 0);
  query('label[for="toggle-all"]').classList.toggle(
    "hidden",
    todos.length === 0,
  );
  query<HTMLInputElement>(".toggle-all").checked = uncompleted.length === 0;
  query(".clear-completed").classList.toggle("hidden", completed.length === 0);
  if (
    filter === "all" &&
    todos.length === todoList.children.length
  ) {
    // Doesn't replace the list items.
    todos.forEach((todo) => {
      const li = todoList.querySelector(`[id="${todo.id}"]`);
      li.classList.toggle("completed", todo.completed);
      li.querySelector("label").textContent = todo.title;
      li.querySelector<HTMLInputElement>(".toggle").checked = todo.completed;
    });
  } else {
    // TODO(kt3k): This replace the entire list items.
    // The performance can be improved by reusing reusable list items.
    const visibleItems = filter === "uncompleted"
      ? uncompleted
      : filter === "completed"
      ? completed
      : todos;
    todoList.innerHTML = "";
    visibleItems.forEach((todo) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="view">
          <input class="toggle" type="checkbox" ${
        todo.completed ? "checked" : ""
      }/>
          <label>${todo.title}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" type="text" />
      `;
      li.id = todo.id;
      li.classList.add("todo");
      li.classList.toggle("completed", todo.completed);
      todoList.appendChild(li);
    });
  }
};
