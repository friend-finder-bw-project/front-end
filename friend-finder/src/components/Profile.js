// Colin and Luis

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';


export default function Profile(props) {

    const [newUser, fetchNewUser] = useState ([])

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
           <ProfileCard newUser={newUser} />
       )
}


