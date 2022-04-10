const initialState = {
    [Date.now()]: { name: 'Chat 1', messages: [{ author: 'robot', text: 'welcome to Chat 1' }] }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "createChat":
            return {
                ...state,
                [Date.now()]: {
                    name: action.payload,
                    messages: [{ author: 'robot', text: `welcome to ${action.payload}` }]
                }
            }
        case "deleteChat":
            let chats = {
                ...state
            }
            delete chats[action.payload];
            return chats;
        case "addMessage":
            const { chatId, author, text } = action.payload;
            let newState = { ...state };
            newState[chatId].messages.push({ author, text });
            return newState;
        default: return state;
    }
}

export default reducer;