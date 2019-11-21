// Colin and Luis

import React, { useEffect, useState } from "react";
import axios from "axios";
import FriendsCard from "./FriendsCard";
import axiosWithAuth from "./axiosWithAuth";

export default function Profile(props) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://friend-finder-server.herokuapp.com/api/users/matches")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [friends]);

  return (
    <section>
      {friends.map((friends, index) => {
        return <FriendsCard key={index} friends={friends} />;
      })}
    </section>
  );
}
