import React from "react"


const Photo = props => {
    let url = `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`
    return (<li>
        <img src={url} alt="" />
    </li>)
}



export default Photo