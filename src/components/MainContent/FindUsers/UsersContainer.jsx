import React from "react";
import {connect} from "react-redux";
import {
  followAC,
  setUsersAC,
  unfollowAC
} from "../../../redux/Users-reducer";
import Users from "./Users";
import users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: usersId => dispatch(followAC(usersId)),
    unfollow: usersId => dispatch(unfollowAC(usersId)),
    setUsers: users => dispatch(setUsersAC(users)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
