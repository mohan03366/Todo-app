import "./App.css";
import Addtodo from "./components/Addtodo";
import Todoheading from "./components/Todoheading";
import "bootstrap/dist/css/bootstrap.min.css";
import Todoitems from "./components/Todoitems";
// import { useReducer, useState } from "react";
import TodoContextProvider from "./stores/Todocontex";
import Welcomemessage from "./components/Welcomemessage";

// const TodoItemsReducer = (curritems, action) => {
//   let newTodoitems = curritems;
//   if (action.type === "ADD_ITEM") {
//     newTodoitems = [
//       ...curritems,
//       { name: action.payload.inputname, dueDate: action.payload.inputdate },
//     ];
//   }
//   if (action.type === "DELETE_ITEM") {
//     newTodoitems = curritems.filter(
//       (todoname) => todoname.name != action.payload.itemname
//     );
//   }
//   return newTodoitems;
// };

function App() {
  //const [Addtodoitems, setAddtodoitems] = useState([]);
  // const [Addtodoitems, DispatchAddtodoitems] = useReducer(TodoItemsReducer, []);
  // const AddNewItem = (inputname, inputdate) => {
  //   const newItem = {
  //     type: "ADD_ITEM",
  //     payload: {
  //       inputname,
  //       inputdate,
  //     },
  //   };
  //   DispatchAddtodoitems(newItem);
  //   // const newArrayitem = [
  //   //   ...Addtodoitems,
  //   //   { name: inputname, dueDate: inputdate },
  //   // ];
  //   // setAddtodoitems(newArrayitem);
  // };
  // const DeleteItem = (deletedName) => {
  //   const deletedItem = {
  //     type: "DELETE_ITEM",
  //     payload: { itemname: deletedName },
  //   };
  //   DispatchAddtodoitems(deletedItem);
  //   // let newTodoArray = Addtodoitems.filter(
  //   //   (todoname) => todoname.name != deletedName
  //   // );
  //   // setAddtodoitems(newTodoArray);
  // };
  return (
    <TodoContextProvider>
      <center>
        <Todoheading />

        <Addtodo />
        <Welcomemessage />

        <div className="items">
          <Todoitems />
        </div>
      </center>
    </TodoContextProvider>
  );
}

export default App;
