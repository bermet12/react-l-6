import { Container, List, ListItem, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'teal',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#2e7d32',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#2e7d32',
        },
        '&:hover fieldset': {
            borderColor: '#2e7d32',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#2e7d32',
        },
    },
});

//Цвет для кнопки
const theme = createTheme({
    palette: {
        secondary: {
            main: '#2e7d32',
        },
    },
});

let newChatName = "";
export default function ChatsList({ createAvailable }) {
    const chats = useSelector(state => state.chats)
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const createNewChat = () => {
        dispatch({ type: "createChat", payload: newChatName });
        // navigate("/chats/" + id);
    }

    return <Container>
        <ThemeProvider theme={theme}>
            <List sx={{ fontSize: 20 }} >
                {Object.keys(chats).map((value) => {
                    return <ListItem key={value}>
                        <Link to={"/chats/" + value} style={{ textDecoration: "none", display: "block" }}>
                            {chats[value].name}
                        </Link>
                        <Button variant="outlined" color="success" sx={{ ml: 5 }} onClick={() => { dispatch({ type: "deleteChat", payload: value }) }}>
                            Удалить
                        </Button>
                    </ListItem>
                })}
            </List>

            {<Container sx={{ flexDirection: "column", display: "flex" }} maxWidth="sm">
                <h2 className="myHeader">Cоздайте новый Чат</h2>
                <CssTextField id='chat-name' variant='outlined' label='Название чата'
                    onChange={(event) => {
                        newChatName = event.target.value;
                    }}
                ></CssTextField>

                <Button color="success" variant="contained" type='button' onClick={createNewChat}>Добавить</Button>

            </Container>
            }
        </ThemeProvider>
    </Container>
}