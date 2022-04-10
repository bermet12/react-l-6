import { useSelector, useDispatch } from "react-redux"
import '../styles/profile.css'

export default function Profile() {
    const profileName = useSelector(state => state.profile.username)
    const active = useSelector(state => state.profile.active)
    const dispatch = useDispatch();
    return <>
        <p className="myContacts">
            {profileName}
            {active ? ' Online' : ' Offline'}
            <input type="checkbox" checked={active} onChange={() => { dispatch({ type: 'changeActive' }) }} />
        </p>
    </>
}