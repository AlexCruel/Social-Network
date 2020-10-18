import React from 'react';
import style from '../Dialogs.module.css';

function Message(props) {
    return (
        <div className={style.dialog}>{props.message}</div>
    );
}

export default Message;