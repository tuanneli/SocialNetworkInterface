import React from "react";
import classes from "./Users.module.css";
import {setUsersAC} from "../../../redux/Users-reducer";

const Users = (props) => {
  
  if (props.users.length === 0) {
    props.setUsers(
      [{
        id: 1,
        photoUrl: 'https://icdn.lenta.ru/images/2018/04/02/19/20180402190526005/detail_413d73b2ba6116e7c2558128150de97b.jpg',
        followed: false,
        name: 'Leps',
        status: 'Hello here',
        location: {city: 'London', country: 'UK'}
      },
        {
          id: 2,
          photoUrl: 'https://resizer.mail.ru/p/958fcf3a-be8d-5ee5-85a0-6c14d14fea96/AAACyXEZsPQY-9qIrrreaYf1oQl03xfeYMcMTMxm1fXgDCUOjsiP9W2EmK6MGlJjncHhTeWqkPLUDl4HmBj-5zxRXJs.jpg',
          followed: true,
          name: 'Baskov',
          status: 'Hello there',
          location: {city: 'Moscow', country: 'Russia'}
        },
        {
          id: 3,
          photoUrl: 'https://cdn.popcake.tv/wp-content/uploads/2020/09/fkirkorov_117397258_620398875534415_5381608046417569527_n.jpg',
          followed: true,
          name: 'Kirkorov',
          status: 'Hello everywhere',
          location: {city: 'Sofia', country: 'Bulgaria'}
        }]
    )
  }

  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img className={classes.photo} src={u.photoUrl} alt="photoUrl"/>
          </div>
          <div>
            {u.followed ? <button
              onClick={() => {props.unfollow(u.id)}}>Unfollow</button> : <button
              onClick={() => {props.follow(u.id)}}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)
    }
  </div>;
};

export default Users;
