import { useContext } from "react";
import { Todocontext } from "../stores/Todocontex";

const Welcomemessage = () => {
  const { Addtodoitems } = useContext(Todocontext);
  return Addtodoitems.length === 0 && <h1>ADD ITEMS</h1>;
};
export default Welcomemessage;
