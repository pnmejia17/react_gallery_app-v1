import React from "react";
import Photo from "./photo";




// PhotoList component should take in two props
// an array of photos, and the page title
// paaa data down from app compinentn

const PhotoList = props => {
    const results = props.photos
    if (results.length > 0) {
        let photos = results.map(photo =>
            <Photo
                key={photo.id}
                id={photo.id}
                server={photo.server}
                secret={photo.secret} />)
        return (
            < div className="photo-container" >
                <h2></h2>
                <ul>
                    {photos}
                </ul>
            </div>
        )
    }
}

export default PhotoList