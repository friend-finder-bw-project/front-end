// Colin and Luis

import React from 'react';


const ProfileCard = (props) => {

    return (

    <div>
        <h1>First name: {props.newUser.firstName} </h1>
        <h2>Surname:    {props.newUser.lastName} </h2>
        <h2>User name:  {props.newUser.userName} </h2>
        <h2>Email:      {props.newUser.mailAdress} </h2>

    </div>

    )
}


export default ProfileCard;



