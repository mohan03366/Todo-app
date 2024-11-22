import { useContext } from "react";
import Todoitem from "./Todoitem";
import { Todocontext } from "../stores/Todocontex";

function Todoitems({ removeItem }) {
  const { Addtodoitems } = useContext(Todocontext);
  return (
    <div className="container">
      {Addtodoitems.map((item) => (
        <Todoitem
          key={item.name}
          item={item}
          // removeItem={removeItem}
        ></Todoitem>
      ))}
    </div>
  );
}
export default Todoitems;
