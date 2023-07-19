
import React, {useState} from "react";

function CarCard({ car, bookmarkedCar }) {
    const { id, make, model, year, image, bookmarked } = car

    const [isBookmarked, setIsBookmarked] = useState(bookmarked)

    const handleBookmarkChange = () => {
        setIsBookmarked(isBookmarked => !isBookmarked)
        fetch('http://localhost:4000/cars/${id}' , {
        method: "PATCH",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({bookmarked})
        })
        .then(response => response.json())
        .then(updatedCar => bookmarkedCar(updatedCar))
    }

    return (
        <div>
            <div id="bookmark-btn">
                {isBookmarked? (
                    <div onClick={handleBookmarkChange}>
                        {/* code for empty icon */}
                    </div>
                ) : (
                    <div onClick={handleBookmarkChange}>
                        {/* code for full icon here */}
                    </div>
                )}
            </div>
            <h3 className="car-title">{year}{make}{model}</h3>
            <img className="car-image" src={image}/>
        </div>
    );
}
export default CarCard;