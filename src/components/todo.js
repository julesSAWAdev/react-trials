import { useState } from "react";

import Modal from "./modal";
import Backdrop from "./backdrop";


function Todo(props) {
  const [modalIsOpen, setModelIsOpen] = useState(false);

  function deleteHandler() {
    setModelIsOpen(true);
  }
  function CloseModalHandler(){
    setModelIsOpen(false)
  }
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={CloseModalHandler} onConfirm={CloseModalHandler}/>  } 
      {modalIsOpen && <Backdrop onClick={CloseModalHandler}/>}
    </div>
  );
}

export default Todo;
