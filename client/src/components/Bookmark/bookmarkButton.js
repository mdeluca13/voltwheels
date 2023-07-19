import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import Auth from '../../utils/auth';
import { ADD_BOOKMARK, REMOVE_BOOKMARK } from '../../utils/mutations';
import { QUERY_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';



function BookmarkButton(props) {
    const [user, setUser] = useState();


    // useEffect(() => {
        // const userLoggedIn = localStorage.getItem('id_token');
        // console.log(userLoggedIn);
        // if (userLoggedIn) {
        //     const userData = Auth.getProfile(userLoggedIn)
        //     console.log(userData);
        //     setUser(userData.data);
        // }
    // }, []);


    if (user === null) {
        return (
            <p><span><a href='/login'>Log in to bookmark cars</a></span></p>);
    }
   return <SetStateAndToggle carId={props.carId} />
}

function SetStateAndToggle(props) {
    const [user, setUser] = useState(() => {
        const userLoggedIn = localStorage.getItem('id_token');
        if (userLoggedIn) {
            const userData = Auth.getProfile(userLoggedIn)
            return userData.data
        }
        return null
    });
    const {loading, data} = useQuery(QUERY_USER, {
        variables: {username: user.username}
    })
    
    console.log(data);
    const currentlyBookmarked = <FontAwesomeIcon icon={faHeart} />

    const notCurrenlyBookmarked = <FontAwesomeIcon icon={faHeartBroken} />


    console.log(loading);
    console.log(data);

    // useEffect(() => {
    //     const userLoggedIn = localStorage.getItem('id_token');
    //     if (userLoggedIn) {
    //         const userData = Auth.getProfile(userLoggedIn)
    //         setUser(userData.data);
    //     }
    // }, []);

    const carId = props.carId
    // What needs to be fixed is the use of bookedmarked cars instead of cars column
    // bookmarked cars is returning null instead of an Empty Array
    const bookmarked = data?.user.bookmarkedCars.filter((bookmarkedCars) => bookmarkedCars._id === carId)

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
        <>
        {loading ? <h1>Loading</h1> : (
        <button
        onClick={() => toggleBookmark(props.carId)}
        key={props.carId}>
        {bookmarked === true ?  currentlyBookmarked:
           notCurrenlyBookmarked }
    </button>
        )}

        </>
    )};


export { BookmarkButton };