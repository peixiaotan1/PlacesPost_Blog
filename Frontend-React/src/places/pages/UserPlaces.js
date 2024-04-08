import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import PlaceList from '../components/PlaceList';

export const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'someplace',
        description: 'somedes',
        imageURL:'asdasd',
        address:'asdasda',
        location: {
            lat: 50,
            lng: -73
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'someplace',
        description: 'somedes',
        imageURL:'asdasd',
        address:'asdasda',
        location: {
            lat: 50,
            lng: -73
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place=> place.creator=== userId);
    return <PlaceList items = {loadedPlaces}/>;
};

export default UserPlaces;