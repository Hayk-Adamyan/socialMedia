import Message from "./Message/Message";
import DialogItem from "./DialogItem";
import "./Dialogs.css"
const Dialogs = (props) => {

  let dialogElem = props.dialogs.map((dialog) => (<DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElem = props.messages.map((m) => <Message message={m.message} />);
  return (
    <div className="dialogs">
      <div className="dialogs_item">{dialogElem}</div>
      <div className="messages">{messagesElem}</div>
    </div>
  );
};
export default Dialogs;
