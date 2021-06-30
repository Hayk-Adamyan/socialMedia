import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem";
import "./Dialogs.css";
const Dialogs = (props) => {
  const Message = (props) => {
    return <div className="message">{props.message}</div>;
  };
  let dialogs = [
    { id: 1, name: "Hayk" },
    { id: 2, name: "Hayk2" },
    { id: 3, name: "Hayk3" },
  ];
  let dialogElem = dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "how are you" },
    { id: 3, message: "fine" },
  ];
  let messagesElem = messages.map((m) => <Message message={m.message} />);
  return (
    <div className="dialogs">
      <div className="dialogs_item">{dialogElem}</div>
      <div className="messages">{messagesElem}</div>
    </div>
  );
};
export default Dialogs;
