import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import Message from './Message/Message';

const DialogItem = (props) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

// const Message = (props) => {
//   return <div className={s.message}>{props.message}</div>;
// };

const Dialogs = (props) => {
  

  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.textareaContent}>
        <textarea>dsadas</textarea>
        <button>fdsf</button>
      </div>
    </div>
  );
};

export default Dialogs;
