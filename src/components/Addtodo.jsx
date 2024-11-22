import { useContext, useRef } from "react";
import { IoPersonAdd } from "react-icons/io5";
import style from "./Addtodo.module.css";
import { Todocontext } from "../stores/Todocontex";

function Addtodo() {
  const todoname = useRef();
  const tododate = useRef();
  const { AddNewItem } = useContext(Todocontext);

  const onButtonClick = (event) => {
    event.preventDefault();
    const Name = todoname.current.value;
    const Date = tododate.current.value;
    AddNewItem(Name, Date);

    todoname.current.value = "";
    tododate.current.value = "";
  };
  return (
    <>
      <form onSubmit={onButtonClick} className="container text-center">
        <div className="row align-items-center">
          <div className="col kg-col">
            <input ref={todoname} type="text" placeholder="Enter Todo-here" />
          </div>
          <div className="col">
            <input ref={tododate} type="date" />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success btn-lg">
              <IoPersonAdd />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default Addtodo;
