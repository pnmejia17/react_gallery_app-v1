import React from "react";




const NoResults = () => {

    return (
        < div className="photo-container" >
            <h2></h2>
            <ul>
                <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>You search did not return any results. Please try again.</p>
                </li>
            </ul>
        </div>
    )
}


export default NoResults