"use strict";
import React, { useState, useEffect } from 'react';
import useSWR from 'swr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import Auth from '../../utils/auth';

function BookmarkButton(props) {
    const [user, setUser] = useState(null);

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
   // return <FindInitialState userId={user.UserId} carId={props.carId} />
   return <SetStateAndToggle userId={user._id} carId={props.carId} />
}


// function FindInitialState(props) {

//     let BookmarkBool;

//     const fetcher = url => fetch(url).then(r => r.json())
//     const { data, error } =
//         useSWR('/server/users/${props.UserId}/${props.CarId}',
//             fetcher)

//     console.log("This vehicle has been bookmarked", data)
//     if (error) return <div>failed to bookmark</div>
//     if (data === undefined) return <div>undefined...</div>

//     BookmarkBool = data;

//     return <SetStateAndToggle BookmarkBool={BookmarkBool} userId={props.UserId} carId={props.carId} />
// }

function SetStateAndToggle(props) {
    const currentlyBookmarked = <FontAwesomeIcon icon={faHeart} />

    const notCurrenlyBookmarked = <FontAwesomeIcon icon={faHeartBroken} />

    const [bookmark, setBookmark] = useState(props.BookmarkBool);

    const toggleBookmark = (carId) => {
        setBookmark((bookmark) => {
            if (bookmark == true) {
                console.log('unbookmarked')
                console.log(props)

                // fetch(`/server/users/${props.userId}/${props.carId}/remove`,
                //     { method: 'POST' })
                //     .then(console.log('removed from bookmarks'));
            }
            if (bookmark == false) {
                console.log('bookmarked')

                // fetch(`/server/users/${props.userId}/${props.carId}/add`,
                //     { method: 'POST' })
                //     .then(console.log("added to bookmarks"));
            }

            return !bookmark;
        });
    }

    return (
        <button
            //   className={styles['bookmark-button']}
            onClick={() => toggleBookmark(props.carId)}
            key={props.carId}>
            {bookmark === true ? currentlyBookmarked :
                notCurrenlyBookmarked}
        </button>
    );
}

export { BookmarkButton };