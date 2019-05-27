import React from 'react';
import c from './NewMessage.module.css';

const NewMessage = () => {
    let newMessageElement = React.createRef();

    let sendMessage = (e) => {
      e.preventDefault();
      let text = newMessageElement.current.value;
      alert(text); 
    }

    return (
        <div className={c.create_msg}>
          <form className={c.newMsgForm} action="#">
            <input className={c.write_msg} ref={newMessageElement} type="text" placeholder="Write a message..." />
            <input className={c.send_msg} onClick={ sendMessage } type="submit" value="Send"/>
          </form>  
        </div>
    )
}

export default NewMessage;