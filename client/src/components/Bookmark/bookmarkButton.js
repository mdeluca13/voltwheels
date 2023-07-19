"use strict";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import Auth from '../../utils/auth';
import { ADD_BOOKMARK, REMOVE_BOOKMARK } from '../../utils/mutations';



function BookmarkButton(props) {
    const [user, setUser] = useState();

    console.log(props)

    useEffect(() => {
        const userLoggedIn = localStorage.getItem('id_token');
        if (userLoggedIn) {
            const userData = Auth.getProfile(userLoggedIn)
            setUser(userData.data);
        }
    }, []);


    if (user === null) {
        return (
            <p><span><a href='/login'>Log in to bookmark cars</a></span></p>);
    }
   return <SetStateAndToggle userId={user._id} carId={props.carId} />
}

function SetStateAndToggle(props) {
    const currentlyBookmarked = <FontAwesomeIcon icon={faHeart} />

    const notCurrenlyBookmarked = <FontAwesomeIcon icon={faHeartBroken} />

    const [user, setUser] = useState();

    console.log(props)

    useEffect(() => {
        const userLoggedIn = localStorage.getItem('id_token');
        if (userLoggedIn) {
            const userData = Auth.getProfile(userLoggedIn)
            setUser(userData.data);
        }
    }, []);

    const carId = props.carId
    const bookmarked = user.find((bookmarkedCars) => bookmarkedCars._id === carId)

    // need the code to tell whether or not the carId is within the bookmark array of the logged in user. 
    // if the car id is in the array display the filled in heart icon and when clicked it will remove the carid from array.
    // if the car id is Not in the array display the broken heart icon and when clicked it will add the carid to the array. 

    const toggleBookmark = () => {
            if (bookmarked) {
                REMOVE_BOOKMARK()
                console.log('unbookmarked')
                console.log(props)
            }
            if (bookmarked == false) {
                ADD_BOOKMARK()
                console.log('bookmarked')
            }

            return !bookmarked;
        };
    

    return (
        <button
            onClick={() => toggleBookmark(props.carId)}
            key={props.carId}>
            {bookmarked === true ? notCurrenlyBookmarked :
                currentlyBookmarked}
        </button>
    )};


export { BookmarkButton };