import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const setActive = (({ isActive }) => isActive ? 'active' : '');

const Layout = () => {
    return (
        <>
            <header className="myLink">
                <NavLink className={setActive} to={"/"}>Главная</NavLink>
                <NavLink className={setActive} to={"profile"}>Профиль</NavLink>
                <NavLink className={setActive} to={"chats"}>Чаты</NavLink>
            </header>
            <div>
                <Outlet />
            </div>

        </>
    )
}

export default Layout;