import AddTodoForm from './components/add-todo-form';
import TodoList from './components/todo-list';
import TodoSummary from './components/todo-summary';
import useTodos from './hooks/useTodos';

function App() {
  const {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteCompleted
  } = useTodos();

  return (
    <main className="py-10 h-screen space-y-5 overflow-auto">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteCompleted} />
    </main>
  );
}

export default App;