import Message from './Message';

export default function MessageList({ messages }) {
    return <>
        <div className='message-list'>
            {messages.map((value, index) => {
                return (
                    <Message author={value.author} text={value.text} key={index} />
                )
            })}
        </div>
    </>
}