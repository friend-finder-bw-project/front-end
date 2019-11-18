// Colin and Luis

import React from 'react';

const FriendsCard = (props) => {

    return (

    <div>
        <h1>First name: {props.friends.firstName} </h1>
        <h2>Surname:    {props.friends.lastName} </h2>
        <h2>User name:  {props.friends.userName} </h2>
        <h2>Email:      {props.friends.mailAdress} </h2>

    </div>

    )
}


export default FriendsCard;