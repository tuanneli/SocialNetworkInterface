const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
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
}

const messagesReducer = (state = initialState, action) => {
  if (action.type === ADD_MESSAGE) {
    {
      const newMessage = {
        message: state.newMessageText,
        id: 4,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
    }
  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessageText = action.newMessageText;
  }
  return state;
}

export const updateNewMessageTextActionCreator = (text) => {
  return {type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text};
}
export const addMessageActionCreator = () => {
  return {type: ADD_MESSAGE};
}

export default messagesReducer;