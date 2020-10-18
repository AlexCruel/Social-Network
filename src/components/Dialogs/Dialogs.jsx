import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

function Dialogs() {

    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Alex 2'},
        {id: 3, name: 'Alex 3'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi 2'},
        {id: 3, message: 'Hi 3'}
    ];

    let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = messagesData.map( message => <Message message={message.message} />);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;