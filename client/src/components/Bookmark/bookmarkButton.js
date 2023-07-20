import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import Auth from '../../utils/auth';
import { ADD_BOOKMARK, REMOVE_BOOKMARK } from '../../utils/mutations';
import { QUERY_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';



function BookmarkButton(props) {
    // const [user, setUser] = useState();


    // useEffect(() => {
    //     const userLoggedIn = localStorage.getItem('id_token');
    //     // console.log(userLoggedIn);
    //     if (userLoggedIn) {
    //         const userData = Auth.getProfile(userLoggedIn)
    //         console.log(userData);
    //         setUser(userData.data);
    //     }
    const user = useState(() => {
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

// "use strict";
// import React, { useState, useEffect } from 'react';
// // import useSWR from 'swr'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
// import Auth from '../../utils/auth';

// function BookmarkButton(props) {
//     const [user, setUser] = useState(null);

//     console.log(props)

//     useEffect(() => {
//         const userLoggedIn = localStorage.getItem('id_token');
//         if (userLoggedIn) {
//             const userData = Auth.getProfile(userLoggedIn)
//             setUser(userData.data);
//         }
//     }, []);


//     if (user === null) {
//         return (
//             <p><span><a href='/login'>Log in to bookmark cars</a></span></p>);
//     }
//    // return <FindInitialState userId={user.UserId} carId={props.carId} />
//    return <SetStateAndToggle userId={user._id} carId={props.carId} />
// }


// // function FindInitialState(props) {

// //     let BookmarkBool;

// //     const fetcher = url => fetch(url).then(r => r.json())
// //     const { data, error } =
// //         useSWR('/server/users/${props.UserId}/${props.CarId}',
// //             fetcher)

// //     console.log("This vehicle has been bookmarked", data)
// //     if (error) return <div>failed to bookmark</div>
// //     if (data === undefined) return <div>undefined...</div>

// //     BookmarkBool = data;

// //     return <SetStateAndToggle BookmarkBool={BookmarkBool} userId={props.UserId} carId={props.carId} />
// // }

// function SetStateAndToggle(props) {
//     const currentlyBookmarked = <FontAwesomeIcon icon={faHeart} />

//     const notCurrenlyBookmarked = <FontAwesomeIcon icon={faHeartBroken} />

//     const [bookmark, setBookmark] = useState(props.BookmarkBool);

//     const toggleBookmark = (carId) => {
//         setBookmark((bookmark) => {
//             if (bookmark == true) {
//                 console.log('unbookmarked')
//                 console.log(props)

//                 // fetch(`/server/users/${props.userId}/${props.carId}/remove`,
//                 //     { method: 'POST' })
//                 //     .then(console.log('removed from bookmarks'));
//             }
//             if (bookmark == false) {
//                 console.log('bookmarked')

//                 // fetch(`/server/users/${props.userId}/${props.carId}/add`,
//                 //     { method: 'POST' })
//                 //     .then(console.log("added to bookmarks"));
//             }

//             return !bookmark;
//         });
//     }

//     return (
//         <button
//             //   className={styles['bookmark-button']}
//             onClick={() => toggleBookmark(props.carId)}
//             key={props.carId}>
//             {bookmark === true ? currentlyBookmarked :
//                 notCurrenlyBookmarked}
//         </button>
//     );
// }

// export { BookmarkButton };

// "use strict";
// import React, { useState, useEffect } from 'react';
// import useSWR from 'swr'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'

// function BookmarkButton(props) {

//     console.log(props)

//     useEffect(() => {
//         const userLoggedIn = localStorage.getItem('user');
//         if (userLoggedIn) {
//             setUser(JSON.parse(userLoggedIn));
//         }
//     }, []);


// if (user===null) {
//     return (
//         <p><span><a href='/login'>Log in to bookmark cars</a></span></p>);
//     }
//     return <FindInitialState userId={user.userId} vehicleId={props.vehicleId}/>
// }


// function FindInitialState(props) {
    
//     let BookmarkBool;

//     const fetcher = url => fetch(url).then(r => r.json())
//     const {data, error} =
//     useSWR('/server/users/${props.userId}/${props.vehicleId}',
//     fetcher)

//     console.log("This vehicle has been bookmarked", data)
//     if (error) return <div>failed to bookmark</div>
//     if (data === undefined) return <div>undefined...</div>

//     BookmarkBool = data;

//     return <SetStateAndToggle BookmarkBool={BookmarkBool} userId={props.userId} vehicleId ={props.vehicleId}/>
// }

// function SetStateAndToggle(props) {
//     const currentlyBookmarked = <FontAwesomeIcon icon={faHeart}/>

//     const notCurrenlyBookmarked = <FontAwesomeIcon icon={faHeartBroken}/>

//     const [bookmark, setBookmark] = useState(props.BookmarkBool);

//     const toggleBookmark = (vehicleId) => {
//         setBookmark((bookmark) =>{
//             if (bookmark == true) {
//                 console.log('unbookmarked')
//                 console.log(props)

//         fetch('/server/users/${props.userId}/${props.vehicleId}/remove',
//         {method: 'POST' })
//                 .then(console.log('This was a bookmarked vehicle'));
//             }
//             if (bookmark == false) {
//                 console.log('bookmarked')
        
//          fetch('/server/users/${props.userId}/${props.vehicleId}/add',
//          {method: 'POST' })
//                  .then(console.log("This is now bookmarked"));
//             }

//             return !bookmark;
//         });
//     }

//     return (
//         <button
//               className={styles['bookmark-button']}
//               onClick={() => toggleBookmark(props.vehicleId)}
//               key={props.vehicleId}>
//                 {bookmark === true ? currentlyBookmarked :
//                 notCurrenlyBookmarked}
//               </button>
//     );
// }

// export {BookmarkButton};