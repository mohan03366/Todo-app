import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Todocontext } from "../stores/Todocontex";

function Todoitem({ item }) {
  const onDeleteitem = (name) => {
    DeleteItem(name);
  };
  const { DeleteItem } = useContext(Todocontext);
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col">{item.name}</div>
        <div className="col">{item.dueDate}</div>
        <div className="col">
          <button
            onClick={() => onDeleteitem(item.name)}
            type="button"
            className="btn btn-danger"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
