const initialState = {
    chats: [
        {
            id: 1,
            name: 'Иван'
        },
        {
            id: 2,
            name: 'Billy'
        },
        {
            id: 3,
            name: 'Андрей'
        },
    ],
    messages: [
        {
            chatId: 2,
            text: 'Купил молоко',
        },
        {
            chatId: 2,
            text: 'Поехал к деду',
        },
        {
            chatId: 3,
            text: 'Ты где?',
        },
    ]
}


export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}