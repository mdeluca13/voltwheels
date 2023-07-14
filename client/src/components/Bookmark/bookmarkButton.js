"use strict";
import React, { useState, useEffect } from 'react';
import useSWR from 'swr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'

function BookmarkButton(props) {

    console.log(props)

    useEffect(() => {
        const userLoggedIn = localStorage.getItem('user');
        if (userLoggedIn) {
            setUser(JSON.parse(userLoggedIn));
        }
    }, []);


if (user===null) {
    return (
        <p><span><a href='/login'>Log in to bookmark cars</a></span></p>);
    }
    return <FindInitialState userId={user.userId} vehicleId={props.vehicleId}/>
}


function FindInitialState(props) {
    
    let BookmarkBool;

    const fetcher = url => fetch(url).then(r => r.json())
    const {data, error} =
    useSWR('/server/users/${props.userId}/${props.vehicleId}',
    fetcher)

    console.log("This vehicle has been bookmarked", data)
    if (error) return <div>failed to bookmark</div>
    if (data === undefined) return <div>undefined...</div>

    BookmarkBool = data;

    return <SetStateAndToggle BookmarkBool={BookmarkBool} userId={props.userId} vehicleId ={props.vehicleId}/>
}

function SetStateAndToggle(props) {
    const currentlyBookmarked = <FontAwesomeIcon icon={faHeart}/>

    const notCurrenlyBookmarked = <FontAwesomeIcon icon={faHeartBroken}/>

    const [bookmark, setBookmark] = useState(props.BookmarkBool);

    const toggleBookmark = (vehicleId) => {
        setBookmark((bookmark) =>{
            if (bookmark == true) {
                console.log('unbookmarked')
                console.log(props)

        fetch('/server/users/${props.userId}/${props.vehicleId}/remove',
        {method: 'POST' })
                .then(console.log('This was a bookmarked vehicle'));
            }
            if (bookmark == false) {
                console.log('bookmarked')
        
         fetch('/server/users/${props.userId}/${props.vehicleId}/add',
         {method: 'POST' })
                 .then(console.log("This is now bookmarked"));
            }

            return !bookmark;
        });
    }

    return (
        <button
              className={styles['bookmark-button']}
              onClick={() => toggleBookmark(props.vehicleId)}
              key={props.vehicleId}>
                {bookmark === true ? currentlyBookmarked :
                notCurrenlyBookmarked}
              </button>
    );
}

export {BookmarkButton};