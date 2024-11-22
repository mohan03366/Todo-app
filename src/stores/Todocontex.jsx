import { createContext, useReducer } from "react";

export const Todocontext = createContext({
  Addtodoitems: [],
  AddNewItem: () => {},
  DeleteItem: () => {},
});

const TodoItemsReducer = (curritems, action) => {
  let newTodoitems = curritems;
  if (action.type === "ADD_ITEM") {
    newTodoitems = [
      ...curritems,
      { name: action.payload.inputname, dueDate: action.payload.inputdate },
    ];
  }
  if (action.type === "DELETE_ITEM") {
    newTodoitems = curritems.filter(
      (todoname) => todoname.name != action.payload.itemname
    );
  }
  return newTodoitems;
};

const TodoContextProvider = ({ Children }) => {
  const [Addtodoitems, DispatchAddtodoitems] = useReducer(TodoItemsReducer, []);
  const AddNewItem = (inputname, inputdate) => {
    const newItem = {
      type: "ADD_ITEM",
      payload: {
        inputname,
        inputdate,
      },
    };
    DispatchAddtodoitems(newItem);
  };

  const DeleteItem = (deletedName) => {
    const deletedItem = {
      type: "DELETE_ITEM",
      payload: { itemname: deletedName },
    };
    DispatchAddtodoitems(deletedItem);
  };
  return (
    <Todocontext.Provider
      value={{
        AddNewItem,
        DeleteItem,
        Addtodoitems,
      }}
    >
      {Children}
    </Todocontext.Provider>
  );
};
export default TodoContextProvider;
