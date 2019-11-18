// Colin and Luis

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FriendsCard from './FriendsCard';

export default function Profile(props) {

    const [friends, fetchFriends] = useState([]);

    useEffect(() => {
      axios.get('')
                .then(responce => {
                    console.log(responce.data);
                    
                })
                .catch(error => {
                    console.log(error);
                })
    }, []);
  
    return (
      <section>
        {
               friends.map((friends, index) => {
                   return(
                       <FriendsCard key={index} friends={friends}/>
                   )
               })
           }
              
      
      </section>
    );
  }
  
  