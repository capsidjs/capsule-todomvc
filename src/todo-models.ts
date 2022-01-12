/** Todo represents a single Todo item. */
export class Todo {
  constructor(
    public id: string,
    public title: string,
    public completed: boolean,
  ) {}

  toggle() {
    this.completed = !this.completed;
  }
}

const KEY = "capsule-todomvc";

/** TodoCollection represents a collection of Todos. */
export class TodoCollection {
  constructor(public todos: Todo[] = []) {}

  getById(id: string): Todo | null {
    return this.todos.find((todo) => todo.id === id);
  }

  remove(toRemove: Todo): void {
    this.todos = this.todos.filter((todo) => todo.id !== toRemove.id);
  }

  add(todo: Todo): void {
    this.todos.push(todo);
  }

  get length(): number {
    return this.todos.length;
  }

  has(test: Todo): boolean {
    return this.todos.some((todo) => todo.id === test.id);
  }

  completed(): TodoCollection {
    return new TodoCollection(this.todos.filter((todo) => todo.completed));
  }

  uncompleted(): TodoCollection {
    return new TodoCollection(this.todos.filter((todo) => !todo.completed));
  }

  completeAll(): void {
    this.todos.forEach((todo) => {
      todo.completed = true;
    });
  }

  uncompleteAll(): void {
    this.todos.forEach((todo) => {
      todo.completed = false;
    });
  }

  forEach(f: (todo: Todo) => void): void {
    this.todos.forEach(f);
  }

  toJSON(): string {
    return JSON.stringify(this.todos);
  }

  static fromJson(json: string) {
    return new TodoCollection(
      JSON.parse(json).map(
        ({ id, title, completed }) => new Todo(id, title, completed),
      ),
    );
  }

  save() {
    localStorage.setItem(KEY, this.toJSON());
  }

  static restore(): TodoCollection {
    return TodoCollection.fromJson(localStorage.getItem(KEY) || "[]");
  }

  maxId() {
    return Math.max(0, ...this.todos.map((todo) => +todo.id));
  }
}
