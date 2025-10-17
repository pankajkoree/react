function TodoItem({
  id,
  todoName,
  todoDate,
  completed,
  onDeleteClick,
  onCompleteClick,
}) {

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
        completed
          ? "bg-gray-100 border-gray-300 opacity-75"
          : "bg-white border-gray-200 hover:shadow-md"
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onCompleteClick(id)}
          className="w-5 h-5 accent-green-500 cursor-pointer"
        />
        <div
          className={`text-base font-medium ${
            completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {todoName}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="text-sm text-gray-500">
          {new Date(todoDate).toLocaleDateString()}
        </div>
        <button
          onClick={() => onDeleteClick(id)}
          className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md shadow transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
