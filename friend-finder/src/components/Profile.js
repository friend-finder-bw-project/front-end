// Colin and Luis

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";
import axiosWithAuth from "./axiosWithAuth";

export default function Profile(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get("https://friend-finder-server.herokuapp.com/api/users")
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [user]);

  return <ProfileCard user={user} />;
}
