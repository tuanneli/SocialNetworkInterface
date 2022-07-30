import React from 'react';

const initialState = {
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
}

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;