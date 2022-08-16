import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

export const store = {
  _render: () => {
  },
  _state: {
    profilePage: {
      postData: [
        {id: 1, message: "Hi how are you?", likes: "5"},
        {id: 2, message: "Hables español?", likes: "8"},
        {id: 3, message: "O solo ingles?", likes: "11"},
      ],
      newPostText: "",
    },
    messagesPage: {
      messagesData: [
        {message: "One message", id: 1},
        {message: "Two message", id: 2},
        {message: "Three message", id: 3},
      ],
      newMessageText: "",
      dialogsData: [
        {
          name: "Kolya",
          id: 1,
          dialogImage:
            "https://img01.rl0.ru/afisha/e1200x600i/daily.afisha.ru/uploads/images/2/f2/2f23c421db983f28be0a4d9e84fe1d3d.png",
        },
        {
          name: "Vasya",
          id: 2,
          dialogImage:
            "https://m.media-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_.jpg",
        },
        {
          name: "Petya",
          id: 3,
          dialogImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR_n6KmpY1nngw_yst73_7-zy_wxtd-dtHjUwQRnhe2K_7j6Mx4QabChwWbRn3NH3ecxI&usqp=CAU",
        },
      ],
    },
    friendsPage: {
      friendsData: [
        {
          name: "Kolya",
          id: 1,
          friendsImage:
            "https://img01.rl0.ru/afisha/e1200x600i/daily.afisha.ru/uploads/images/2/f2/2f23c421db983f28be0a4d9e84fe1d3d.png",
        },
        {
          name: "Vasya",
          id: 2,
          friendsImage:
            "https://m.media-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_.jpg",
        },
        {
          name: "Petya",
          id: 3,
          friendsImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR_n6KmpY1nngw_yst73_7-zy_wxtd-dtHjUwQRnhe2K_7j6Mx4QabChwWbRn3NH3ecxI&usqp=CAU",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._render = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._render(this._state);
  },
};

export default store;
