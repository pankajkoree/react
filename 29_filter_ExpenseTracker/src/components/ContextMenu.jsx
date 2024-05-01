import PropTypes from "prop-types";
export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenses,
  setExpense,
  expenses,
  rowId,
  setEditiingRowId,
}) {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          console.log("Editing");
          const { title, category, amount } = expenses.find(
            (expense) => (expense.id = rowId)
          );

          setEditiingRowId(rowId);
          setExpense({ title, category, amount });
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}

ContextMenu.propTypes = {
  menuPosition: PropTypes.object,
  setMenuPosition: PropTypes.func,
  setExpenses: PropTypes.func,
  setExpense: PropTypes.func,
  rowId: PropTypes.string,
  expenses: PropTypes.array,
  setEditiingRowId: PropTypes.string,
};
