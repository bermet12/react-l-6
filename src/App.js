import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFoundPage from "./pages/NotFoundPage";
import Chats from "./components/Chats";
import ChatsList from "./components/ChatsList";

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path="/chats" exact element={<ChatsList />} />
          <Route path="/chats/:chatId" element={<Chats />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;