import React, {useRef, useState, Suspense} from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import {Routes, Route, withRouter, BrowserRouter} from "react-router-dom";
import News from "./components/MainContent/News/News";
import Music from "./components/MainContent/Music/Music";
import Settings from "./components/MainContent/Settings/Settings";
import Friends from "./components/MainContent/Friends/Friends";
import UsersContainer from "./components/MainContent/FindUsers/UsersContainer";
import ProfileContainer
  from "./components/MainContent/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {getAuthThunkCreator} from "./redux/auth-reducer";
import Preloader from "./components/common/preloader/preloader";
import {initializeApp} from "./redux/app-reducer";
import store from "./redux/redux-store";
// import Messages from "./components/MainContent/Messages/Messages";
const Messages = React.lazy(
  () => import('./components/MainContent/Messages/Messages'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Nav state={this.props.store.getState().sidebarPage}/>
        <div className="main-content">
          <Routes>
            <Route
              path="/Profile/:userId"
              element={
                <ProfileContainer
                  store={this.props.store}
                />
              }
            />
            <Route
              path="/Profile/*"
              element={
                <ProfileContainer
                  store={this.props.store}
                />
              }
            />
            <Route
              path="/Messages/*"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Messages store={this.props.store}/>
                </Suspense>
              }
            />
            <Route path="/News" element={<News/>}/>
            <Route path="/Music" element={<Music/>}/>
            <Route path="/Settings" element={<Settings/>}/>
            <Route path="/Users" element={<UsersContainer/>}/>
            <Route path="/Friends" element={<Friends/>}/>
            <Route path="/Login" element={<Login/>}/>
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

let AppContainer = connect(mapStateToProps,
  {getAuthThunkCreator, initializeApp})(
  App);

const MainAPP = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer store={store}/>
    </Provider>
  </BrowserRouter>
}

export default MainAPP;