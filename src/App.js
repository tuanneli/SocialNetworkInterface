import React, {useRef, useState} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "./components/MainContent/Profile/Profile";
import Messages from "./components/MainContent/Messages/Messages";
import News from "./components/MainContent/News/News";
import Music from "./components/MainContent/Music/Music";
import Settings from "./components/MainContent/Settings/Settings";
import Friends from "./components/MainContent/Friends/Friends";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav state={props.state.friendsPage}/>
      <div className="main-content">
        <Routes>
          <Route
            path="/Profile"
            element={
              <Profile
                state={props.state.profilePage}
                dispatch={props.dispatch}
                // addPost={props.addPost}
                // updateNewPostText={props.updateNewPostText}
              />
            }
          />
          <Route
            path="/Messages/*"
            element={
              <Messages
                state={props.state.messagesPage}
                dispatch={props.dispatch}
                // addMessage={props.addMessage}
                // updateNewMessageText={props.updateNewMessageText}
              />
            }
          />
          <Route path="/News" element={<News/>}/>
          <Route path="/Music" element={<Music/>}/>
          <Route path="/Settings" element={<Settings/>}/>
          <Route path="/Friends" element={<Friends/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
