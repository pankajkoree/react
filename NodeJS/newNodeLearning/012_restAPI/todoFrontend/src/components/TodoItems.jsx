import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick, onCompleteClick }) => {
  const pending = todoItems.filter((t) => t.completed === false);
  const completed = todoItems.filter((t) => t.completed === true);

  return (
    <div className="mt-8 space-y-8">
      {/* Pending Tasks Section */}
      {pending.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            ⏳ Pending Tasks
          </h2>
          <div className="space-y-3">
            {pending.map((item) => (
              <TodoItem
                key={item.id}
                id={item.id}
                todoName={item.name}
                todoDate={item.dueDate}
                completed={item.completed}
                onDeleteClick={onDeleteClick}
                onCompleteClick={onCompleteClick}
              />
            ))}
          </div>
        </div>
      )}

      {/* Completed Tasks Section */}
      {completed.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-gray-500 mb-3">
            ✅ Completed Tasks
          </h2>
          <div className="space-y-3">
            {completed.map((item) => (
              <TodoItem
                key={item.id}
                id={item.id}
                todoName={item.name}
                todoDate={item.dueDate}
                completed={item.completed}
                onDeleteClick={onDeleteClick}
                onCompleteClick={onCompleteClick}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItems;
