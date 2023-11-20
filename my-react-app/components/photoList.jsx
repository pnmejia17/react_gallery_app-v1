import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Photo from "./photo";




// PhotoList component should take in two props
// an array of photos, and the page title
// pass data down from app component

const PhotoList = (props) => {

    const { query } = useParams()

    useEffect(() => {
        if (query) {
            props.handleQuery(query)
        } else {
            props.handleQuery(props.title)
        }
    }, [query, props.title])


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
                <h2>{props.title}</h2>
                <ul>
                    {photos}
                </ul>
            </div>
        )
    }
}

export default PhotoList