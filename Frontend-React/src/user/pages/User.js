import React from "react";
import UsersList from '../components/UsersList';

function Users() {
    const USERS = [{ 
        id: 'u1', 
        name: 'Tan', 
        image: 'https://en.wikipedia.org/wiki/Mountain#/media/File:Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
        places: 3 }];
    return <UsersList items={USERS} />;
};

export default Users;