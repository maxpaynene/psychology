import React from 'react'

export default function Map() {
    return (
        <div id={"map-container-google-1"} className={"z-depth-1-half map-container"} style={{height:"500px"}}>
            <iframe 
                title={"map"}
                src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13317.663909907944!2d-70.6522764700737!3d-33.43846743345456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5987cbf32c7%3A0x2bd144712d3b9d0c!2sMonjitas%20527%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1584240191670!5m2!1ses!2scl"}
                style={{border:"0", height: '500px', width: '100%'}} 
            />
        </div>
    )
}