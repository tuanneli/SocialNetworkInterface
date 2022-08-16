import {authAPI, followUnfollowAPI, userAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.usersId, "id",
          {followed: true})
        // users: state.users.map(u => {
        //   if (u.id === action.usersId) {
        //     return {...u, followed: true}
        //   }
        //   return u;
        // })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.usersId, "id",
          {followed: false})
      }
    case SET_USERS:
      return {...state, users: action.user}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.count}
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}
    default:
      return state;
  }
}

export const follow = (usersId) => ({type: FOLLOW, usersId});
export const unfollow = (usersId) => ({type: UNFOLLOW, usersId});
export const setUsers = (user) => ({type: SET_USERS, user});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
});

export const setTotalUsersCount = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalCount
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    userAPI.getUsers(currentPage, pageSize)
      .then(response => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
      });
  }
}

const followUnfollowFlow = (dispatch, id, APIMethod, actionCreator) => {
  APIMethod.then(response => {
    if (response.data.resultCode === 0) {
      dispatch(actionCreator)
    }
  })
}

export const getUnfollowThunkCreator = (id) => {
  return (dispatch) => {
    followUnfollowFlow(dispatch, id, userAPI.getUnfollow(id), unfollow(id));
  }
}

export const getFollowThunkCreator = (id) => {
  return (dispatch) => {
    followUnfollowFlow(dispatch, id, userAPI.getFollow(id), follow(id));
  }
}

export default usersReducer;


