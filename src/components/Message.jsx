import '../styles/message.css'

function Message(props) {
    return (
        <div className="message">
            <p className='author'>От: {props.author}</p>
            <p className='text'>{props.text}</p>
        </div>
    )
}

export default Message;