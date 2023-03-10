import React from "react";

function PageNotFound() {

    // console.log("Page Not Found");
    
    return (
        <div className="content card my-5">
            <div className="text-center">
                <div className="card-body">
                    <h3 className="card-title">
                        <b>"Sorry Page Not Found !" </b>
                    </h3>
                    <p className="card-text">
                        Page Not Found (ERROR - 404)
                        <br />
                        Page you are looking for doesn't exist in our server
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;